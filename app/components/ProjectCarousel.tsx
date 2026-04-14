'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';

type Slide = {
	src: string;
	caption: string;
};

export const ProjectCarousel = ({ slides }: { slides: Slide[] }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	const closeLightbox = () => setLightboxIndex(null);
	const lightboxPrev = () =>
		setLightboxIndex((i) => (i === null ? 0 : (i - 1 + slides.length) % slides.length));
	const lightboxNext = () =>
		setLightboxIndex((i) => (i === null ? 0 : (i + 1) % slides.length));

	// Close on Escape key
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeLightbox();
			if (e.key === 'ArrowLeft') lightboxPrev();
			if (e.key === 'ArrowRight') lightboxNext();
		};
		if (lightboxIndex !== null) window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [lightboxIndex]);

	return (
		<>
			{/* CAROUSEL */}
			<div className='relative mt-4'>
				<div className='overflow-hidden rounded' ref={emblaRef}>
					<div className='flex'>
						{slides.map((slide, i) => (
							<div
								key={i}
								className='relative flex-[0_0_100%] cursor-pointer'
								role='button'
								tabIndex={0}
								aria-label={`View full size: ${slide.caption}`}
								onClick={() => setLightboxIndex(i)}
								onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(i); }}
							>
								<img
									src={slide.src}
									alt={slide.caption}
									className='w-full h-48 object-cover rounded'
								/>
								<p className='text-xs text-[var(--text-light)] mt-1 text-center'>
									{slide.caption}
								</p>
							</div>
						))}
					</div>
				</div>

				<button
					onClick={scrollPrev}
					className='absolute left-2 top-20 -translate-y-1/2 bg-white/80 border border-[var(--sand)] rounded-full w-8 h-8 flex items-center justify-center text-[var(--navy)] hover:bg-white transition'
					aria-label='Previous slide'
				>
					‹
				</button>
				<button
					onClick={scrollNext}
					className='absolute right-2 top-20 -translate-y-1/2 bg-white/80 border border-[var(--sand)] rounded-full w-8 h-8 flex items-center justify-center text-[var(--navy)] hover:bg-white transition'
					aria-label='Next slide'
				>
					›
				</button>
			</div>

			{/* LIGHTBOX */}
			{lightboxIndex !== null && (
				<div
					role='dialog'
					aria-modal='true'
					aria-label={`Image ${lightboxIndex + 1} of ${slides.length}: ${slides[lightboxIndex].caption}`}
					className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center'
					onClick={closeLightbox}
				>
					<div
						className='relative max-w-4xl w-full mx-8'
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={slides[lightboxIndex].src}
							alt={slides[lightboxIndex].caption}
							className='w-full rounded'
						/>
						<p className='text-white text-sm text-center mt-3'>
							{slides[lightboxIndex].caption}
						</p>

						<button
							onClick={lightboxPrev}
							className='absolute left-[-48px] top-1/2 -translate-y-1/2 text-white hover:text-white/70 text-4xl'
							aria-label='Previous image'
						>
							‹
						</button>
						<button
							onClick={lightboxNext}
							className='absolute right-[-48px] top-1/2 -translate-y-1/2 text-white hover:text-white/70 text-4xl'
							aria-label='Next image'
						>
							›
						</button>
						<button
							onClick={closeLightbox}
							className='absolute top-[-40px] right-0 text-white hover:text-white/70 text-2xl'
							aria-label='Close lightbox'
						>
							✕
						</button>
					</div>
				</div>
			)}
		</>
	);
};
