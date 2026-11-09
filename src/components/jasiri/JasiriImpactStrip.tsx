import React from 'react';
import { AccentChoice } from '../../types/jasiri';
import communityImage from '../../assets/images/tunu-community-gathering.jpg';

interface JasiriImpactStripProps {
  accent: AccentChoice;
}

export const JasiriImpactStrip: React.FC<JasiriImpactStripProps> = ({ accent }) => {
  const accentTextStyle =
    accent === 'teal'
      ? 'text-teal-500 dark:text-teal-400'
      : 'text-fuchsia-500 dark:text-fuchsia-400';

  const aboutParagraphs = [
    'At HerRise, we believe that every person deserves the opportunity to live a healthy, dignified, and fulfilling life. We believe stronger communities begin when people have access to reliable health information, essential support, and opportunities to participate in shaping their own well-being.',
    'HerRise was founded on the belief that meaningful change begins within communities. When people are informed, supported, and connected to the right resources, they are better equipped to make informed decisions, overcome challenges, and build brighter futures for themselves and their families.',
    "Our work is rooted in compassion, collaboration, and the belief that no community should be left behind. We seek to bring people together, raise awareness about important health and social issues, and support community-led solutions that respond to people's real needs.",
    'Through health, education, community engagement, partnerships, and social welfare initiatives, we aim to contribute to healthier, more informed, inclusive, and resilient communities.',
  ];

  return (
    <section
      id="about"
      className="relative z-20 isolate overflow-hidden py-16 bg-[#070D1E] text-white border-b border-slate-800 transition-colors shadow-2xl"
    >
      <img
        src={communityImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#070D1E]/95 via-[#070D1E]/85 to-[#070D1E]/70"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${accentTextStyle}`}>
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display-jakarta">
            HerRise
          </h2>
          <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-slate-300 font-body-sans">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-right text-xs text-white/70">
            Photo:{' '}
            <a
              href="https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
