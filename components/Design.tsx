import ProjectCard from '@components/ProjectCard';

const Design = () => {
	return (
		<section>
			<h1 className="text-xl sm:text-lg lg:text-2xl font-bold uppercase my-12">Me as a Designer ↓</h1>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
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
				className="rounded-sm outline-none focus:ring-2 ring-primary ring-offset-2 focus:ring-offset-body link link--external link--social"
			>
				Find more designs on Dribbble
			</a>
		</section>
	);
};

export default Design;
