import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import { FrontMatterWithSlug } from '@typings/types';

interface BlogCardProps extends FrontMatterWithSlug {
	isFeatured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, title, subtitle, readingTime, isFeatured = false }) => {
	return (
		<Link href={`/blog/${slug}`}>
			<a
				title={title}
				className="outline-none focus:ring-2 ring-primary ring-offset-4 focus:ring-offset-body blog-card"
			>
				<div className="overflow-hidden">
					<Image
						src={`/static/blog-images/${slug}/banner.png`}
						alt={`${title} Banner`}
						className="blog-card__image"
						width={640}
						height={360}
						layout="responsive"
						quality={100}
						priority
					/>
				</div>
				<section
					className={clsx({
						'mt-4 md:mt-2 lg:mt-4': isFeatured,
						'mt-3 sm:mt-2 md:mt-3': !isFeatured
					})}
				>
					<small
						className={clsx('block opacity-70', {
							'text-sm md:text-xs lg:text-sm mb-3': isFeatured,
							'text-sm sm:text-xs mb-2': !isFeatured
						})}
					>
						{readingTime.text}
					</small>
					<h3
						className={clsx('font-bold overflow-hidden overflow-ellipsis whitespace-nowrap', {
							'text-xl md:text-lg lg:text-xl': isFeatured,
							'text-lg sm:text-base md:text-lg': !isFeatured
						})}
					>
						{title}
					</h3>
					<p
						className={clsx(' opacity-70', {
							'text-base md:text-sm lg:text-base': isFeatured,
							'text-sm sm:text-xs md:text-sm': !isFeatured
						})}
					>
						{subtitle}
					</p>
				</section>
			</a>
		</Link>
	);
};

export default BlogCard;
