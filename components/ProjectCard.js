import Fade from 'react-reveal/Fade';

const ProjectCard = ({ name, description, technologies, link, delay }) => (
	<Fade bottom distance="30px" delay={delay}>
		<section className="card" data-aos="zoom-in-up">
			<h2 className="card__header">{name}</h2>
			<section className="card__content">
				<p className="card__description">{description}</p>
				<section className="card__technologies">
					{technologies.map(technology => (
						<section className="card__technology" key={technology.name}>
							<h3 className="heading--tertiary">{technology.name}</h3>
							<p>
								{technology.skills.map(skill => (
									<span key={skill} className="card__skills">
										{skill}
									</span>
								))}
							</p>
						</section>
					))}
				</section>
			</section>
			<section className="card__link">
				<a href={link} target="_blank" rel="noopener noreferrer" className="card__github">
					<img src="/static/img/github.svg" alt="GitHub" />
				</a>
			</section>
		</section>
	</Fade>
);

export default ProjectCard;
