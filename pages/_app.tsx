import "../styles/globals.scss";

import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store } from "../store";
import { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = getPersistor();
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="<your_client_id>">
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default MyApp;
