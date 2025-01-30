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
					Hello, I'm Hannah Wong! I'm a Software Engineer based out of Southern
					California. Currently, I'm pursuing my Master's in Human Computer
					Interaction, with an empahsis on UX Design and Research, at University
					of Maryland. I have a passion for bridging the gap between design and
					engineering to create inclusive and accessible websites and
					applications.
					<br />
					<br />
					<h1 className='font-semibold'>Why?</h1>
					<br />
					I've always had a natural curiosity to understand how different people
					interact with technology. I've also always been interested in learning
					more about UX design. Through my various experiences, I learned the
					importance of inclusive design. And recently, I learned the importance
					of designing and developing with accessibility in mind as well.
					<br />
					<br />
					While the gap between design and engineering is closing, there is
					still a massive disconnect between the two. I want to help bridge that
					gap by enhancing my design skills and learning about the research
					process to explain why we should or shouldn't create interfaces /
					flows a particular way.
				</h1>
			</div>
			<div className={experienceContainer}>
				<h2 className='text-sky-500 font-semibold'>Recent Experiences</h2>
				<div className='font-light'>
					<li>Software Engineer II - Frontend at Disney (May 2024 - Now)</li>
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
					Want to know more? Check out my <a>resume</a>
				</h3>
			</div>
		</div>
	);
}
