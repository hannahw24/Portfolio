import { Header } from '../header';
import { Footer } from '../footer';
import { ProjectCarousel } from '../components/ProjectCarousel';

export default function Portfolio() {
	return (
		<div>
			<Header />

			<section className='work'>
				<div className='work-header'>
					<h1 className='section-label'>Portfolio</h1>
					<h2 className='section-title'>Featured Work</h2>
				</div>

				<div className='case-studies'>
					{/* DISNEY */}
					<div className='case-study-full'>
						<div className='csf-header'>
							<div>
								<span className='cs-tag'>
									Frontend · Authentication · Experimentation
								</span>
								<p className='csf-case-num'>Case Study 01</p>
								<h3>Reimagining Authentication for 3 Streaming Platforms</h3>
								<p className='cs-role'>
									The Walt Disney Company · Frontend Software Engineer II · 2024
									– Present
								</p>
								<p className='csf-stack'>
									<span className='csf-stack-label'>Platforms:</span> Disney+ ·
									Hulu · ESPN+
									<br />
									<span className='csf-stack-label'>Stack:</span> Next.js ·
									React.js · TypeScript · GraphQL
								</p>
							</div>
							<div className='csf-metrics'>
								<div className='csf-metric'>
									<span className='csf-metric-num'>−15%+</span>
									<span className='csf-metric-label'>
										Login error reduction
									</span>
								</div>
								<div className='csf-metric'>
									<span className='csf-metric-num'>75%+</span>
									<span className='csf-metric-label'>IAP conversion rate</span>
								</div>
								<div className='csf-metric'>
									<span className='csf-metric-num'>+30%</span>
									<span className='csf-metric-label'>
										Team delivery efficiency
									</span>
								</div>
							</div>
						</div>

						<div className='csf-body'>
							<div className='csf-col'>
								<div className='cs-section'>
									<p className='cs-section-label'>Overview</p>
									<p>
										Authentication is the first experience a user has with a
										product — and it was failing in measurable, frustrating
										ways. At Disney, I own login and signup flows that began
										with Disney+, Hulu, and ESPN+ and have since expanded to
										non-streaming platforms including Disney parks, ABC News
										properties, and multiple other business units. Collectively
										these experiences serve tens of millions of users daily. My
										work focuses on reducing friction, eliminating errors, and
										ensuring users can access what they came for as quickly and
										reliably as possible.
									</p>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>The Problem Space</p>
									<ul className='cs-bullets'>
										<p>
											Two distinct but related user problems were causing
											measurable drop-off and frustration:
										</p>
										<li>
											Users were entering{' '}
											<strong>incorrect email addresses during signup</strong>{' '}
											at high rates, causing failed login attempts and account
											access issues down the line
										</li>
										<li>
											Users submitting a missing date-of-birth were sitting on
											the page for <strong>15+ minutes</strong> — long enough
											for their session token to expire, leaving them in a
											broken, unauthenticated state
										</li>
										<p>
											One problem that was causing TWDC to lose thousands of
											dollars:
										</p>
										<li>
											Mobile users on Disney+ were purchasing subscriptions
											through <strong>Google Play</strong>, which meant Google
											took a cut of every subscription — the business needed a
											way to redirect users to the web purchase funnel
										</li>
									</ul>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>My Role</p>
									<p>
										As the frontend engineer on these flows, I owned the
										end-to-end implementation of experiments and features — from
										analyzing error data to identify patterns, designing the
										interaction approach, partnering with backend on API
										contracts, and shipping to production with 100% test
										coverage.
									</p>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>Impact</p>
									<ul className='cs-bullets'>
										<li>
											Reduced incorrect email errors at signup by{' '}
											<strong>15%+</strong>
										</li>
										<li>
											Eliminated broken unauthenticated state for DOB submission
											flow
										</li>
										<li>
											Achieved <strong>75%+</strong> conversion rate on Google
											IAP exit via Magic Link
										</li>
										<li>
											Maintained <strong>100%</strong> unit and E2E test
											coverage across all auth-critical systems
										</li>
										<li>
											Improved team delivery efficiency by <strong>30%</strong>{' '}
											through process optimizations
										</li>
									</ul>
								</div>
							</div>

							<div className='csf-col'>
								<div className='cs-section'>
									<p className='cs-section-label'>Process & Key Decisions</p>
									<p className='csf-subsection-title'>
										Email Validation Experiment
									</p>
									<p>
										After identifying that a significant volume of login
										failures stemmed from email typos at signup, I led a
										production A/B experiment introducing an email confirmation
										modal versus email confirmation via OTP. The key design
										decision was making the validation feel helpful rather than
										punishing — surfacing the modal immediately after email
										submission, giving users a chance to self-validate and
										confirm or cancel and retype their email without feeling
										blocked from completing the flow. The result was a{' '}
										<strong>15%+ reduction in incorrect email errors</strong>.
									</p>
									<p className='csf-subsection-title'>
										Session-Token-Aware Reauthentication
									</p>
									<p>
										Occasionally, users may login with an account that does not
										contain a DOB. The DOB submission bug required both an
										engineering fix and a UX decision. The root cause was a
										mismatch between how long users took to complete the flow
										and the session token expiration window. Rather than simply
										extending the token (a security tradeoff), I implemented a
										reauthentication gate: when a user attempts to submit their
										DOB after token expiration, they are prompted to re-enter
										their password before proceeding. This preserves security
										while giving users a clear, recoverable path — eliminating
										the silent broken state entirely.
									</p>
									<p className='csf-subsection-title'>
										Magic Link & Google IAP Exit
									</p>
									<p>
										Disney+ and Hulu mobile users were purchasing subscriptions
										through Google Play, which cut into margins. As the project
										lead, I helped build a Magic Link authentication system.
										When a user tapped to subscribe in the mobile app, they were
										sent an email with a CTA that had a secure, time-limited
										link tied to the user's auth state — redirecting them to the
										correct web page already authenticated. The result was a{' '}
										<strong>75%+ conversion</strong> on the redirected flow and
										meaningful margin improvement.
									</p>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>Reflection</p>
									<p>
										This work taught me that authentication is fundamentally a
										user experience problem disguised as an engineering one.
										Every error state, every token lifecycle decision, every
										redirect has a human on the other side. My HCI training made
										me a better partner to the design and product teams because
										I could speak both languages — which I think is why I was
										trusted to lead these flows independently.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='cs-divider' />

					{/* GM */}
					<div className='case-study-full'>
						<div className='csf-header gm'>
							<div>
								<span className='cs-tag'>
									Full-Stack · UX Collaboration · Accessibility
								</span>
								<p className='csf-case-num'>Case Study 02</p>
								<h3>Building a New Inventory Platform from the Ground Up</h3>
								<p className='cs-role'>
									General Motors · Full-Stack Software Developer · 2022 – 2024
								</p>
								<p className='csf-stack'>
									<span className='csf-stack-label'>Platform:</span> General
									Motors - UIV Platform
									<br />
									<span className='csf-stack-label'>Stack:</span> TypeScript ·
									React.js · Java · Quarkus · PostgreSQL · ElasticSearch
								</p>
							</div>
							<div className='csf-metrics'>
								<div className='csf-metric'>
									<span className='csf-metric-num'>10×</span>
									<span className='csf-metric-label'>Performance boost</span>
								</div>
								<div className='csf-metric'>
									<span className='csf-metric-num'>8+</span>
									<span className='csf-metric-label'>Features shipped</span>
								</div>
								<div className='csf-metric'>
									<span className='csf-metric-num'>3</span>
									<span className='csf-metric-label'>User groups served</span>
								</div>
							</div>
						</div>

						<div className='csf-body'>
							<div className='csf-col'>
								<div className='cs-section'>
									<p className='cs-section-label'>Overview</p>
									<p>
										When I was about 1.5 years into my first post-grad career
										job, I started my M.S. in Human-Computer Interaction journey
										— after deferring my initial start for a year. This role
										became my first opportunity to apply what I was learning in
										the program to real engineering work. The UIV (Unified
										Inventory Visibility) platform was a relatively new internal
										inventory management tool serving dealers, fulfillment
										centers, and European partners, and user requests were
										flowing in continuously as the platform matured.
									</p>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>The Problem Space</p>
									<ul className='cs-bullets'>
										<p>
											Three distinct user groups each had their own needs and
											workflows:
										</p>
										<li>
											<strong>Dealers</strong> needed to visualize current
											vehicle volume vs. projected volume by model at
											fulfillment centers
										</li>
										<li>
											<strong>Field users</strong> needed richer order detail —
											VIN numbers, tire specs, order status, and
											production/delivery tracking
										</li>
										<li>
											<strong>All groups</strong> primarily worked on iPads in
											the field, meaning every component had to work on touch
											interfaces and smaller screens
										</li>
									</ul>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>My Role</p>
									<p>
										I was a full-stack developer, working closely with the
										Product Owner and UX Designers throughout the design and
										build process. This was the role where I first started using
										my HCI coursework deliberately — attending design reviews
										not just as an implementer but as a contributor to the
										design conversation.
									</p>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>Impact</p>
									<ul className='cs-bullets'>
										<li>
											Refactored platform to microservices architecture,
											achieving a <strong>10x performance boost</strong>
										</li>
										<li>
											Shipped <strong>8+ features</strong> serving dealers,
											fulfillment centers, and European partners
										</li>
										<li>
											Built volume dashboards, VIN-detail pages, tag/filter
											systems, and a home overview page
										</li>
										<li>
											Improved <strong>WCAG accessibility</strong> with
											breadcrumbs and hamburger navigation
										</li>
										<li>
											Documented every feature to support long-term
											maintainability
										</li>
									</ul>
								</div>
							</div>

							<div className='csf-col'>
								<div className='cs-section'>
									<p className='cs-section-label'>Process & Key Decisions</p>
									<p className='csf-subsection-title'>
										Translating Ambiguous User Requests
									</p>
									<p>
										Unlike a typical feature request process, user feedback was
										coming in somewhat informally, often from the business
										through skip-level managers to our Product Owner. My HCI
										training helped me recognize when a request was
										underspecified and push for clarity before design got too
										deep into creation.
									</p>
									<p className='csf-subsection-title'>
										Navigating Design–Engineering Constraints
									</p>
									<ul className='cs-bullets'>
										<p>Two specific moments stand out:</p>
										<li>
											A UX designer proposed an icon that didn't exist in our
											MUI library.{' '}
											<strong>Rather than just flagging the problem</strong>, I
											identified an equivalent icon and showed how the
											surrounding layout needed to shift, bringing a solution
											rather than just a blocker.
										</li>
										<li>
											While building the breadcrumb navigation, we ran into a
											space constraint on iPad views. I went{' '}
											<strong>back and forth</strong> with design across several
											iterations to find a solution that was visually clean,
											accessible, and within our engineering constraints.
										</li>
									</ul>
									<p className='csf-subsection-title'>iPad-First Development</p>
									<p>
										Knowing that users were primarily on iPads shaped every
										component decision. Touch target sizes, component density,
										scrollable vs. paginated views — these all required
										deliberate choices. Adding pagination to data heavy lists
										was not just a performance optimization but a usability
										decision that made the experience <strong>2x faster</strong>{' '}
										and meaningfully easier to navigate in the field.
									</p>
								</div>
								<div className='cs-section'>
									<p className='cs-section-label'>Reflection</p>
									<p>
										General Motors is where I first realized that being a good
										engineer and being a good HCI practitioner are not separate
										pursuits — they reinforce each other. Understanding why a
										user needed a feature made me write better code for it.
										Knowing how to talk to designers made the collaboration
										faster and more productive. By the time I moved to Disney, I
										had a vocabulary and a set of instincts I didn't have before
										and it showed in how I was able to take ownership of
										user-critical systems from day one.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SIDE PROJECTS */}
			<section className='side-projects'>
				<div className='side-projects-header'>
					<p className='section-label'>Side Projects</p>
					<h2 className='section-title'>Beyond the Day Job</h2>
				</div>
				<div className='project-cards'>
					<div className='project-card'>
						<span className='cs-tag'>Frontend · Design</span>
						<h3>Personal Portfolio Website</h3>
						<p>
							Designed and built this portfolio from scratch using Next.js and
							Tailwind CSS. Focused on clean typography, accessible color
							contrast, and a layout that lets the work speak for itself. After
							taking a long hiatus from working on it, I leveraged Claude to
							accelerate execution — using it as a collaborative coding partner
							to move faster without sacrificing quality.
						</p>
						<p className='project-card-stack'>
							Next.js · React · TypeScript · Tailwind CSS
						</p>
						<ProjectCarousel
							slides={[
								{ src: '/Portfolio/portfolio-1.png', caption: 'Before' },
								{ src: '/Portfolio/portfolio-11.png', caption: 'Before' },
								{ src: '/Portfolio/portfolio-12.png', caption: 'Before' },
								{ src: '/Portfolio/portfolio-13.png', caption: 'Before' },
								{ src: '/Portfolio/portfolio-2.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-3.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-4.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-5.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-6.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-7.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-8.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-9.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-10.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-14.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-15.png', caption: 'After' },
								{ src: '/Portfolio/portfolio-16.png', caption: 'After' },
								{
									src: '/Portfolio/portfolio-17.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-18.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-19.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-20.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-21.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-22.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-23.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-24.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-25.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-26.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-27.png',
									caption: 'Built with Claude',
								},
								{
									src: '/Portfolio/portfolio-28.png',
									caption: 'Built with Claude',
								},
							]}
						/>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
