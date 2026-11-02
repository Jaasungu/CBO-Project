import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Laptop,
  GraduationCap,
  Briefcase,
  Users,
  Shield,
  ArrowRight,
  Calendar,
  Sparkles,
  HelpCircle,
  FileCheck,
  Award,
} from 'lucide-react';

interface ProgramsPageProps {
  accent: AccentChoice;
  onNavigateHome: () => void;
  onNavigatePartner: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  accent,
  onNavigateHome,
  onNavigatePartner,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    county: 'Nairobi',
    programTrack: 'Summer Intensive Program',
    educationLevel: 'Undergraduate Degree',
    motivation: '',
  });

  const accentBtn =
    accent === 'teal'
      ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-900/20'
      : 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-fuchsia-900/20';

  const accentText =
    accent === 'teal' ? 'text-teal-600 dark:text-teal-400' : 'text-fuchsia-600 dark:text-fuchsia-400';

  const accentBorder =
    accent === 'teal' ? 'border-teal-500' : 'border-fuchsia-500';

  const accentStepActive =
    accent === 'teal'
      ? 'bg-teal-600 text-white border-teal-500'
      : 'bg-fuchsia-600 text-white border-fuchsia-500';

  // Stepper / Timeline Phases (Prompt 3 requirement)
  const programStages = [
    {
      phase: 'Phase 1',
      title: 'Academic & Technical Immersion',
      duration: 'Months 1 – 3',
      subtitle: 'Rigorous Foundation in Software Engineering, Cloud & Applied AI',
      description:
        'Fellows complete intensive daily technical labs led by senior engineering practitioners. The curriculum emphasizes modern TypeScript, database engineering, automated testing, and agile sprints with bi-weekly code reviews.',
      deliverables: [
        'Full-Stack Architecture (TypeScript, Node.js, React)',
        'PostgreSQL Database Optimization & Schema Design',
        'CI/CD Pipelines, Docker Containers & Cloud Deployment',
        'Algorithmic Complexity & Technical Interview Preparation',
      ],
      stipend: '100% Fully Sponsored + Laptop Loan + Monthly Data Stipend',
    },
    {
      phase: 'Phase 2',
      title: 'Paid Industry Apprenticeship',
      duration: 'Months 4 – 6',
      subtitle: 'Direct Placement within Corporate & High-Growth Tech Teams',
      description:
        'Every fellow transitions into a 3-month paid internship with one of our 120+ vetted corporate and startup partners in Nairobi or remote. Fellows work on real production pull requests alongside senior mentors.',
      deliverables: [
        'Direct Employment on Production Codebases',
        'Guaranteed Monthly Living Wage Stipend',
        'Weekly 1-on-1 Guidance from Executive Female Mentors',
        'Mid-Term Performance Review & Capability Assessment',
      ],
      stipend: 'Guaranteed Competitive Monthly Living Wage from Partner Employer',
    },
    {
      phase: 'Phase 3',
      title: 'Lifelong Alumni Network & Venture Incubation',
      duration: 'Month 7 and Beyond',
      subtitle: 'Continuous Career Acceleration, Angel Demo Days & Peer Community',
      description:
        'Graduates gain lifetime entry into the 14,000+ member Jasiri Alumni Fellowship across East Africa. Benefit from senior salary negotiation clinics, executive leadership tracks, and direct angel seed syndicate pitching.',
      deliverables: [
        'Access to Jasiri Angel Demo Day & Seed Grants',
        'Pan-African Technical Roundtables & Job Referral Board',
        'Executive Leadership & Board Room Placement Coaching',
        'Mentorship Roles for Incoming Cohort Classes',
      ],
      stipend: 'Access to $50,000 Catalytic Venture Seed Grant Pool',
    },
  ];

  // Eligibility & FAQ (Prompt 3 requirement)
  const eligibilityCriteria = [
    'Kenyan citizen or legal resident aged 18 to 29 years old',
    'Self-identify as a woman or member of an underrepresented group in STEM',
    'Demonstrated passion for technology, software development, or agri-tech innovation',
    'Full-time commitment to scheduled sprint hours (In-person in Nairobi or Hybrid)',
    'No prior formal computer science degree required—aptitude & grit prioritized',
  ];

  const faqs = [
    {
      question: 'What is the cost of attending the Jasiri fellowship?',
      answer:
        'The program is 100% tuition-free for all accepted fellows. Thanks to our philanthropic and corporate partners (including Safaricom Foundation and Mastercard Foundation), every fellow receives fully sponsored tuition, a high-performance laptop loan, and monthly connectivity vouchers.',
    },
    {
      question: 'What are the application deadlines for the 2026 cohorts?',
      answer:
        'Cohort IX (Summer Intensive) applications close on May 31, 2026. Cohort X (Autumn Hybrid) applications close on August 15, 2026. We review applications on a rolling basis, so early submissions receive prioritized evaluation.',
    },
    {
      question: 'Do I need prior coding experience to qualify?',
      answer:
        'No prior professional programming experience is required. Our admissions process tests for logical reasoning, problem-solving determination, and mission alignment rather than memorized code syntax. Preparatory modules are provided upon invitation to interview.',
    },
    {
      question: 'How does the Paid Industry Internship phase work?',
      answer:
        'During Phase 2, our employer partnerships team matches each fellow with a vetted employer based on technical track specialization. All internships are strictly paid positions with guaranteed monthly compensation.',
    },
    {
      question: 'What accommodations are provided for fellows with childcare needs or rural relocation?',
      answer:
        'We offer need-based childcare subventions and relocation grants for fellows transitioning to Nairobi from rural counties. All our 24 regional county hubs provide quiet study rooms, high-speed fiber, and solar-backed power.',
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="w-full bg-white dark:bg-[#070D1E] text-slate-900 dark:text-white transition-colors">
      {/* Prompt 3: Top Sticky Banner Featuring Prominent 'Start Application' Button */}
      <div className="sticky top-16 z-30 bg-[#0B142B] text-white border-b border-slate-800 py-3 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div className="text-xs font-mono">
              <span className="font-bold text-slate-200">2026 COHORT IX INTAKE:</span>{' '}
              <span className="text-slate-400">Applications Open Through May 31 · 100% Fully Funded</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setApplicationModalOpen(true)}
            className={`px-5 py-2 text-xs font-extrabold rounded-lg transition-all font-display-jakarta cursor-pointer flex items-center gap-2 shadow-sm ${accentBtn}`}
          >
            <span>Start Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Program Page Hero */}
      <section className="py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A1226]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
              <span>EDUCATIONAL INITIATIVES & CURRICULUM</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display-jakarta leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
            >
              World-class technical training. Guaranteed career momentum.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans">
              Designed from the ground up to eliminate systemic barriers in Kenya’s technology sector. Jasiri provides end-to-end support—from intensive computer science fundamentals to corporate apprenticeships and lifelong community support.
            </p>
          </div>
        </div>
      </section>

      {/* Prompt 3: Embedded Interactive Timeline / Stepper Vertical Block */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              PROGRAM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display-jakarta">
              The 3-Phase Fellowship Stepper
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 font-body-sans">
              Click through each sequential phase to understand milestones, compensation, and learning objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Stepper Navigation (Left Column) */}
            <div className="lg:col-span-4 space-y-3">
              {programStages.map((stage, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={stage.phase}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                      isActive
                        ? 'bg-slate-900 text-white dark:bg-[#0B142B] border-slate-900 dark:border-slate-700 shadow-lg'
                        : 'bg-white dark:bg-[#0A1226] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {isActive && (
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                          accent === 'teal' ? 'bg-teal-500' : 'bg-fuchsia-500'
                        }`}
                      ></div>
                    )}
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className={isActive ? 'text-teal-400' : 'text-slate-500'}>
                        {stage.phase}
                      </span>
                      <span className={isActive ? 'text-slate-300' : 'text-slate-500'}>
                        {stage.duration}
                      </span>
                    </div>
                    <h3
                      className={`text-lg font-bold font-display-jakarta ${
                        isActive ? 'text-white' : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {stage.title}
                    </h3>
                  </button>
                );
              })}

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B142B] border border-slate-200 dark:border-slate-800 space-y-3 mt-6">
                <span className="text-xs font-mono uppercase text-slate-500 block">
                  Fellowship Guarantee
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans">
                  Zero tuition fees charged to students at any point. All stipends and hardware are provided upfront upon matriculation.
                </p>
                <button
                  type="button"
                  onClick={() => setApplicationModalOpen(true)}
                  className={`w-full py-2.5 px-4 text-xs font-extrabold rounded-lg transition-all font-display-jakarta ${accentBtn}`}
                >
                  Start Application for Cohort IX
                </button>
              </div>
            </div>

            {/* Stage Detail Card (Right Column) */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0B142B] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className={`text-xs font-mono uppercase font-bold tracking-wider ${accentText}`}>
                    {programStages[activeStep].phase} · {programStages[activeStep].duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white font-display-jakarta mt-1">
                    {programStages[activeStep].title}
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                  Step {activeStep + 1} of 3
                </div>
              </div>

              <div className="my-6 space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-1">
                    Curriculum Scope & Approach
                  </span>
                  <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-body-sans">
                    {programStages[activeStep].description}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block mb-3">
                    Key Outcomes & Milestones
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {programStages[activeStep].deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200 font-medium"
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${accentText}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 block">
                      Financial Underwriting
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {programStages[activeStep].stipend}
                    </span>
                  </div>
                  <Award className="w-5 h-5 text-slate-400" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                  ← Previous Phase
                </button>
                <button
                  type="button"
                  disabled={activeStep === programStages.length - 1}
                  onClick={() => setActiveStep(activeStep + 1)}
                  className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeStep === programStages.length - 1
                      ? 'opacity-40 cursor-not-allowed border border-slate-300 dark:border-slate-700'
                      : accentBtn
                  }`}
                >
                  Next Phase →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt 3: Eligibility & FAQ Accordion Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#0A1226] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Eligibility Checklist */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                ADMISSIONS CRITERIA
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display-jakarta">
                Candidate Eligibility
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans">
                We evaluate candidates holistically. Our goal is to expand opportunities for talented young women who have lacked access to high-end digital infrastructure.
              </p>

              <div className="space-y-3 pt-2">
                {eligibilityCriteria.map((criterion, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white dark:bg-[#0B142B] border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${accentText}`} />
                    <span className="leading-relaxed">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion Tabs (Prompt 3 requirement) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                COMMON INQUIRIES & ADMISSIONS
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display-jakarta mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B142B] overflow-hidden transition-all shadow-xs"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-display-jakarta font-bold text-sm text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans border-t border-slate-100 dark:border-slate-800/80 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal (Triggered by 'Start Application' button) */}
      {applicationModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setApplicationModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-white dark:bg-[#0B142B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white font-display-jakarta">
                  2026 Fellowship Admissions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Cohort IX · Nairobi Campus & County Digital Hubs
                </p>
              </div>
              <button
                type="button"
                onClick={() => setApplicationModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-display-jakarta text-slate-900 dark:text-white">
                  Application Initiated Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, {appForm.fullName}. Your preliminary profile has been logged for{' '}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {appForm.programTrack}
                  </span>
                  . A technical logic assessment link has been emailed to{' '}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {appForm.email}
                  </span>
                  .
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setApplicationSubmitted(false);
                      setApplicationModalOpen(false);
                    }}
                    className="px-5 py-2.5 text-xs font-bold rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  >
                    Return to Programs Hub
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={appForm.fullName}
                      onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                      placeholder="e.g. Brenda Chebet"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={appForm.email}
                      onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                      placeholder="brenda@gmail.com"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      Kenyan Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={appForm.phone}
                      onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      placeholder="+254 712 345 678"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      Home County *
                    </label>
                    <select
                      value={appForm.county}
                      onChange={(e) => setAppForm({ ...appForm, county: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                    >
                      <option value="Nairobi">Nairobi</option>
                      <option value="Nakuru">Nakuru</option>
                      <option value="Kisumu">Kisumu</option>
                      <option value="Uasin Gishu (Eldoret)">Uasin Gishu (Eldoret)</option>
                      <option value="Mombasa">Mombasa</option>
                      <option value="Machakos">Machakos</option>
                      <option value="Other County">Other Kenyan County</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Select Track *
                  </label>
                  <select
                    value={appForm.programTrack}
                    onChange={(e) => setAppForm({ ...appForm, programTrack: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                  >
                    <option value="Summer Intensive Program">Track 1: Summer Intensive Engineering Program</option>
                    <option value="Self-Guided Online Training">Track 2: Self-Guided Online Hybrid Training</option>
                    <option value="Agri-Tech & Climate Systems Lab">Track 3: Agri-Tech & Solar IoT Lab</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Brief Statement of Motivation *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={appForm.motivation}
                    onChange={(e) => setAppForm({ ...appForm, motivation: e.target.value })}
                    placeholder="Tell us what problem in your community or in technology you want to solve..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className={`w-full py-3 px-4 text-xs font-bold rounded-lg shadow-sm font-display-jakarta ${accentBtn}`}
                  >
                    Submit 2026 Candidate Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
