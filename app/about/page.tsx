import Link from 'next/link';
import { Header } from '../header';

const bioContainer = [
	'flex',
	'space-x-8',
	'pt-10',
	'pl-8',
	'pr-8',
	'items-center',
].join(' ');
const bio = ['text-wrap', 'font-light'].join(' ');

const experienceContainer = [
	'flex',
	'space-x-6',
	'items-center',
	'pt-8',
	'pl-8',
].join(' ');

const more = ['flex', 'justify-center', 'pt-8', 'font-light'].join(' ');

export default function About() {
	return (
		<div>
			<Header />
			<div className={bioContainer}>
				<img
					src='https://live.staticflickr.com/65535/54282431499_859e72942a_b.jpg'
					width='400'
					height='400'
					alt='Picture of Hannah Wong'
				/>
				<h1 className={bio}>
					Hello, I'm Hannah Wong — a Software Engineer based in Southern
					California. I'm currently pursuing a Master's in Human-Computer
					Interaction, with an emphasis on UX Design and Research, at the
					University of Maryland. I'm passionate about building inclusive,
					accessible products that sit at the intersection of design and
					engineering — especially as AI reshapes what's possible.
					<br />
					<br />
					<p className='font-semibold'>Why?</p>
					<br />
					I've always had a natural curiosity for how different people
					experience technology — not just whether something works, but whether
					it works <em>for everyone</em>. That curiosity grew into a deep
					interest in UX design and a commitment to accessibility.
					<br />
					<br />
					We're at an inflection point. AI is fundamentally changing how
					products are designed, built, and experienced. I want to be at that
					intersection — using my engineering background and HCI training to
					help teams build interfaces that harness AI's power without leaving
					people behind.
				</h1>
			</div>
			<div className={experienceContainer}>
				<h2 className='text-[var(--sky)] font-semibold'>Recent Experiences</h2>
				<div className='font-light'>
					<li>
						Software Engineer II - Frontend at Disney (May 2024 - Present)
					</li>
					<li>
						Full Stack Software Engineer at General Motors (February 2022 -
						April 2024)
					</li>
					<li>
						Software Developer Intern at Intrepid Automation (June 2020 - August
						2021)
					</li>
				</div>
			</div>
			<div className={more}>
				<h3>
					Want to know more? Check out my{' '}
					<Link
						href='/Hannah_Wong_Resume_April_2026.pdf'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='CLick to view Hannah Wongs Resume pdf'
						className='underline text-sky-600'
					>
						resume.
					</Link>
				</h3>
			</div>
		</div>
	);
}
