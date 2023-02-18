import '../styles/globals.scss';

import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store } from '../store';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
	const persistor = getPersistor();
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

export default MyApp;