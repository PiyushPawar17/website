import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

interface ContainerProps {
	title?: string;
	description?: string;
	type?: string;
	image?: string;
	date?: string;
}

const Container: React.FC<ContainerProps> = ({ children, title, description, type, image, date }) => {
	const router = useRouter();

	const meta = {
		title: title ?? 'Piyush Pawar | Front-end Developer',
		description: description ?? `I code delightful User Experiences bringing ideas to life in the browser`,
		image: image ?? 'https://piyushpawar.dev/static/img/avatar.png',
		type: type ?? 'website',
		date
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="title" content={meta.title} />
				<meta name="description" content={meta.description} />

				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:url" content={`https://piyushpawar.dev${router.asPath}`} />
				<meta property="og:image" content={meta.image} />
				<meta property="og:site_name" content="Developing Mind" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:site" content="@PiyushPawar_17" />
				<meta property="twitter:creator" content="@PiyushPawar_17" />
				<meta property="twitter:url" content={`https://piyushpawar.dev${router.asPath}`} />
				<meta property="twitter:title" content={meta.title} />
				<meta property="twitter:description" content={meta.description} />
				<meta property="twitter:image" content={meta.image} />

				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
			<div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 xs:p-0 mx-auto">
				<Navbar />
				<main className="pb-14">{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Container;
