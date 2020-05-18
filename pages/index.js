import { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import '../sass/main.scss';

const Index = () => {
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
				<meta
					name="description"
					content="I code delightful User Experiences bringing ideas to life in the browser."
				/>

				<link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />

				<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
			</Head>
			<Navbar />
			<main className="main">
				<Home shouldHideShapes={shouldHideShapes} />
				<Projects shouldHideShapes={shouldHideShapes} />
				<About shouldHideShapes={shouldHideShapes} />
				<Contact shouldHideShapes={shouldHideShapes} />
			</main>
			<Footer />
		</>
	);
};

export default Index;
