import Link from 'next/link';

export const Header = () => {
	const header = [
		'flex',
		'w-full',
		'p-4',
		'border-solid',
		'border-y-2',
		'justify-between',
		'sticky',
		'top-0',
		'z-50',
		'bg-white',
	].join(' ');

	const nameDiv = ['flex', 'justify-left', 'align-middle', 'pl-4'].join(' ');

	const name = [
		'text-3xl',
		'font-bold',
		'pr-4',
		'text-[var(--sky)]',
		'font-playfair',
	].join(' ');
	const description = ['text-lg', 'font-light', 'pt-2'].join(' ');

	const optionsDiv = [
		'flex',
		'justify-right',
		'align-right',
		'pr-4',
		'text-[var(--text-light)]',
	].join(' ');

	return (
		<div className={header}>
			<div className={nameDiv}>
				<Link href='/' className={name}>
					Hannah Wong
				</Link>
				<h1 className={description}>Software Engineer | UX Engineer</h1>
			</div>
			<div className={optionsDiv}>
				<Link href='/about' className='pt-2'>
					About
				</Link>
				<Link href='/portfolio' className='pt-2 pl-4'>
					Portfolio
				</Link>
				<Link
					href='/Hannah_Wong_Resume_April_2026.pdf'
					rel='noopener noreferrer'
					target='_blank'
					aria-label='Click to view Hannah Wong Resume PDF'
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
