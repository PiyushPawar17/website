import Tooltip from './Tooltip';

const Hero: React.FC = () => {
	return (
		<section className="hero">
			<section className="hero__wrapper">
				<div className="hero__tech hero__tech--front-end">
					<div className="hero__logos">
						<Tooltip content="React" />
						<Tooltip content="Redux" />
						<Tooltip content="TypeScript" />
						<Tooltip content="Gatsby" />
						<Tooltip content="Next.js" />
					</div>
					<p>Front-end</p>
				</div>
			</section>
			<section className="hero__wrapper">
				<div className="hero__tech hero__tech--ui-design">
					<div className="hero__logos">
						<Tooltip content="Figma" />
						<Tooltip content="Adobe XD" />
					</div>
					<p>UI Design</p>
				</div>
				<img src="/img/avatar.svg" alt="Hero Image" className="hero__avatar" />
				<div className="hero__tech hero__tech--animation">
					<p>Animation</p>
					<div className="hero__logos">
						<Tooltip content="Adobe After Effects" />
					</div>
				</div>
			</section>
			<section className="hero__wrapper">
				<div className="hero__tech hero__tech--back-end">
					<p>Back-end</p>
					<div className="hero__logos">
						<Tooltip content="Firebase" placement="bottom" />
						<Tooltip content="MongoDB" placement="bottom" />
						<Tooltip content="Node.js" placement="bottom" />
					</div>
				</div>
				<div className="hero__tech hero__tech--testing">
					<p>Testing</p>
					<div className="hero__logos">
						<Tooltip content="Jest" placement="bottom" />
					</div>
				</div>
			</section>
		</section>
	);
};

export default Hero;
