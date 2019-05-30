import ProjectCard from './ProjectCard';

const Projects = () => (
	<section className="projects" id="projects">
		<div className="projects__content">
			<header className="heading">
				<h1 className="heading--primary heading--purple">Projects</h1>
			</header>
			<main className="projects__projects-list">
				<ProjectCard
					name="Colormark"
					description="A Web App to save your favorite colors"
					technologies={[
						{ name: 'Front-End', skills: ['React', 'Redux', 'SCSS', 'Styled Components'] },
						{ name: 'Back-End', skills: ['Node.js', 'Express', 'MongoDB', 'OAuth'] }
					]}
					link="https://github.com/PiyushPawar17/colormark"
					delay={0}
				/>
				<ProjectCard
					name="Course Catalogue"
					description="A website to find online courses"
					technologies={[
						{ name: 'Front-End', skills: ['React', 'Redux', 'Ant Design'] },
						{ name: 'Back-End', skills: ['Node.js', 'Express', 'MongoDB', 'JWT'] },
						{ name: 'Testing', skills: ['Jest', 'Supertest'] }
					]}
					link="https://github.com/PiyushPawar17/course-catalogue"
					delay={250}
				/>
				<ProjectCard
					name="Classroom"
					description="An electron app similar to Google Classroom"
					technologies={[
						{ name: 'Front-End', skills: ['React', 'Electron'] },
						{ name: 'Back-End', skills: ['Firebase'] }
					]}
					link="https://github.com/PiyushPawar17/classroom"
					delay={500}
				/>
			</main>
			<a
				href="https://github.com/PiyushPawar17"
				target="_blank"
				rel="noopener noreferrer"
				className="projects__github"
			>
				More on GitHub
			</a>
		</div>
		<div className="box box--right box--purple" />
	</section>
);

export default Projects;
