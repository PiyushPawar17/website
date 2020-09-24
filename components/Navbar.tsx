import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar: React.FC = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<nav className="navbar">
			<AnchorLink href="#home" className="navbar__logo">
				<img src="/static/img/avatar.svg" alt="Computer" /> Piyush Pawar
			</AnchorLink>
			<ul className="navbar__links">
				<li className="navbar__link">
					<a href="https://blog.piyushpawar.dev" target="_blank" rel="noopener noreferrer">
						Blog
					</a>
				</li>
				<li className="navbar__link">
					<AnchorLink offset="70" href="#projects">
						Projects
					</AnchorLink>
				</li>
				<li className="navbar__link">
					<AnchorLink offset="70" href="#about">
						About Me
					</AnchorLink>
				</li>
				<li className="navbar__link">
					<AnchorLink offset="70" href="#contact">
						Contact
					</AnchorLink>
				</li>
			</ul>

			<div className="mobile-nav">
				<input
					type="checkbox"
					className="mobile-nav__checkbox"
					id="mobile-nav"
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
				/>
				<label htmlFor="mobile-nav" className="mobile-nav__button">
					<span className="mobile-nav__icon" />
				</label>
				<div className="mobile-nav__background" />

				<nav className="mobile-nav__nav">
					<ul className="mobile-nav__links">
						<li className="mobile-nav__link">
							<a href="https://blog.piyushpawar.dev" target="_blank" rel="noopener noreferrer">
								Blog
							</a>
						</li>
						<li className="mobile-nav__link" onClick={() => setIsChecked(false)}>
							<AnchorLink offset="50" href="#projects">
								Projects
							</AnchorLink>
						</li>
						<li className="mobile-nav__link" onClick={() => setIsChecked(false)}>
							<AnchorLink offset="50" href="#about">
								About Me
							</AnchorLink>
						</li>
						<li className="mobile-nav__link" onClick={() => setIsChecked(false)}>
							<AnchorLink offset="50" href="#contact">
								Contact
							</AnchorLink>
						</li>
					</ul>
				</nav>
			</div>
		</nav>
	);
};

export default Navbar;
