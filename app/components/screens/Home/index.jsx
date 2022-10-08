import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<Link href='/about'>
				<a>Go to about page</a>
			</Link>
		</div>
	);
};

export default Home;
