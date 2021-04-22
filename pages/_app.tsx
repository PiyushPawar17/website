import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';

import * as gtag from '@lib/gtag';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward-subtle.css';
import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const queryClientRef = useRef<typeof QueryClient.prototype | null>(null);
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

	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient();
	}

	const meta = {
		title: 'Piyush Pawar | Front-end Developer',
		description: `I code delightful User Experiences bringing ideas to life in the browser`
	};

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />

				<title>{meta.title}</title>
				<meta name="title" content={meta.title} />
				<meta name="description" content={meta.description} />

				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://piyushpawar.dev" />
				<meta property="og:image" content="https://piyushpawar.dev/static/img/avatar.png" />
				<meta property="og:site_name" content="Piyush Pawar" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:site" content="@PiyushPawar_17" />
				<meta property="twitter:creator" content="@PiyushPawar_17" />
				<meta property="twitter:url" content="https://piyushpawar.dev" />
				<meta property="twitter:title" content={meta.title} />
				<meta property="twitter:description" content={meta.description} />
				<meta property="twitter:image" content="https://piyushpawar.dev/static/img/avatar.png" />
				<meta property="twitter:image:alt" content="Piyush Pawar Site Logo" />

				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" type="image/x-icon" sizes="64x64 32x32 16x16" href="/favicon.ico" />
				<link rel="apple-touch-icon" type="image/x-icon" sizes="64x64 32x32 16x16" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
				<link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/logo192.png" />
				<link rel="icon" type="image/png" sizes="512x512" href="/logo512" />
				<link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/logo512" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
			</Head>
			<QueryClientProvider client={queryClientRef.current}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
};

export default App;
