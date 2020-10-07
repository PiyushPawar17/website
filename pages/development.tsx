import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const Development: React.FC = () => {
	return (
		<Layout title="Development | Piyush Pawar">
			<main className="container development">
				<h1 className="type__heading">Me as a Developer ↓</h1>
				<section className="projects">
					<ProjectCard
						title="Course Catalogue"
						description="A website to find online courses"
						tech={['React', 'Redux', 'Node.js', 'MongoDB']}
						externalURL="https://github.com/PiyushPawar17/course-catalogue"
						demoURL="https://catalogue-course.herokuapp.com"
					/>
					<ProjectCard
						title="Colormark"
						description="A website to save your favorite colors, palletes and gradients"
						tech={['React', 'Redux', 'Styled Components', 'MongoDB']}
						externalURL="https://github.com/PiyushPawar17/colormark"
						demoURL="https://color-mark.herokuapp.com"
					/>
					<ProjectCard
						title="Classroom"
						description="Desktop app similiar to Google Classroom"
						tech={['React', 'Electron', 'Firebase']}
						externalURL="https://github.com/PiyushPawar17/classroom"
					/>
					<ProjectCard
						title="Developing Mind"
						description="Personal Blog"
						tech={['React', 'Gatsby']}
						externalURL="https://github.com/PiyushPawar17/developing-mind"
						demoURL="https://blog.piyushpawar.dev"
					/>
				</section>
				<a
					href="https://github.com/PiyushPawar17"
					target="_blank"
					rel="noreferrer noopener"
					className="link link--external link--social"
				>
					Find more projects on GitHub
				</a>
			</main>
		</Layout>
	);
};

export default Development;
