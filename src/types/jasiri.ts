export type AccentChoice = 'teal' | 'magenta';

export interface FellowStory {
  id: string;
  name: string;
  role: string;
  location: string;
  program: string;
  cohort: string;
  outcomeMetric: string;
  quote: string;
  fullBio: string;
  imageUrl: string;
}

export interface StrategicPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyMetric: string;
  keyMetricLabel: string;
  focusAreas: string[];
}

export interface ImpactStatistic {
  stat: string;
  label: string;
  context: string;
  indicator: string;
}

export interface InstitutionalPartner {
  name: string;
  category: 'Foundation' | 'Tech Partner' | 'Development Bank' | 'Enterprise';
  initiative: string;
  commitment: string;
}

export interface DesignTokenSpec {
  category: string;
  token: string;
  value: string;
  usage: string;
}
