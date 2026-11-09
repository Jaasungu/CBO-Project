import React, { useEffect, useState } from 'react';
import type { CurrentPage } from './JasiriNavbar';
import communityImage from '../../assets/images/tunu-community-gathering.jpg';
import healthAwarenessImage from '../../assets/images/tunu-health-awareness.jpg';
import communitySupportImage from '../../assets/images/tunu-community-support.jpg';
import communityConnectionImage from '../../assets/images/tunu-community-connection.jpg';

type AboutPageKey = Extract<CurrentPage, 'our-story' | 'issue' | 'approach' | 'who-we-are'>;

interface TunuAboutPageProps {
  currentPage: AboutPageKey;
  onNavigate: (page: AboutPageKey) => void;
}

const aboutPageContent: Record<
  AboutPageKey,
  { title: string; introduction: string; paragraphs: string[] }
> = {
  'our-story': {
    title: 'Our Story',
    introduction:
      'At SheRise, we believe that every person deserves the opportunity to live a healthy, dignified, and fulfilling life. We believe stronger communities begin when people have access to reliable health information, essential support, and opportunities to participate in shaping their own well-being.',
    paragraphs: [
      'SheRise was founded on the belief that meaningful change begins within communities. When people are informed, supported, and connected to the right resources, they are better equipped to make informed decisions, overcome challenges, and build brighter futures for themselves and their families.',
      "Our work is rooted in compassion, collaboration, and the belief that no community should be left behind. We seek to bring people together, raise awareness about important health and social issues, and support community-led solutions that respond to people's real needs.",
      'Through health, education, community engagement, partnerships, and social welfare initiatives, we aim to contribute to healthier, more informed, inclusive, and resilient communities.',
    ],
  },
  issue: {
    title: 'The Issue We Address',
    introduction:
      'Across many communities, barriers to health, well-being, and quality of life persist. Limited access to reliable information and support, stigma, economic hardship, and low awareness of available services can prevent people from getting help. These challenges weigh most heavily on vulnerable individuals and families.',
    paragraphs: [
      "Health and social well-being are closely connected. A person's ability to live a healthy life can be influenced by their social and economic circumstances, their access to information, the support available to them, and the opportunities within their community.",
      "Addressing these challenges requires more than individual effort. It calls for collaboration between community members, local leaders, service providers, public institutions, and organisations that share a commitment to improving people's lives.",
      'SheRise seeks to be part of this response by promoting health awareness, encouraging informed decision-making, strengthening community collaboration, and supporting initiatives that respond to social welfare needs.',
    ],
  },
  approach: {
    title: 'Our Approach',
    introduction: 'We believe lasting change is built with communities, not simply for them.',
    paragraphs: [
      'Sharing clear, reliable health information so individuals and families can make informed choices and adopt healthier practices.',
      'Raising awareness of health and social issues, available services, and ways community members can seek support.',
      'Creating opportunities for people to identify challenges, share ideas, and develop locally relevant solutions.',
      'Supporting initiatives that respond to social needs, promote dignity, and connect people with appropriate services and resources.',
      'Working with community groups, local leaders, service providers, and other stakeholders to strengthen collective action.',
      'Encouraging participation and helping ensure vulnerable and underserved community members are considered in efforts to improve well-being.',
    ],
  },
  'who-we-are': {
    title: 'Who We Are',
    introduction: 'Nurturing Health. Empowering Communities.',
    paragraphs: [
      'To improve community health and social well-being through health education, community engagement, collaborative partnerships, and initiatives that empower individuals and strengthen communities.',
      'Healthy, empowered, and resilient communities where every person has the opportunity to live with dignity and well-being.',
      'Compassion | Dignity | Integrity | Collaboration | Inclusion | Empowerment',
    ],
  },
};

const approachAreas = [
  'Health Education',
  'Awareness',
  'Community engagement',
  'Social welfare and support',
  'Partnership and collaboration',
  'Inclusion and empowerment',
];

const identityAreas = ['Our Mission', 'Our Vision', 'Our Values'];

const whoWeAreImages = [
  communityImage,
  healthAwarenessImage,
  communitySupportImage,
  communityConnectionImage,
];

const otherPages: { page: AboutPageKey; label: string }[] = [
  { page: 'our-story', label: 'Our Story' },
  { page: 'issue', label: 'The Issue We Address' },
  { page: 'approach', label: 'Our Approach' },
];

