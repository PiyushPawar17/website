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

	const imgWebp = `/img/projects/${fileName}.webp`;
	const imgJpg = `/img/projects/${fileName}.jpg`;

	return (
		<div className="project-card">
			<div className={`project-card__img-wrapper project-card__${projectPage}`}>
				<picture>
					<source type="image/webp" srcSet={imgWebp} />
					<source type="image/jpeg" srcSet={imgJpg} />
					<img src={imgJpg} alt={title} loading="lazy" />
				</picture>
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
