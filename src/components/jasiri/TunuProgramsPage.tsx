import React from 'react';
import type { AccentChoice } from '../../types/jasiri';
import communityImage from '../../assets/images/tunu-community-gathering.jpg';
import {
  ArrowRight,
  HandHeart,
  Handshake,
  HeartPulse,
  Sparkles,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';

interface TunuProgramsPageProps {
  accent: AccentChoice;
  onNavigateHome: () => void;
  onNavigatePartner: () => void;
}

const programAreas = [
  {
    title: 'Health Education and Awareness',
    description:
      'Promoting access to understandable, reliable health information that supports informed choices and healthier practices.',
    icon: HeartPulse,
  },
  {
    title: 'Community Engagement',
    description:
      'Creating opportunities for people to identify local challenges, share ideas, and shape solutions that reflect their community’s needs.',
    icon: UsersRound,
  },
  {
    title: 'Social Welfare and Support',
    description:
      'Supporting initiatives that respond to social needs, uphold dignity, and connect people with appropriate services and resources.',
    icon: HandHeart,
  },
  {
    title: 'Partnership and Collaboration',
    description:
      'Working alongside community groups, local leaders, service providers, and other stakeholders to strengthen collective action.',
    icon: Handshake,
  },
  {
    title: 'Inclusion',
    description:
      'Encouraging meaningful participation and ensuring vulnerable and underserved community members are considered in efforts to improve well-being.',
    icon: ShieldCheck,
  },
  {
    title: 'Empowerment',
    description:
      'Supporting people with information, connections, and opportunities to take part in improving their lives.',
    icon: Sparkles,
  },
];

export const TunuProgramsPage: React.FC<TunuProgramsPageProps> = ({
  accent,
  onNavigateHome,
  onNavigatePartner,
}) => {
  const accentButton =
    accent === 'teal'
      ? 'bg-teal-500 text-[#07121f] hover:bg-teal-300'
      : 'bg-fuchsia-400 text-[#1b1020] hover:bg-fuchsia-300';

  return (
    <article className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#070D1E] text-white">
      <img
        src={communityImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#070D1E]/85"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 sm:py-14 lg:py-16">
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
            How we serve communities
          </p>
          <h1 className="font-display-jakarta text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Programs
          </h1>
          <div className="mx-auto my-4 h-1 w-14 rounded-full bg-teal-400" />
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            HerRise works to improve community health and social
            well-being. Our connected program areas bring people together,
            strengthen access to information and support, and help communities
            shape solutions that respond to their needs.
          </p>
        </header>

        <section
          aria-label="HerRise program areas"
          className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 sm:gap-4"
        >
          {programAreas.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/15 bg-[#070D1E]/75 p-4 shadow-xl backdrop-blur-md sm:p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-200">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h2 className="font-display-jakarta text-sm font-bold text-white sm:text-base">
                  {title}
                </h2>
              </div>
              <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </section>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onNavigatePartner}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-colors ${accentButton}`}
          >
            Partner with us
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNavigateHome}
            className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
          >
            Back to home
          </button>
        </div>
      </div>
    </article>
  );
};
