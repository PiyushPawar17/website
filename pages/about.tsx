import Image from 'next/image';
import useClipboard from 'react-use-clipboard';

import Container from '@layouts/Container';

const AboutPage = () => {
	const [isCopied, setCopied] = useClipboard('piyushpawar25@gmail.com', {
		successDuration: 2000
	});

	return (
		<Container title="About | Piyush Pawar" description="Get to know more about me with a way to contact me">
			<main className="about-me">
				<section className="flex flex-col-reverse lg:flex-row mb-12 space-x-0 lg:space-x-14">
					<section>
						<h1 className="text-xl sm:text-lg lg:text-2xl font-bold uppercase my-12">About Me ↓</h1>
						<p className="text-base mr-0 md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8 mb-7 md:mb-8">
							Hey there, I&apos;m Piyush, a Front-end developer from India. I love building beautiful
							websites using React. I&apos;ve worked with JavaScript the most and like to keep up with its
							advancements.
						</p>
						<p className="text-base mr-0 md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8">
							UI/UX design is something that I&apos;ve been getting into besides Front-end development. It
							has been helping me by building a bridge to get a view of a designer and a developer.
							I&apos;ve tried my hands on UI designing, which can be found on Dribbble.
						</p>
					</section>
					<section className="flex-shrink-0 w-full lg:w-120 mt-12">
						<Image
							src="/static/img/me.jpg"
							alt="Piyush standing in front of waterfall"
							width={536}
							height={606}
							layout="responsive"
							quality={85}
							className="rounded block w-full shadow-sm"
							priority
						/>
					</section>
				</section>
				<section id="contact">
					<h2 className="text-base font-bold uppercase mb-7">Say Hello</h2>
					<p className="text-sm sm:text-base mb-5">
						Have a project in mind that you would like to work on with me? Feel free to ping me at
					</p>
					<p
						className="text-lg xs:text-xl sm:text-2xl cursor-pointer flex items-center w-max rounded outline-none focus:ring focus:ring-primary focus:ring-offset-4 focus:ring-offset-body"
						tabIndex={0}
						onClick={setCopied}
						onKeyDown={e => {
							if (e.key === 'Enter') {
								setCopied();
							}
						}}
					>
						<img
							src="/static/logos/email.svg"
							alt="Email"
							className="mr-2 xs:mr-4 sm:mr-5 w-8 xs:w-10 sm:w-14"
						/>
						piyushpawar25@gmail.com
					</p>
					<small className="block text-xs opacity-70 mt-4">
						{!isCopied ? 'Click to copy email' : 'Email copied to clipboard 🎉'}
					</small>
				</section>
			</main>
		</Container>
	);
};

export default AboutPage;
