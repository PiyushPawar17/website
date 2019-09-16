import Fade from 'react-reveal/Fade';

const skillsSections = [
	{
		sectionName: 'Front-End',
		skills: [
			'HTML',
			'CSS',
			'SCSS',
			'JavaScript (and ECMAScript)',
			'React',
			'Gatsby',
			'Redux',
			'Redux Thunk',
			'Styled Components'
		]
	},
	{
		sectionName: 'Back-End',
		skills: ['Node.js', 'Express', 'REST API', 'MongoDB', 'Firebase', 'OAuth', 'JWT Authentication', 'Passport']
	},
	{
		sectionName: 'Testing / Tools / Other Skills',
		skills: ['Jest', 'Mocha', 'Chai', 'Supertest', 'Git', 'GitHub', 'Postman', 'UI Design', 'Adobe XD']
	}
];

const SkillSet = () => (
	<section className="skillset" id="skillset">
		<div className="skillset__content">
			<header className="heading">
				<h1 className="heading--primary heading--blue">Skill Set</h1>
			</header>
			<main className="skillset__skills">
				{skillsSections.map((section, i) => (
					<Fade key={section.sectionName} bottom distance="20px" delay={i * 250}>
						<section className="skillset__skill-section">
							<h2 className="heading--secondary text-blue">{section.sectionName}</h2>
							<ul className="skillset__skills-list">
								{section.skills.map(skill => (
									<li key={skill} className="skillset__skill">
										{skill}
									</li>
								))}
							</ul>
						</section>
					</Fade>
				))}
			</main>
		</div>
		<div className="box box--left box--blue" />
	</section>
);

export default SkillSet;
