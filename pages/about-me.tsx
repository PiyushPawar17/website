import useClipboard from 'react-use-clipboard';

import Layout from '../components/Layout';

const AboutMe: React.FC = () => {
	const [isCopied, setCopied] = useClipboard('piyushpawar25@gmail.com', {
		successDuration: 2000
	});

	return (
		<Layout title="About Me | Piyush Pawar">
			<main className="container about-me">
				<section className="about-me__about">
					<section>
						<h1 className="type__heading">About Me ↓</h1>
						<p className="about-me__info">
							Hey there, I'm Piyush, a Front-end developer from India. I love building beautiful websites
							using React. I've worked with JavaScript the most and like to keep up with its advancements.
						</p>
						<p className="about-me__info">
							UI/UX design is something that I've been getting into besides Front-end development. It has
							been helping me by building a bridge to get a view of a designer and a developer. I've tried
							my hands on UI designing, which can be found on Dribbble.
						</p>
					</section>
					<section className="about-me__img">
						<img src="/img/me.jpg" alt="Piyush standing in front of waterfall" />
					</section>
				</section>
				<section id="contact">
					<h2 className="type__sub-heading">Say Hello</h2>
					<p className="about-me__p">
						Have a project in mind that you would like to work on with me? Feel free to ping me at
					</p>
					<p className="about-me__contact" onClick={setCopied}>
						<img src="/img/logos/email.svg" alt="Email" />
						piyushpawar25@gmail.com
					</p>
					<small className="type__info">
						{!isCopied ? 'Click to copy email' : 'Email copied to clipboard 🎉'}
					</small>
				</section>
			</main>
		</Layout>
	);
};

export default AboutMe;
