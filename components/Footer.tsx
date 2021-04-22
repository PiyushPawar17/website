const Footer = () => {
	return (
		<footer className="py-10">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<p className="justify-self-start mb-5 md:m-0 block text-xs opacity-70 mt-4">
					Designed and Developed by Piyush Pawar
				</p>
				<section className="space-x-3">
					<a
						href="https://github.com/PiyushPawar17"
						target="_blank"
						rel="noreferrer noopener"
						className="inline-block bg-code p-2 rounded outline-none transform transition duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-code focus:ring-offset-2 focus:ring-offset-body"
					>
						<img src="/static/logos/github.svg" alt="GitHub" className="w-5" />
					</a>
					<a
						href="https://www.linkedin.com/in/piyush-pawar"
						target="_blank"
						rel="noreferrer noopener"
						className="inline-block bg-code p-2 rounded outline-none transform transition duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-code focus:ring-offset-2 focus:ring-offset-body"
					>
						<img src="/static/logos/linkedin.svg" alt="LinkedIn" className="w-5" />
					</a>
					<a
						href="https://dribbble.com/PiyushPawar17"
						target="_blank"
						rel="noreferrer noopener"
						className="inline-block bg-code p-2 rounded outline-none transform transition duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-code focus:ring-offset-2 focus:ring-offset-body"
					>
						<img src="/static/logos/dribbble.svg" alt="Dribbble" className="w-5" />
					</a>
					<a
						href="https://twitter.com/PiyushPawar_17"
						target="_blank"
						rel="noreferrer noopener"
						className="inline-block bg-code p-2 rounded outline-none transform transition duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-code focus:ring-offset-2 focus:ring-offset-body"
					>
						<img src="/static/logos/twitter.svg" alt="Twitter" className="w-5" />
					</a>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
