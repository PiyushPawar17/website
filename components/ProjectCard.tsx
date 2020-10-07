interface ProjectCardProps {
	title: string;
	externalURL: string;
	description?: string;
	tech?: string[];
	demoURL?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, externalURL, demoURL }) => {
	const fileName = title.replace(/ /g, '-').toLowerCase();
	const platform = externalURL.includes('github.com') ? 'GitHub' : 'Dribbble';
	const projectPage = platform === 'GitHub' ? 'development' : 'design';

	return (
		<div className="project-card">
			<div className={`project-card__img-wrapper project-card__${projectPage}`}>
				<img src={`/img/projects/${fileName}.webp`} alt={title} />
			</div>
			<h2 className="project-card__title type__title">
				<a
					href={demoURL || externalURL}
					target="_blank"
					rel="noreferrer noopener"
					className={demoURL && 'link link--external'}
				>
					{title}
				</a>
				<a href={externalURL} target="_blank" rel="noreferrer noopener">
					<img src={`/img/logos/${platform.toLowerCase()}-minimal.svg`} alt={platform} />
				</a>
			</h2>
			{description && <p className="type__sub-title">{description}</p>}
			{tech && (
				<small className="type__info">
					{tech.map(t => (
						<span key={t} className="project-card__tech">
							{t}
						</span>
					))}
				</small>
			)}
		</div>
	);
};

export default ProjectCard;
