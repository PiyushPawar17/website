import Link from 'next/link';

const Intro: React.FC = () => {
	return (
		<section className="intro">
			<header className="intro__header">
				<h3 className="intro__greeting">Hey there, I'm</h3>
				<h1 className="intro__name">Piyush Pawar</h1>
				<h2 className="intro__job-title">Front-End Developer</h2>
			</header>
			<p className="intro__details">
				I code (and occasionally design) delightful User Interfaces bringing ideas to life in the browser
			</p>
			<Link href="/about-me#contact">
				<a className="intro__button">Get In Touch</a>
			</Link>
		</section>
	);
};

export default Intro;
