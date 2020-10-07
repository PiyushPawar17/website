import Link from 'next/link';
import { SingletonRouter, withRouter } from 'next/router';

interface NavbarProps {
	router: SingletonRouter;
}

const Navbar: React.FC<NavbarProps> = ({ router: { pathname, asPath } }) => {
	const isDevPath = pathname === '/development' || asPath === '/development';
	const isDesignPath = pathname === '/design' || asPath === '/design';
	const isAboutPath = pathname === '/about-me' || asPath === '/about-me';

	return (
		<nav className="navbar">
			<div className="container navbar__content">
				<div className="navbar__logo">
					<Link href="/">
						<a>
							<img src="/img/logo.svg" alt="Logo" />
						</a>
					</Link>
				</div>
				<ul className="navbar__links">
					<li>
						<a
							href="https://blog.piyushpawar.dev"
							target="_blank"
							rel="noreferrer noopener"
							className="link link--internal"
						>
							Blog
						</a>
					</li>
					<li>
						<Link href="/development">
							<a className={`link link--internal ${isDevPath ? 'link--active' : ''}`}>Development</a>
						</Link>
					</li>
					<li>
						<Link href="/design">
							<a className={`link link--internal ${isDesignPath ? 'link--active' : ''}`}>Design</a>
						</Link>
					</li>
					<li>
						<Link href="/about-me">
							<a className={`link link--internal ${isAboutPath ? 'link--active' : ''}`}>About Me</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
