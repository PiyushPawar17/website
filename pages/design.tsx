import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const Design: React.FC = () => {
	return (
		<Layout title="Design | Piyush Pawar">
			<main className="container design">
				<h1 className="type__heading">Me as a Designer ↓</h1>
				<section className="projects">
					<ProjectCard title="Todo List" externalURL="https://dribbble.com/shots/5949355-Todo-List" />
					<ProjectCard title="Music Player" externalURL="https://dribbble.com/shots/5949361-Music-Player" />
					<ProjectCard title="Hotel Cards" externalURL="https://dribbble.com/shots/6296071-Hotel-Cards" />
					<ProjectCard
						title="Trello Redesign"
						externalURL="https://dribbble.com/shots/14220563-Trello-Redesign"
					/>
				</section>
				<a
					href="https://dribbble.com/PiyushPawar17"
					target="_blank"
					rel="noreferrer noopener"
					className="link link--external link--social"
				>
					Find more designs on Dribbble
				</a>
			</main>
		</Layout>
	);
};

export default Design;
