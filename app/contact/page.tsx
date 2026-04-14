import { Header } from '../header';
import { Footer } from '../footer';
import { Email } from '../icons/email';
import { LinkedIn } from '../icons/linkedin';

const info = [
	'flex',
	'justify-center',
	'items-center',
	'flex-col',
	'pt-10',
	'text-center',
	'space-y-2',
].join(' ');

const thanks = ['font-semibold', 'text-[var(--sky)]', 'text-xl'].join(' ');

export default function Contact() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<div className={`${info} flex-1`}>
				<h1 className={thanks}>Let's work together</h1>
				<p className='text-[var(--text-light)] font-light max-w-md'>
					I'm currently finishing my M.S. in HCI and open to senior engineering
					roles that value both technical depth and human-centered thinking.
				</p>
				<div className='flex gap-6 text-sm text-[var(--text-light)] font-light pt-2'>
					<span>📍 Southern California · Open to hybrid</span>
					{/* <span>✅ Available May 2026</span> */}
				</div>
				<div className='flex m-auto space-x-4 pt-4'>
					<LinkedIn />
					<Email />
					<a
						href='https://github.com/hannahw24'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Visit Hannah Wong on GitHub'
						className='text-[var(--text-light)] hover:text-[var(--navy)] transition'
					>
						<svg xmlns='http://www.w3.org/2000/svg' width={50} height={50} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
							<path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z' />
						</svg>
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}
