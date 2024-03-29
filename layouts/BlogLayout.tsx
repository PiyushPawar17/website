import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@layouts/Container';

import { FrontMatter } from '@typings/types';

interface BlogLayoutProps {
	frontMatter: FrontMatter;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, frontMatter }) => {
	const publishedAt = new Date(frontMatter.publishedAt).toISOString();
	const bannerImagePath = `/static/blog-images/${frontMatter.slug}/banner.png`;

	return (
		<Container
			title={`${frontMatter.title} - Blog | Piyush Pawar`}
			description={frontMatter.subtitle}
			image={`https://piyushpawar.dev${bannerImagePath}`}
			date={publishedAt}
			type="article"
		>
			<article>
				<header className="my-4 md:my-6 lg:my-10">
					<time
						dateTime={publishedAt}
						className="block text-xs md:text-xs text-center uppercase text-gray-100 opacity-70"
					>
						Published at {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
					</time>
					<h1 className="font-bold text-gray-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-4 lg:mt-6 mb-4">
						{frontMatter.title}
					</h1>
					<p className="text-center text-gray-100 text-sm opacity-70">{frontMatter.readingTime.text}</p>
				</header>
				<div className="mb-10">
					<Image
						src={bannerImagePath}
						alt={`${frontMatter.title} Banner`}
						width={1280}
						height={720}
						layout="responsive"
						quality={100}
						priority
					/>
				</div>
				<section className="prose lg:prose-lg mx-auto">{children}</section>
			</article>
		</Container>
	);
};

export default BlogLayout;
