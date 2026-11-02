import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import {
  Code,
  Laptop,
  Users,
  Sprout,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle2,
  Calendar,
  Clock,
  BookOpen,
} from 'lucide-react';

interface JasiriProgramsBentoProps {
  accent: AccentChoice;
  onApplyClick: () => void;
}

interface TrackProgram {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  blurb: string;
  linkText: string;
  duration: string;
  mode: string;
  prerequisites: string;
  syllabusHighlights: string[];
  colSpan?: string;
}

export const JasiriProgramsBento: React.FC<JasiriProgramsBentoProps> = ({
  accent,
  onApplyClick,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<TrackProgram | null>(null);

  const accentTextStyle =
    accent === 'teal'
      ? 'text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300'
      : 'text-fuchsia-600 dark:text-fuchsia-400 group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300';

  const accentIconBg =
    accent === 'teal'
      ? 'bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/60'
      : 'bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-950/60 dark:text-fuchsia-400 border border-fuchsia-200/60 dark:border-fuchsia-800/60';

  const accentBtnStyle =
    accent === 'teal'
      ? 'bg-teal-600 hover:bg-teal-700 text-white'
      : 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white';

  const tracks: TrackProgram[] = [
    {
      id: 'summer-intensive',
      name: 'Summer Intensive Program',
      subtitle: 'Full-Immersion Engineering Bootcamp',
      icon: Code,
      blurb:
        'A rigorous 16-week, in-person engineering accelerator in Nairobi covering modern TypeScript, cloud architectures, REST APIs, and automated test pipelines under senior mentorship.',
      linkText: 'Explore Intensive Curriculum →',
      duration: '16 Weeks (Full-time)',
      mode: 'In-Person at Nairobi Campus',
      prerequisites: 'Basic algorithmic logic & commitment to cohort sprint',
      syllabusHighlights: [
        'Advanced TypeScript & Component Architecture',
        'PostgreSQL, Distributed Cache & Redis',
        'CI/CD Pipelines with GitHub Actions & Docker',
        'Production Capstone sponsored by Enterprise Partner',
      ],
      colSpan: 'lg:col-span-2',
    },
    {
      id: 'self-guided',
      name: 'Self-Guided Online Training',
      subtitle: 'Decentralized Asynchronous Modules',
      icon: Laptop,
      blurb:
        'Flexible cloud-based curriculum designed for working students and rural fellows. Access bite-sized video lessons, automated code grading, and regional weekend study hubs.',
      linkText: 'Access Self-Paced Modules →',
      duration: '6 Months (Self-Paced)',
      mode: 'Hybrid (Online + 24 County Hubs)',
      prerequisites: 'Internet access (Data vouchers provided)',
      syllabusHighlights: [
        'Web Development Fundamentals (HTML/CSS/JS)',
        'Python for Data Science & Automation',
        'Git Version Control & Team Workflows',
        'Async Code Reviews & Weekly Mentor Hours',
      ],
      colSpan: 'lg:col-span-1',
    },
    {
      id: 'alumni-network',
      name: 'Alumni Network & Executive Mentorship',
      subtitle: 'Lifelong Career Acceleration',
      icon: Users,
      blurb:
        'A vibrant pan-African fellowship of 14,000+ graduates providing 1-on-1 executive mentorship, referral access to high-growth tech firms, and annual venture investor demo days.',
      linkText: 'Connect with Alumni Chapter →',
      duration: 'Continuous Fellowship',
      mode: 'Global & Regional Circles',
      prerequisites: 'Graduates of any Jasiri cohort',
      syllabusHighlights: [
        'Executive Salary Negotiation & Career Roadmaps',
        'Venture Capital Pitch Clinics & Angel Introductions',
        'Senior Engineering Architecture Roundtables',
        'Peer Mentorship for Incoming Fellows',
      ],
      colSpan: 'lg:col-span-1',
    },
    {
      id: 'agritech-lab',
      name: 'Agri-Tech & Climate Systems Lab',
      subtitle: 'Hardware & Solar IoT Specialization',
      icon: Sprout,
      blurb:
        'Hands-on laboratory training young women agronomists in solar-powered precision irrigation telemetry, USSD farm messaging, and soil sensor deployment across rural counties.',
      linkText: 'Discover Field Lab Track →',
      duration: '12 Weeks (Field Practicum)',
      mode: 'Rift Valley & Western Hubs',
      prerequisites: 'Interest in agriculture, hardware, or environmental data',
      syllabusHighlights: [
        'Embedded IoT Microcontrollers & LoRaWAN',
        'Solar Battery Management & Field Sensors',
        'USSD & SMS Gateway Integration for Feature Phones',
        'Direct Deployment on 100+ Partner Smallholder Farms',
      ],
      colSpan: 'lg:col-span-2',
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-white dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            <span>3. THE PILLARS / PROGRAMS SECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight font-display-jakarta">
            Structured educational pathways tailored to every learning stage
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-body-sans">
            Whether starting with self-guided fundamentals or joining our flagship full-time intensive, every track is 100% sponsored and paired with verified industry outcomes.
          </p>
        </div>

        {/* 2-Column or 3-Column Bento-Grid Layout (Prompt 2 requirement) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className={`p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0B142B] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group ${track.colSpan || ''}`}
              >
                <div>
                  {/* Track Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${accentIconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {track.duration}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    {track.subtitle}
                  </span>

                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white font-display-jakarta mb-3">
                    {track.name}
                  </h3>

                  {/* Short Text Blurb (Prompt 2 requirement) */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans mb-6">
                    {track.blurb}
                  </p>
                </div>

                {/* Text Link (Prompt 2 requirement) with active modal trigger */}
                <div className="pt-6 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedTrack(track)}
                    className={`text-sm font-bold transition-all inline-flex items-center gap-1.5 font-display-jakarta cursor-pointer ${accentTextStyle}`}
                  >
                    <span>{track.linkText}</span>
                  </button>

                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {track.mode}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Curriculum & Track Syllabus Modal */}
      {selectedTrack && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setSelectedTrack(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-[#0B142B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                  <span>{selectedTrack.duration}</span>
                  <span>·</span>
                  <span>{selectedTrack.mode}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white font-display-jakarta">
                  {selectedTrack.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTrack(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-6 space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans">
                {selectedTrack.blurb}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                  Core Syllabus & Focus Topics
                </span>
                <div className="space-y-1.5">
                  {selectedTrack.syllabusHighlights.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                PREREQUISITES: <span className="text-slate-800 dark:text-slate-200">{selectedTrack.prerequisites}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono text-slate-500">100% Fully Funded Scholarship</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTrack(null)}
                  className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTrack(null);
                    onApplyClick();
                  }}
                  className={`px-5 py-2 text-xs font-bold rounded-lg ${accentBtnStyle}`}
                >
                  Apply for this Track
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
