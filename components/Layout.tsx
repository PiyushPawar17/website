import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
	title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
