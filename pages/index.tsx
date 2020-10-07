import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Hero from '../components/Hero';

const Index: React.FC = () => {
	return (
		<Layout title="Piyush Pawar | Front-end Developer">
			<main className="container home">
				<Intro />
				<Hero />
			</main>
		</Layout>
	);
};

export default Index;