export const TunuAboutPage: React.FC<TunuAboutPageProps> = ({
  currentPage,
  onNavigate,
}) => {
  const content = aboutPageContent[currentPage];
  const isOurStory = currentPage === 'our-story';
  const isIssue = currentPage === 'issue';
  const isApproach = currentPage === 'approach';
  const isWhoWeAre = currentPage === 'who-we-are';
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    if (!isWhoWeAre || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % whoWeAreImages.length);
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [isWhoWeAre]);

  return (
    <article className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#070D1E] text-white">
      {isWhoWeAre ? (
        whoWeAreImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-[opacity,transform] duration-700 ease-in-out motion-reduce:transition-none ${
              activeBackground === index
                ? 'z-0 translate-x-0 opacity-100'
                : 'z-0 -translate-x-8 opacity-0'
            }`}
          />
        ))
      ) : (
        <img
          src={communityImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
      )}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 bg-gradient-to-r ${
          isWhoWeAre
            ? 'from-[#070D1E]/80 via-[#070D1E]/70 to-[#070D1E]/60'
            : 'from-[#070D1E]/95 via-[#070D1E]/85 to-[#070D1E]/70'
        }`}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-3 sm:py-8 [@media(max-height:700px)]:py-1">
        {isOurStory ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-3 lg:grid-cols-12 lg:gap-6">
            <section className="flex flex-col justify-center rounded-3xl border border-white/15 bg-[#070D1E]/70 p-4 shadow-2xl backdrop-blur-md sm:p-7 lg:col-span-5">
              <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
                About SheRise
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {content.title}
              </h1>
              <div className="my-3 h-1 w-14 rounded-full bg-teal-400" />
              <p className="text-[13px] leading-5 text-slate-100 sm:text-base sm:leading-relaxed">
                {content.introduction}
              </p>
            </section>

            <section
              aria-label="Our founding, values, and vision"
              className="grid gap-2 lg:col-span-7"
            >
              {[
                { label: 'Where we began', paragraph: content.paragraphs[0] },
                { label: 'What guides us', paragraph: content.paragraphs[1] },
                { label: 'The future we seek', paragraph: content.paragraphs[2] },
              ].map(({ label, paragraph }, index) => (
                <article
                  key={label}
                  className="rounded-2xl border border-white/15 bg-[#070D1E]/65 p-3 shadow-lg backdrop-blur-md sm:p-5"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal-300/50 text-[10px] font-bold text-teal-200 sm:h-8 sm:w-8 sm:text-xs">
                      0{index + 1}
                    </span>
                    <h2 className="text-xs font-bold text-white sm:text-base">{label}</h2>
                  </div>
                  <p className="text-[11px] leading-[1.3] text-slate-200 sm:text-sm sm:leading-relaxed">
                    {paragraph}
                  </p>
                </article>
              ))}
            </section>

            <nav
              aria-label="Related About SheRise pages"
              className="flex flex-wrap items-center gap-2 lg:col-span-12"
            >
              <span className="mr-1 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                Explore
              </span>
              {otherPages
                .filter(({ page }) => page !== currentPage)
                .map(({ page, label }) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/20 sm:text-xs"
                  >
                    {label}
                  </button>
                ))}
              <span className="ml-auto text-[10px] text-white/70">
                Photo:{' '}
                <a
                  href="https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Unsplash
                </a>
              </span>
            </nav>
          </div>
        ) : isIssue ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-3 lg:grid-cols-12 lg:gap-6">
            <section className="flex flex-col justify-center rounded-3xl border border-white/15 bg-[#070D1E]/70 p-4 shadow-2xl backdrop-blur-md sm:p-7 lg:col-span-5">
              <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
                Understanding the challenge
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-display-jakarta">
                {content.title}
              </h1>
              <div className="my-3 h-1 w-14 rounded-full bg-teal-400" />
              <p className="text-[13px] leading-5 text-slate-100 sm:text-base sm:leading-relaxed">
                {content.introduction}
              </p>
            </section>

            <section
              aria-label="How the issue affects communities"
              className="grid gap-2 lg:col-span-7"
            >
              {[
                { label: 'Well-being is connected', paragraph: content.paragraphs[0] },
                { label: 'Progress takes partnership', paragraph: content.paragraphs[1] },
                { label: 'A community-led response', paragraph: content.paragraphs[2] },
              ].map(({ label, paragraph }, index) => (
                <article
                  key={label}
                  className="rounded-2xl border border-white/15 bg-[#070D1E]/65 p-3 shadow-lg backdrop-blur-md sm:p-5"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal-300/50 text-[10px] font-bold text-teal-200 sm:h-8 sm:w-8 sm:text-xs">
                      0{index + 1}
                    </span>
                    <h2 className="text-xs font-bold text-white sm:text-base">{label}</h2>
                  </div>
                  <p className="text-[11px] leading-[1.3] text-slate-200 sm:text-sm sm:leading-relaxed">
                    {paragraph}
                  </p>
                </article>
              ))}
            </section>

            <nav
              aria-label="Related About SheRise pages"
              className="flex flex-wrap items-center gap-2 lg:col-span-12"
            >
              <span className="mr-1 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                Explore
              </span>
              {otherPages
                .filter(({ page }) => page !== currentPage)
                .map(({ page, label }) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/20 sm:text-xs"
                  >
                    {label}
                  </button>
                ))}
              <span className="ml-auto text-[10px] text-white/70">
                Photo:{' '}
                <a
                  href="https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Unsplash
                </a>
              </span>
            </nav>
          </div>
        ) : isApproach ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-3 lg:grid-cols-12 lg:gap-6">
            <section className="flex flex-col justify-center rounded-3xl border border-white/15 bg-[#070D1E]/70 p-4 shadow-2xl backdrop-blur-md sm:p-7 lg:col-span-5">
              <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
                How we work
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-display-jakarta">
                {content.title}
              </h1>
              <div className="my-3 h-1 w-14 rounded-full bg-teal-400" />
              <p className="text-[13px] leading-5 text-slate-100 sm:text-base sm:leading-relaxed">
                {content.introduction}
              </p>
            </section>

            <section
              aria-label="Our approach in practice"
              className="grid gap-1.5 sm:gap-2 lg:col-span-7 lg:grid-cols-2"
            >
              {content.paragraphs.map((paragraph, index) => (
                <article
                  key={approachAreas[index]}
                  className="rounded-2xl border border-white/15 bg-[#070D1E]/65 p-2.5 shadow-lg backdrop-blur-md sm:p-4"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal-300/50 text-[10px] font-bold text-teal-200 sm:h-8 sm:w-8 sm:text-xs">
                      0{index + 1}
                    </span>
                    <h2 className="text-xs font-bold text-white sm:text-base">
                      {approachAreas[index]}
                    </h2>
                  </div>
                  <p className="text-[11px] leading-[1.3] text-slate-200 sm:text-sm sm:leading-relaxed">
                    {paragraph}
                  </p>
                </article>
              ))}
            </section>

            <nav
              aria-label="Related About SheRise pages"
              className="flex flex-wrap items-center gap-2 lg:col-span-12"
            >
              <span className="mr-1 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                Explore
              </span>
              {otherPages
                .filter(({ page }) => page !== currentPage)
                .map(({ page, label }) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/20 sm:text-xs"
                  >
                    {label}
                  </button>
                ))}
              <span className="ml-auto text-[10px] text-white/70">
                Photo:{' '}
                <a
                  href="https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Unsplash
                </a>
              </span>
            </nav>
          </div>
        ) : isWhoWeAre ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-3 lg:grid-cols-12 lg:gap-6">
            <section className="flex flex-col justify-center rounded-3xl border border-white/15 bg-[#070D1E]/70 p-4 shadow-2xl backdrop-blur-md sm:p-7 lg:col-span-5">
              <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
                What guides us
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-display-jakarta">
                {content.title}
              </h1>
              <div className="my-3 h-1 w-14 rounded-full bg-teal-400" />
              <p className="text-lg leading-relaxed text-white sm:text-xl">
                {content.introduction}
              </p>
            </section>

            <section
              aria-label="Our mission, vision, and values"
              className="grid gap-2 lg:col-span-7"
            >
              {content.paragraphs.map((paragraph, index) => (
                <article
                  key={identityAreas[index]}
                  className="rounded-2xl border border-white/15 bg-[#070D1E]/65 p-3 shadow-lg backdrop-blur-md sm:p-5"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal-300/50 text-[10px] font-bold text-teal-200 sm:h-8 sm:w-8 sm:text-xs">
                      0{index + 1}
                    </span>
                    <h2 className="text-xs font-bold text-white sm:text-base">
                      {identityAreas[index]}
                    </h2>
                  </div>
                  <p className="text-[11px] leading-[1.3] text-slate-200 sm:text-sm sm:leading-relaxed">
                    {index === 2
                      ? paragraph.split(' | ').map((value, valueIndex, values) => (
                          <React.Fragment key={value}>
                            <strong>{value}</strong>
                            {valueIndex < values.length - 1 && ' | '}
                          </React.Fragment>
                        ))
                      : paragraph}
                  </p>
                </article>
              ))}
            </section>

            <nav
              aria-label="Related About SheRise pages"
              className="flex flex-wrap items-center gap-2 lg:col-span-12"
            >
              <span className="mr-1 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                Explore
              </span>
              {otherPages
                .filter(({ page }) => page !== currentPage)
                .map(({ page, label }) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/20 sm:text-xs"
                  >
                    {label}
                  </button>
                ))}
              <span className="ml-auto text-[10px] text-white/70">
                Photos:{' '}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Unsplash
                </a>
              </span>
            </nav>
          </div>
        ) : (
          <div className="max-w-3xl">
            <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
              About SheRise
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-display-jakarta">
              {content.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white sm:text-xl">
              {content.introduction}
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {otherPages
                .filter(({ page }) => page !== currentPage)
                .map(({ page, label }) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20 sm:text-sm"
                  >
                    {label}
                  </button>
                ))}
            </div>
          </div>
        )}
        {!isOurStory && !isIssue && !isApproach && !isWhoWeAre && <p className="mt-2 max-w-3xl text-right text-[10px] text-white/70">
          Photo:{' '}
          <a
            href="https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            Unsplash
          </a>
        </p>}
      </div>
    </article>
  );
};
