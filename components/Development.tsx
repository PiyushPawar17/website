import ProjectCard from '@components/ProjectCard';

const Development = () => {
	return (
		<section className="mb-24">
			<h1 className="text-xl sm:text-lg lg:text-2xl font-bold uppercase my-12">Me as a Developer ↓</h1>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
				<ProjectCard
					title="Course Catalogue"
					description="A website to find online courses"
					tech={['React', 'Redux', 'Node.js', 'MongoDB']}
					externalURL="https://github.com/PiyushPawar17/course-catalogue"
				/>
				<ProjectCard
					title="Colormark"
					description="A website to save your favorite colors, palletes and gradients"
					tech={['React', 'Redux', 'Styled Components', 'MongoDB']}
					externalURL="https://github.com/PiyushPawar17/colormark"
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
					tech={['React', 'Next.js', 'Firebase']}
					externalURL="https://github.com/PiyushPawar17/developing-mind"
				/>
			</section>
			<a
				href="https://github.com/PiyushPawar17"
				target="_blank"
				rel="noreferrer noopener"
				className="rounded-sm outline-none focus:ring-2 ring-primary ring-offset-2 focus:ring-offset-body link link--external link--social"
			>
				Find more projects on GitHub
			</a>
		</section>
	);
};

export default Development;
