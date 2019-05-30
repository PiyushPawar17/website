import Head from 'next/head';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import SkillSet from '../components/SkillSet';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import '../sass/main.scss';

const Index = () => (
	<div>
		<Head>
			<meta charSet="utf-8" />
			<title>Piyush Pawar</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
			<meta name="description" content="Portfolio website of Piyush Pawar" />

			<link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />

			<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
		</Head>
		<Navbar />
		<main className="main">
			<Home />
			<SkillSet />
			<Projects />
			<Contact />
		</main>
		<Footer />
	</div>
);

export default Index;
