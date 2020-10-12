import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward-subtle.css';

import '../sass/main.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>Piyush Pawar | Front-end Developer</title>

				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
				<meta property="og:title" content="Piyush Pawar | Front-end Developer" />
				<meta
					name="og:description"
					content="I code delightful User Experiences bringing ideas to life in the browser."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://piyushpawar.dev" />
				<meta property="og:image" content="/img/avatar.png" />
				<meta
					name="description"
					content="I code delightful User Experiences bringing ideas to life in the browser."
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="application-name" content="Piyush Pawar" />
				<meta name="apple-mobile-web-app-title" content="Piyush Pawar" />
				<meta name="theme-color" content="#0ba5f8" />
				<meta name="msapplication-navbutton-color" content="#0ba5f8" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="msapplication-starturl" content="/" />

				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" type="image/x-icon" sizes="64x64 32x32 24x24 16x16" href="/favicon.ico" />
				<link rel="apple-touch-icon" type="image/x-icon" sizes="64x64 32x32 24x24 16x16" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
				<link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/logo192.png" />
				<link rel="icon" type="image/png" sizes="512x512" href="/logo512" />
				<link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/logo512" />

				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
					rel="preload"
					as="style"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
