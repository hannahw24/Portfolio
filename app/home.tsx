import { Header } from './header';

export const Home = () => {
	const header = ['justify-center', 'flex', 'w-full', 'p-8'].join(' ');

	return (
		<div>
			<Header />
			<div>
				<h1 className={header}>Welcome in!</h1>
				<h1 className={header}>
					I'm Hannah Wong, currently a Software Engineer. Aspiring to be a UX
					Engineer
				</h1>
			</div>
		</div>
	);
};
