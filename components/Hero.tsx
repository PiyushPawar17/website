import Link from 'next/link';

import Tooltip from '@components/Tooltip';

const Hero = () => {
	return (
		<section className="flex flex-col-reverse lg:flex-row justify-between space-x-8 mt-12 mb-44">
			{/* Info */}
			<section>
				<header className="mb-8">
					<h3 className="text-xs sm:text-base uppercase opacity-60">Hey there, I&apos;m</h3>
					<h1 className="text-4xl sm:text-6xl font-bold text-primary mt-2 mb-6">Piyush</h1>
					<h2 className="text-lg sm:text-2xl font-bold text-gray-200">Front-End Developer</h2>
				</header>
				<p className="text-base sm:text-xl mb-10 sm:mb-20 text-gray-200">
					I code &#40;and occasionally design&#41; delightful User Interfaces bringing ideas to life in the
					browser
				</p>
				<Link href="/about-me#contact">
					<a className="inline-block text-sm sm:text-lg px-11 py-3 bg-primary font-sans rounded text-gray-100 cursor-pointer outline-none transform transition duration-200 hover:scale-105 focus:scale-105 focus:ring focus:ring-primary focus:ring-offset-2 focus:ring-offset-body">
						Get In Touch
					</a>
				</Link>
			</section>

			{/* Hero Image */}
			<section className="inline-block text-xs xs:text-sm font-bold mb-12 lg:m-0 flex-shrink-0">
				<section className="flex justify-center lg:justify-evenly">
					<div className="flex flex-col text-center items-center">
						<div className="flex items-center space-x-5 lg:space-x-3 xl:space-x-5">
							<Tooltip content="React" />
							<Tooltip content="Redux" />
							<Tooltip content="TypeScript" />
							<Tooltip content="Gatsby" />
							<Tooltip content="Next.js" />
						</div>
						<p className="mt-3">Front-end</p>
					</div>
				</section>
				<section className="flex justify-center lg:justify-evenly">
					<div className="flex flex-col sm:flex-row text-center items-center justify-center">
						<div className="flex items-center space-x-5 lg:space-x-3 xl:space-x-5">
							<Tooltip content="Figma" />
							<Tooltip content="Adobe XD" />
						</div>
						<p className="ml-1 lg:ml-3 xl:ml-5 mt-5 sm:mt-0">UI Design</p>
					</div>
					<img
						src="/static/img/avatar.svg"
						alt="Hero Image"
						className="w-32 xs:w-36 sm:w-52 lg:w-40 xl:w-52 m-3 md:m-5"
					/>
					<div className="flex flex-col-reverse sm:flex-row text-center items-center justify-center">
						<p className="mr-1 lg:mr-3 xl:mr-5 mt-5 sm:mt-0">Animation</p>
						<div className="space-x-5 lg:space-x-3 xl:space-x-5">
							<Tooltip content="Adobe After Effects" />
						</div>
					</div>
				</section>
				<section className="flex justify-center lg:justify-evenly">
					<div className="flex flex-col text-center items-center mr-36">
						<p className="mb-3">Back-end</p>
						<div className="flex items-center space-x-5 lg:space-x-3 xl:space-x-5">
							<Tooltip content="Firebase" placement="bottom" />
							<Tooltip content="MongoDB" placement="bottom" />
							<Tooltip content="Node.js" placement="bottom" />
						</div>
					</div>
					<div className="flex flex-col text-center items-center">
						<p className="mb-3">Testing</p>
						<div className="flex items-center space-x-5 lg:space-x-3 xl:space-x-5">
							<Tooltip content="Jest" placement="bottom" />
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};

export default Hero;
