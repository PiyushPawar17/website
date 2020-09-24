import Fade from 'react-reveal/Fade';

import Container from './Container';
import SVG from './SVG';

import { Props } from '../types/common';

interface ProjectCardProps {
	name: string;
	description: string;
	tech: string[];
	link: string;
	delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, tech, link, delay }) => (
	<Fade bottom distance="30px" delay={delay}>
		<a className="card" href={link} target="_blank" rel="noopener noreferrer">
			<h2 className="card__heading">{name}</h2>
			<p className="card__description">{description}</p>
			<p className="card__tech">
				<span className="bold">Tech Used: </span>
				{tech.map(skill => (
					<span key={skill} className="card__skill">
						{skill}
					</span>
				))}
			</p>
		</a>
	</Fade>
);

const Projects: React.FC<Props> = ({ shouldHideShapes }) => (
	<section className="projects" id="projects">
		<Container>
			<SVG icon="hexagonDark" width={85} top="5%" left="65%" />
			<SVG icon="triangleColored" width={100} top="14%" left="43%" />
			<SVG icon="rectangleDark" width={70} top="38%" left="3%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="triangleDark" width={50} top="48%" left="17%" />
			<SVG icon="circleColored" width={95} top="43%" left="90%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="hexagonDark" width={65} top="75%" left="75%" />
			<SVG icon="triangleDark" width={50} top="70%" left="93%" shouldHideShapes={shouldHideShapes} hidden />
			<SVG icon="triangleDark" width={50} top="76%" left="93%" shouldHideShapes={shouldHideShapes} hidden />
		</Container>
		<div className="projects__content">
			<h1 className="heading--primary heading--blue">Projects</h1>
			<section className="projects__list">
				<ProjectCard
					name="Course Catalogue"
					description="A website to find online courses"
					tech={['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT']}
					link="https://github.com/PiyushPawar17/course-catalogue"
					delay={0}
				/>
				<ProjectCard
					name="ColorMark"
					description="A website to save your favorite colors"
					tech={['React', 'Redux', 'Styled Components', 'Express', 'MongoDB', 'JWT']}
					link="https://github.com/PiyushPawar17/colormark"
					delay={250}
				/>
				<ProjectCard
					name="Clasroom"
					description="A desktop app build with electron similar to Google Classroom"
					tech={['React', 'Electron', 'Firebase']}
					link="https://github.com/PiyushPawar17/classroom"
					delay={500}
				/>
				<ProjectCard
					name="Developing Mind"
					description="Personal Blog"
					tech={['React', 'Gatsby']}
					link="https://github.com/PiyushPawar17/developing-mind"
					delay={750}
				/>
			</section>
			<Fade bottom distance="30px" delay={100}>
				<p className="projects__github">
					Find my other projects on{' '}
					<a href="https://github.com/PiyushPawar17" target="_blank" rel="noopener noreferrer">
						<span className="blue-text">GitHub</span>
					</a>
				</p>
			</Fade>
		</div>
	</section>
);

export default Projects;
