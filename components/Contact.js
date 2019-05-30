import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Contact = () => (
	<section className="contact" id="contact">
		<div className="contact__content">
			<header className="heading">
				<h1 className="heading--primary heading--yellow">Say Hello</h1>
			</header>
			<main className="contact__contact">
				<Zoom duration={400}>
					<section className="contact__email">
						<p>Have a project in mind that you would like to work on with me?</p>
						<p>Feel free to ping me at</p>
						<p className="contact__email-id">
							<img src="/static/img/email.svg" alt="email" />
							<span className="text-yellow">piyushpawar25@gmail.com</span>
						</p>
					</section>
				</Zoom>
				<div className="contact__hr" />
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
				</section>
			</main>
		</div>
		<div className="box box--left box--yellow" />
	</section>
);

export default Contact;
