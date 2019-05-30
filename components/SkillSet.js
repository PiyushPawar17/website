import Fade from 'react-reveal/Fade';

const SkillSet = () => (
	<section className="skillset" id="skillset">
		<div className="skillset__content">
			<header className="heading">
				<h1 className="heading--primary heading--blue">Skill Set</h1>
			</header>
			<main className="skillset__skills">
				<Fade bottom distance="20px" delay={0}>
					<section className="skillset__skill-section">
						<h2 className="heading--secondary text-blue">Front-End</h2>
						<ul className="skillset__skills-list">
							<li className="skillset__skill">HTML</li>
							<li className="skillset__skill">CSS</li>
							<li className="skillset__skill">SCSS</li>
							<li className="skillset__skill">JavaScript &#40;and ECMAScript&#41;</li>
							<li className="skillset__skill">React</li>
							<li className="skillset__skill">Redux</li>
							<li className="skillset__skill">Redux Thunk</li>
							<li className="skillset__skill">Styled Components</li>
						</ul>
					</section>
				</Fade>
				<Fade bottom distance="20px" delay={250}>
					<section className="skillset__skill-section">
						<h2 className="heading--secondary text-blue">Back-End</h2>
						<ul className="skillset__skills-list">
							<li className="skillset__skill">Node.js</li>
							<li className="skillset__skill">Express</li>
							<li className="skillset__skill">REST API</li>
							<li className="skillset__skill">MongoDB</li>
							<li className="skillset__skill">Firebase</li>
							<li className="skillset__skill">OAuth</li>
							<li className="skillset__skill">JWT Authentication</li>
							<li className="skillset__skill">Passport</li>
						</ul>
					</section>
				</Fade>
				<Fade bottom distance="20px" delay={250}>
					<section className="skillset__skill-section">
						<h2 className="heading--secondary text-blue">Testing &#47; Tools &#47; Other Skills</h2>
						<ul className="skillset__skills-list">
							<li className="skillset__skill">Jest</li>
							<li className="skillset__skill">Mocha</li>
							<li className="skillset__skill">Chai</li>
							<li className="skillset__skill">Supertest</li>
							<li className="skillset__skill">Git</li>
							<li className="skillset__skill">GitHub</li>
							<li className="skillset__skill">Postman</li>
							<li className="skillset__skill">UI Design</li>
							<li className="skillset__skill">Adobe XD</li>
						</ul>
					</section>
				</Fade>
			</main>
		</div>
		<div className="box box--left box--blue" />
	</section>
);

export default SkillSet;
