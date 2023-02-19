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
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth);
  const [user, setUser] = useState<any>(null);
  console.log("LOGGED IN USER", loggedInUser);
const persistor = getPersistor();
const router = useRouter();
const {dispatch} = store;

  useEffect(() => {
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
          getUserFromFirebase(loggedInUser).then((user) => {
            if(user?.role === "shipper"){
              router.push("/shipper/management");
            }
            if(user?.role === "admin"){
              router.push("/admin");
            }
          } );
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
