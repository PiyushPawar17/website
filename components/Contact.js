import Fade from 'react-reveal/Fade';

import Container from './Container';
import SVG from './SVG';

const Contact = ({ shouldHideShapes }) => (
	<section className="contact" id="contact">
		<Container>
			<SVG icon="triangleDark" width={60} top="1%" left="27%" />
			<SVG icon="circleColored" width={100} top="5%" left="55%" />
			<SVG icon="hexagonDark" width={80} top="2%" left="75%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="hexagonColored" width={110} top="25%" left="2%" />
			<SVG icon="circleDark" width={45} top="35%" left="89%" />
			<SVG icon="triangleDark" width={60} top="52%" left="92%" shouldHideShapes={shouldHideShapes} hidden />
		</Container>
		<div className="contact__content">
			<h1 className="heading--primary heading--pink">Say Hello</h1>
			<Fade top distance="20px" duration={400}>
				<section className="contact__card">
					<h2 className="contact__heading">Let&apos;s start something amazing together!</h2>
					<p className="contact__sub-heading">
						Have a project in mind that you would like to work on with me?
					</p>
					<p className="contact__sub-heading">Feel free to ping me at</p>
					<div className="contact__email primary-color-text">
						<img src="/static/img/email.svg" alt="Email" />
						<p>piyushpawar25@gmail.com</p>
					</div>
				</section>
			</Fade>
			<section className="contact__social-links">
				<Fade bottom distance="10px" duration={200} delay={400}>
					<a href="https://github.com/PiyushPawar17" target="_blank" rel="noopener noreferrer">
						<img src="/static/img/github.svg" alt="GitHub" />
					</a>
				</Fade>
				<Fade bottom distance="10px" duration={200} delay={600}>
					<a href="https://dribbble.com/PiyushPawar17" target="_blank" rel="noopener noreferrer">
						<img src="/static/img/dribbble.svg" alt="Dribbble" />
					</a>
				</Fade>
				<Fade bottom distance="10px" duration={200} delay={800}>
					<a href="https://www.linkedin.com/in/piyush-pawar" target="_blank" rel="noopener noreferrer">
						<img src="/static/img/linkedin.svg" alt="LinkedIn" />
					</a>
				</Fade>
				<Fade bottom distance="10px" duration={200} delay={1000}>
					<a href="https://twitter.com/PiyushPawar_17" target="_blank" rel="noopener noreferrer">
						<img src="/static/img/twitter.svg" alt="Twitter" />
					</a>
				</Fade>
				<Fade bottom distance="10px" duration={200} delay={1200}>
					<a href="https://blog.piyushpawar.dev" target="_blank" rel="noopener noreferrer">
						<img src="/static/img/blog.svg" alt="Blog" />
					</a>
				</Fade>
			</section>
		</div>
	</section>
);

export default Contact;
