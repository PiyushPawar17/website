import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => (
	<nav className="navbar">
		<AnchorLink href="#home" className="navbar__logo">
			<img src="/static/img/boy.svg" alt="Boy" />
			<span>Piyush Pawar</span>
		</AnchorLink>
		<ul className="navbar__links">
			<li className="navbar__link">
				<AnchorLink href="#home">Home</AnchorLink>
			</li>
			<li className="navbar__link">
				<AnchorLink offset="70" href="#skillset">
					Skill Set
				</AnchorLink>
			</li>
			<li className="navbar__link">
				<AnchorLink offset="70" href="#projects">
					Projects
				</AnchorLink>
			</li>
			<li className="navbar__link">
				<AnchorLink offset="70" href="#contact">
					Contact
				</AnchorLink>
			</li>
		</ul>

		<div className="mobile-nav">
			<input type="checkbox" className="mobile-nav__checkbox" id="mobile-nav" />
			<label htmlFor="mobile-nav" className="mobile-nav__button">
				<span className="mobile-nav__icon" />
			</label>
			<div className="mobile-nav__background" />

			<nav className="mobile-nav__nav">
				<ul className="mobile-nav__links">
					<li className="mobile-nav__link">
						<AnchorLink href="#home">Home</AnchorLink>
					</li>
					<li className="mobile-nav__link">
						<AnchorLink offset="50" href="#skillset">
							Skill Set
						</AnchorLink>
					</li>
					<li className="mobile-nav__link">
						<AnchorLink offset="50" href="#projects">
							Projects
						</AnchorLink>
					</li>
					<li className="mobile-nav__link">
						<AnchorLink offset="50" href="#contact">
							Contact
						</AnchorLink>
					</li>
				</ul>
			</nav>
		</div>
	</nav>
);

export default Navbar;
