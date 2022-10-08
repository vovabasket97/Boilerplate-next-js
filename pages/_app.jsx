import MainProvider from 'providers/MainProvider';

import '@/assets/styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	);
}

export default MyApp;
