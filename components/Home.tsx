import AnchorLink from 'react-anchor-link-smooth-scroll';

import Container from './Container';
import SVG from './SVG';

import { Props } from '../types/common';

const Home: React.FC<Props> = ({ shouldHideShapes }) => (
	<section className="home" id="home">
		<Container>
			<SVG icon="circleColored" width={100} top="13%" left="7%" />
			<SVG icon="circleDark" width={40} top="22%" left="25%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="rectangleDark" width={45} top="15%" left="35%" />
			<SVG icon="rectangleColored" width={100} top="22%" left="50%" />
			<SVG icon="hexagonDark" width={80} top="16%" left="70%" />
			<SVG icon="circleDark" width={40} top="55%" left="83%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="rectangleDark" width={65} top="80%" left="8%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="triangleDark" width={45} top="88%" left="18%" />
			<SVG icon="hexagonColored" width={140} top="75%" left="30%" />
			<SVG icon="circleDark" width={55} top="65%" left="50%" />
			<SVG icon="hexagonDark" width={65} top="70%" left="68%" />
			<SVG icon="triangleDark" width={45} top="83%" left="90%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="triangleDark" width={45} top="88%" left="90%" shouldHideShapes={shouldHideShapes} hidden />
		</Container>
		<div className="home__content">
			<header>
				<h1 className="title">
					Hi, I&apos;m <span className="primary-color-text">Piyush Pawar</span>
				</h1>
				<h2 className="subtitle">I code delightful User Experiences bringing ideas to life in the browser</h2>
			</header>
			<div className="home__cta">
				<AnchorLink offset="70" href="#contact" className="btn btn--primary">
					Contact Me
				</AnchorLink>
				<AnchorLink offset="70" href="#projects" className="btn">
					See My Work
				</AnchorLink>
			</div>
		</div>
	</section>
);

export default Home;
