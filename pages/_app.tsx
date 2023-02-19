import "../styles/globals.scss";

import { getPersistor } from "@rematch/persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { store } from "../store";
import { auth, db, getUserFromFirebase } from '../utils/firebase';
import LoginPage from "../components/Login";
import { Loading } from "react-admin";


function MyApp({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth);
  const [user, setUser] = useState<any>(null);
  console.log("LOGGED IN USER", loggedInUser);
const persistor = getPersistor();
const {dispatch} = store;

  useEffect(() => {
    getUserFromFirebase(loggedInUser?.uid).then((user) => {
      setUser(user);
    } );
    const setUserInFirebase = async () => {
      try {
        if(loggedInUser){
          const data = {
            email: loggedInUser.email,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser.photoURL,
            displayName: loggedInUser.displayName,
            phoneNumber: loggedInUser.phoneNumber
          }
          await setDoc(
            doc(db, 'users', loggedInUser.uid),data,
            {merge: true}
          )
          dispatch.user.setUserInfo(data);
        }
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  );
}

export default MyApp;
