import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => (
	<section className="home" id="home">
		<div className="home__content">
			<header className="home__header">
				<h2 className="home__heading-secondary home__greeting">Hey there!</h2>
				<h1 className="home__heading-primary">
					I&apos;m <span className="text-pink">Piyush</span>
				</h1>
				<h2 className="home__heading-secondary home__description">
					Full Stack Web Developer who loves to work with React, Node.js, MongoDB and can design delightful
					User Interfaces.
				</h2>
				<AnchorLink offset="70" href="#contact" className="btn">
					Contact Me
				</AnchorLink>
			</header>
			<div className="home__boy">
				<img src="/static/img/boy.svg" alt="Boy" />
			</div>
		</div>
		<div className="box box--right box--pink" />
	</section>
);

export default Home;
