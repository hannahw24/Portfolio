import Link from 'next/link';

export const Header = () => {
	const header = [
		'flex',
		'w-full',
		'p-4',
		'border-solid',
		'border-y-2',
		'justify-between',
	].join(' ');

	const nameDiv = ['flex', 'justify-left', 'align-middle', 'pl-4'].join(' ');

	const name = ['text-3xl', 'font-bold', 'pr-4', 'text-sky-500'].join(' ');
	const description = ['text-lg', 'font-light', 'pt-2'].join(' ');

	const optionsDiv = ['flex', 'justify-right', 'align-right', 'pr-4'].join(' ');

	return (
		<div className={header}>
			<div className={nameDiv}>
				<Link href='/' className={name}>
					Hannah Wong
				</Link>
				<h1 className={description}>
					Software Engineer | UX Design Researcher
				</h1>
			</div>
			<div className={optionsDiv}>
				<Link href='/about' className='pt-2'>
					About
				</Link>
				<Link href='/portfolio' className='pt-2 pl-4'>
					Portfolio
				</Link>
				<Link
					href='/Hannah_Wong_Resume.pdf'
					rel='noopener noreferrer'
					target='_blank'
					aria-label='CLick to view Hannah Wongs Resume pdf'
					className='pt-2 pl-4'
				>
					Resume
				</Link>
				<Link href='/contact' className='pt-2 pl-4'>
					Contact
				</Link>
			</div>
		</div>
	);
};
