import React, { useEffect, useState } from 'react';
import type { AccentChoice } from '../../types/jasiri';
import type { CurrentPage } from './JasiriNavbar';
import communityImage from '../../assets/images/tunu-community-gathering.jpg';
import healthImage from '../../assets/images/tunu-health-awareness.jpg';
import supportImage from '../../assets/images/tunu-community-support.jpg';
import connectionImage from '../../assets/images/tunu-community-connection.jpg';
import { ArrowLeft, ArrowRight, HeartPulse, UsersRound, Handshake } from 'lucide-react';

interface TunuHomeCarouselProps {
  accent: AccentChoice;
  onNavigate: (page: CurrentPage) => void;
}

const slides: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string }>;
  action: string;
  page: CurrentPage;
}[] = [
  {
    eyebrow: 'SheRise',
    title: 'Nurturing Health. Empowering Communities.',
    description:
      'We work toward healthier, more informed communities by connecting people with reliable health information, essential support, and opportunities to shape their well-being.',
    image: communityImage,
    imageAlt: 'Women gathered together at a community meeting',
    icon: HeartPulse,
    action: 'Who we are',
    page: 'who-we-are',
  },
  {
    eyebrow: 'Health and well-being',
    title: 'Information that supports healthier choices.',
    description:
      'Health education and awareness help people access understandable, reliable information and make informed decisions for themselves and their families.',
    image: healthImage,
    imageAlt: 'Healthcare professional using a phone to support access to health information',
    icon: HeartPulse,
    action: 'Explore our programs',
    page: 'programs',
  },
  {
    eyebrow: 'Community-led change',
    title: 'Lasting change is built with communities.',
    description:
      'We create space for people to identify local challenges, share ideas, and take part in developing solutions that respond to their needs.',
    image: connectionImage,
    imageAlt: 'A group standing together outdoors in support of one another',
    icon: UsersRound,
    action: 'Our approach',
    page: 'approach',
  },
  {
    eyebrow: 'Support and partnership',
    title: 'Stronger together, with no one left behind.',
    description:
      'Through social support, collaboration, inclusion, and empowerment, we help connect communities with people and resources that can support well-being.',
    image: supportImage,
    imageAlt: 'Hands offering a donation to support community needs',
    icon: Handshake,
    action: 'Partner with us',
    page: 'partner',
  },
];

export const TunuHomeCarousel: React.FC<TunuHomeCarouselProps> = ({
  accent,
  onNavigate,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, isPaused]);

  const accentClasses =
    accent === 'teal'
      ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
      : 'bg-fuchsia-400 text-slate-950 hover:bg-fuchsia-300';

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goBy = (step: 1 | -1) => {
    setDirection(step);
    setActiveIndex((current) => (current + step + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="SheRise overview"
      aria-roledescription="carousel"
      className="relative isolate flex min-h-[calc(100svh-11.5rem)] items-center overflow-hidden bg-[#070D1E] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(13,148,136,0.18),transparent_48%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-8 sm:py-10 lg:py-8">
        <div className="relative min-h-[42rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1428]/80 shadow-2xl backdrop-blur-sm sm:min-h-[42rem] lg:min-h-[32rem]">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const isEntering = index === (activeIndex + direction + slides.length) % slides.length;
            const Icon = slide.icon;

            return (
              <article
                key={slide.title}
                aria-hidden={!isActive}
                inert={!isActive}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
                className={`absolute inset-0 grid min-h-[42rem] grid-cols-1 grid-rows-[minmax(0,1fr)_14rem] items-stretch transition-[transform,opacity] duration-700 ease-in-out motion-reduce:transition-none lg:min-h-0 lg:grid-cols-2 lg:grid-rows-1 ${
                  isActive
                    ? 'z-20 translate-x-0 opacity-100'
                    : isEntering
                      ? `z-10 ${direction === 1 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
                      : `z-0 ${direction === 1 ? '-translate-x-full' : 'translate-x-full'} opacity-0`
                }`}
              >
                <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-300/25 bg-teal-300/10 text-teal-200">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
                      {slide.eyebrow}
                    </p>
                  </div>

                  <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>
                  <div className="my-5 h-1 w-14 rounded-full bg-teal-400" />
                  <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate(slide.page)}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold transition-colors ${accentClasses}`}
                    >
                      {slide.action}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <span className="text-xs font-medium text-slate-400">
                      {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="relative min-h-0 overflow-hidden lg:min-h-0">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#070D1E]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0B1428] lg:via-[#0B1428]/10 lg:to-transparent"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-2" aria-label="Choose a slide">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-teal-300' : 'w-2.5 bg-white/35 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goBy(-1)}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goBy(1)}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
