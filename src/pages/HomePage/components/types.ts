export type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

export type ProjectCard = {
  title: string;
  description: string;
  tags: string[];
  goal: string;
  poster: string;
  video: string;
};

export type TrustDeliverable = {
  title: string;
  text: string;
};

export type SegmentOption = {
  value: string;
  title: string;
  hint?: string;
};
