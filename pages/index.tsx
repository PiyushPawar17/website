import { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
	const [shouldHideShapes, setShouldHideShapes] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 750) {
			setShouldHideShapes(true);
		}

		const updateState = () => {
			if (window.innerWidth < 750) {
				setShouldHideShapes(true);
			} else {
				setShouldHideShapes(false);
			}
		};

		window.addEventListener('resize', updateState);

		return () => window.removeEventListener('resize', updateState);
	}, []);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Piyush Pawar - Front-end Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />

				<meta property="og:title" content="Piyush Pawar" />
				<meta
					name="og:description"
					content="I code delightful User Experiences bringing ideas to life in the browser."
				/>
				<meta property="og:url" content="https://piyushpawar.dev" />
				<meta property="og:image" content="/static/img/avatar.png" />

				<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

				<link
					href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
					rel="preload"
					as="stylesheet"
				/>
			</Head>
			<Navbar />
			<main className="main">
				<Home shouldHideShapes={shouldHideShapes} />
				<Projects shouldHideShapes={shouldHideShapes} />
				<About />
				<Contact shouldHideShapes={shouldHideShapes} />
			</main>
			<Footer />
		</>
	);
};

export default Index;
