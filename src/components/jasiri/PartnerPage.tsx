import React from 'react';
import type { AccentChoice } from '../../types/jasiri';
import communityImage from '../../assets/images/tunu-community-connection.jpg';
import {
  ArrowRight,
  HandHeart,
  Handshake,
  Mail,
  MapPin,
  Phone,
  UsersRound,
} from 'lucide-react';

interface PartnerPageProps {
  accent: AccentChoice;
  onNavigateHome: () => void;
  onNavigatePrograms: () => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({
  accent,
  onNavigateHome,
  onNavigatePrograms,
}) => {
  const accentButton =
    accent === 'teal'
      ? 'bg-teal-500 text-[#07121f] hover:bg-teal-300'
      : 'bg-fuchsia-400 text-[#1b1020] hover:bg-fuchsia-300';

  const waysToConnect = [
    {
      icon: UsersRound,
      title: 'Community members',
      description:
        'Get in touch to learn about our work, share a community need, or explore how to take part in local activities.',
      linkText: 'Contact HerRise',
      subject: 'Community inquiry',
    },
    {
      icon: Handshake,
      title: 'Organizations and partners',
      description:
        'We welcome conversations with community groups, service providers, institutions, and others interested in working together.',
      linkText: 'Explore a partnership',
      subject: 'Partnership inquiry',
    },
    {
      icon: HandHeart,
      title: 'Volunteers and supporters',
      description:
        'Interested in contributing your time, skills, or support? Contact us and tell us a little about how you would like to help.',
      linkText: 'Offer your support',
      subject: 'Volunteer or support inquiry',
    },
  ];

  return (
    <article className="relative isolate overflow-hidden bg-[#070D1E] text-white">
      <img
        src={communityImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#070D1E]/95 via-[#070D1E]/90 to-[#10263a]/85"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
            Connect with HerRise
          </p>
          <h1 className="font-display-jakarta text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let’s build healthier, stronger communities together.
          </h1>
          <div className="mx-auto my-5 h-1 w-14 rounded-full bg-teal-400" />
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Whether you are a community member, organization, potential partner,
            or supporter, we would be glad to hear from you. Tell us what you
            are interested in and our team will be in touch.
          </p>
        </header>

        <section
          aria-label="Ways to connect with HerRise"
          className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3"
        >
          {waysToConnect.map(({ icon: Icon, title, description, linkText, subject }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-white/15 bg-[#0B142B]/85 p-5 shadow-xl backdrop-blur-md sm:p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-200">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h2 className="mb-2 font-display-jakarta text-lg font-bold text-white">
                {title}
              </h2>
              <p className="flex-1 text-sm leading-relaxed text-slate-300">
                {description}
              </p>
              <a
                href={`mailto:info@herrise.org?subject=${encodeURIComponent(subject)}`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-bold text-teal-300 transition-colors hover:text-teal-200"
              >
                {linkText}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-8 grid max-w-6xl gap-4 rounded-2xl border border-white/15 bg-[#0B142B]/90 p-5 shadow-xl backdrop-blur-md sm:grid-cols-2 sm:p-7">
          <div>
            <h2 className="mb-4 font-display-jakarta text-lg font-bold text-white">
              Get in touch
            </h2>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="tel:+254731546778"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-teal-300" />
                +254 731 546778
              </a>
              <a
                href="mailto:info@herrise.org"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-teal-300" />
                info@herrise.org
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-display-jakarta text-lg font-bold text-white">
              Visit us
            </h2>
            <address className="flex items-start gap-3 text-sm not-italic leading-relaxed text-slate-300">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
              <span>
                1st Floor, Camp David House
                <br />
                Off Langata Rd, Nairobi
                <br />
                Box 1235 - 0100, Nairobi, Kenya
              </span>
            </address>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onNavigatePrograms}
            className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-colors ${accentButton}`}
          >
            Explore our programs
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNavigateHome}
            className="min-h-11 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
          >
            Back to home
          </button>
        </div>
      </div>
    </article>
  );
};
