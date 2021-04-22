import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const Navbar = () => {
	const router = useRouter();
	const isAboutPath = router.pathname === '/about-me' || router.asPath === '/about-me';
	const isBlogPath = router.pathname === '/blog' || router.asPath === '/blog';

	return (
		<nav className="py-10">
			<div className="flex items-center">
				<div>
					<Link href="/">
						<a className="outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-body inline-block">
							<img src="/static/logo.svg" alt="Logo" />
						</a>
					</Link>
				</div>
				<ul className="flex ml-auto space-x-10">
					<li>
						<Link href="/blog">
							<a
								className={clsx(
									'inline-block text-base text-gray-100 outline-none rounded-sm focus:ring focus:ring-primary focus:ring-offset-2 focus:ring-offset-body link link--internal',
									{
										'link--active': isBlogPath
									}
								)}
							>
								Blog
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a
								className={clsx(
									'inline-block text-base text-gray-100 outline-none rounded-sm focus:ring focus:ring-primary focus:ring-offset-2 focus:ring-offset-body link link--internal',
									{
										'link--active': isAboutPath
									}
								)}
							>
								About Me
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
