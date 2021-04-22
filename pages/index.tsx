import Container from '@layouts/Container';
import Hero from '@components/Hero';
import Development from '@components/Development';
import Design from '@components/Design';

const IndexPage = () => {
	return (
		<Container>
			<Hero />
			<Development />
			<Design />
		</Container>
	);
};

export default IndexPage;
