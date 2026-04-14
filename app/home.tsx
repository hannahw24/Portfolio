import { Header } from './header';

export const Home = () => {
	const header = ['justify-center', 'flex', 'w-full', 'px-8', 'py-2'].join(' ');

	return (
		<div>
			<Header />
			<div className='hero-text'>
				<h1 className={`welcome ${header} pt-[25vh]`}>Welcome in!</h1>
				<h1 className={`hero ${header}`}>
					Building experiences <span>people actually love</span> using
				</h1>
				<h1 className={header}>
					I'm Hannah Wong. Currently a Software Engineer, aspiring to be a UX
					Engineer.
				</h1>
			</div>
		</div>
	);
};
