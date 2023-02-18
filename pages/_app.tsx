import "../styles/globals.scss";

import { getPersistor } from "@rematch/persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { store } from "../store";
import { auth, db } from '../utils/firebase';
import LoginPage from "../components/Login";
import { Loading } from "react-admin";

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth);
  console.log("LOGGED IN USER", loggedInUser);

  useEffect(() => {
    const setUserInFirebase = async () => {
      try {
        await setDoc(
          doc(db, 'users', loggedInUser.uid),
          {
            email: loggedInUser.email,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser.photoURL,
            displayName: loggedInUser.displayName,
          },
          {merge: true}
        )
      } catch(error) {
        console.log("ERROR SETTING USER INFO IN FIREBASE", error)
      }
    }
    if (loggedInUser){
      setUserInFirebase();
    }
  }
  , [loggedInUser])

  if(loading){
    return <Loading />
  }
  if(!loggedInUser){
    return <LoginPage />;
  }

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
