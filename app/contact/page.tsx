import { Header } from '../header';
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

const thanks = ['font-semibold', 'text-sky-500', 'text-xl'].join(' ');
const contact = ['text-sky-600', 'underline', 'font-bold'].join(' ');

export default function Contact() {
	return (
		<div>
			<Header />
			<div className={info}>
				<h1 className={thanks}>Thanks for visiting!</h1>
				<h1 className='space-y-4'>
					Want to connect? Feel free to reach out via{' '}
					<a
						className={contact}
						href='https://www.linkedin.com/in/hannah-j-wong/'
					>
						LinkedIn
					</a>{' '}
					or{' '}
					<a className={contact} href='mailto:hannahjacqwong@gmail.com'>
						Email
					</a>
					!
				</h1>
				<div className='flex m-auto space-x-2'>
					<LinkedIn />
					<Email />
				</div>
			</div>
		</div>
	);
}
