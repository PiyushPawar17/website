import Image from 'next/image';
import Link from 'next/link';

const CustomLink: React.FC<
	React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = props => {
	const href = props.href!;
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} />
			</Link>
		);
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const ListItem: React.FC<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = props => {
	return <li className="leading-5 last:mb-8" {...props} />;
};

const MDXCompnents = {
	Image,
	a: CustomLink,
	li: ListItem
};

export default MDXCompnents;
