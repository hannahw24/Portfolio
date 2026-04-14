import Link from 'next/link';
import { Header } from '../header';
import { Footer } from '../footer';

const bioContainer = [
	'flex',
	'space-x-8',
	'pt-4',
	'pl-8',
	'pr-8',
	'items-center',
].join(' ');
const bio = ['text-wrap', 'font-light'].join(' ');

const experienceContainer = [
	'flex',
	'justify-center',
	'space-x-12',
	'items-center',
	'pt-8',
].join(' ');

const more = ['flex', 'justify-center', 'pt-8', 'pb-8', 'font-light'].join(' ');

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
				<div className='flex flex-col'>
					<h1 className='text-[var(--navy)] font-semibold text-2xl pb-10'>
						Engineer who thinks like a designer
					</h1>
					<p className={bio}>
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
						experience technology — not just whether something works, but{' '}
						<em> how everyone</em> experiences it. That curiosity grew into a
						deep interest in UX design and a commitment to accessibility.
						<br />
						<br />
						We're at an inflection point. AI is fundamentally changing how
						products are designed, built, and experienced. I want to be at that
						intersection — using my engineering background and HCI training to
						help teams build interfaces that harness AI's power without leaving
						people behind.
						<br />
						<br />
						At Disney, that means owning authentication experiences — the first
						thing tens of millions of users touch — and obsessing over every
						error state, every redirect, every moment of friction.
						<br />
						<br />
						I'm finishing my masters in May 2026 and looking for roles where
						engineering depth and human-centered thinking are both valued.
					</p>
				</div>
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
				<p>
					Want to know more? Check out my{' '}
					<Link
						href='/Hannah_Wong_Resume_April_2026.pdf'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='Click to view Hannah Wong Resume PDF'
						className='underline text-sky-600'
					>
						resume.
					</Link>
				</p>
			</div>
			<Footer />
		</div>
	);
}
