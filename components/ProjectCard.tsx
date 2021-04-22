import Image from 'next/image';
import clsx from 'clsx';

interface ProjectCardProps {
	title: string;
	externalURL: string;
	description?: string;
	tech?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, externalURL }) => {
	const fileName = title.replace(/ /g, '-').toLowerCase();
	const platform = externalURL.includes('github.com') ? 'GitHub' : 'Dribbble';

	return (
		<a
			href={externalURL}
			target="_blank"
			rel="noreferrer noopener"
			className="inline-block w-full p-3 sm:p-4 bg-code rounded outline-none transform transition duration-200 hover:scale-102 focus:scale-102 focus:ring-2 ring-primary ring-offset-4 focus:ring-offset-body"
		>
			<div className="overflow-hidden grid place-items-center">
				<Image
					src={`/static/projects/${fileName}.jpg`}
					alt={title}
					width={640}
					height={360}
					layout="intrinsic"
					quality={100}
					className="object-cover"
					priority
				/>
			</div>
			<h2
				className={clsx('flex justify-between items-center text-base sm:text-lg font-bold mt-5', {
					'mb-4': platform === 'GitHub'
				})}
			>
				<p className="link link--external">{title}</p>
				<div>
					<img src={`/static/logos/${platform.toLowerCase()}.svg`} width="20" alt={`${platform} Logo`} />
				</div>
			</h2>
			{description && <p className="text-sm sm:text-base mt-1 text-gray-100">{description}</p>}
			{tech && (
				<small className="block text-xs opacity-70 mt-4">
					{tech.map(t => (
						<span key={t} className="project-card__tech">
							{t}
						</span>
					))}
				</small>
			)}
		</a>
	);
};

export default ProjectCard;
