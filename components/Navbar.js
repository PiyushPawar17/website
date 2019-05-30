import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => (
	<nav className="navbar">
		<AnchorLink href="#home" className="navbar__logo">
			<img src="/static/img/boy.svg" alt="Boy" />
			<span>Piyush Pawar</span>
		</AnchorLink>
		<ul className="navbar__links">
			<AnchorLink href="#home" className="navbar__link">
				Home
			</AnchorLink>
			<AnchorLink offset="70" href="#skillset" className="navbar__link">
				Skill Set
			</AnchorLink>
			<AnchorLink offset="70" href="#projects" className="navbar__link">
				Projects
			</AnchorLink>
			<AnchorLink offset="70" href="#contact" className="navbar__link">
				Contact
			</AnchorLink>
		</ul>

		<div className="mobile-nav">
			<input type="checkbox" className="mobile-nav__checkbox" id="mobile-nav" />
			<label htmlFor="mobile-nav" className="mobile-nav__button">
				<span className="mobile-nav__icon" />
			</label>
			<div className="mobile-nav__background" />

			<nav className="mobile-nav__nav">
				<ul className="mobile-nav__links">
					<AnchorLink href="#home" className="mobile-nav__link">
						Home
					</AnchorLink>
					<AnchorLink offset="50" href="#skillset" className="mobile-nav__link">
						Skill Set
					</AnchorLink>
					<AnchorLink offset="50" href="#projects" className="mobile-nav__link">
						Projects
					</AnchorLink>
					<AnchorLink offset="50" href="#contact" className="mobile-nav__link">
						Contact
					</AnchorLink>
				</ul>
			</nav>
		</div>
	</nav>
);

export default Navbar;
