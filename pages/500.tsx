import Container from '@layouts/Container';

const Custom500 = () => {
	return (
		<Container
			title="500 Internal Server Error | Developing Mind"
			description="500 - Internal Server Error. Server is down"
		>
			<section>
				<img
					src="/static/500.svg"
					alt="500 Internal Server Error"
					className="w-60 md:w-80 mb-8 md:mb-12 mx-auto"
				/>
				<h1 className="text-3xl md:text-5xl text-center font-bold">Something went wrong!</h1>
				<p className="text-lg text-center my-8">
					While the issue is fixed, have a look at my
					<a
						href="https://github.com/PiyushPawar17"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-1 text-primary outline-none rounded-sm hover:underline focus:underline focus:ring ring-primary ring-offset-4 focus:ring-offset-body"
					>
						GitHub
					</a>
					or
					<a
						href="https://dribbble.com/PiyushPawar17"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-1 text-primary outline-none rounded-sm hover:underline focus:underline focus:ring ring-primary ring-offset-4 focus:ring-offset-body"
					>
						Dribbble
					</a>
					Profile
				</p>
			</section>
		</Container>
	);
};

export default Custom500;
