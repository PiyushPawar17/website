import Fade from 'react-reveal/Fade';

import Container from './Container';
import SVG from './SVG';

const About: React.FC = () => (
	<section className="about" id="about">
		<Container>
			<SVG icon="circleDark" width={50} top="7%" left="60%" />
			<SVG icon="hexagonDark" width={65} top="7%" left="85%" />
			<SVG icon="triangleDark" width={55} top="18%" left="35%" />
			<SVG icon="hexagonDark" width={110} top="40%" left="65%" />
			<SVG icon="triangleDark" width={75} top="65%" left="5%" />
			<SVG icon="rectangleColored" width={80} top="70%" left="50%" />
			<SVG icon="circleDark" width={50} top="80%" left="80%" />
		</Container>
		<div className="about__content">
			<h1 className="heading--primary heading--yellow">About Me</h1>
			<Fade bottom distance="30px" delay={50}>
				<p className="about__description">
					Hey there, I&apos;m <span className="bold yellow-text">Piyush</span>, a Front-end developer from
					India. I love building beautiful websites using React. I&apos;ve worked with JavaScript the most and
					like to keep up with its advancements.
				</p>
			</Fade>
			<Fade bottom distance="30px" delay={150}>
				<p className="about__description">
					UI/UX design is something that I&apos;ve been getting into besides Front-end development. It has
					been helping me by building a bridge to get a view of a designer and a developer. I&apos;ve tried my
					hands on UI designing, which can be found on{' '}
					<a
						href="https://dribbble.com/PiyushPawar17"
						target="_blank"
						rel="noopener noreferrer"
						className="yellow-text"
					>
						Dribbble
					</a>
					.
				</p>
			</Fade>
		</div>
	</section>
);

export default About;
