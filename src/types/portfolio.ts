export interface ProjectItem {
  id: string;
  number: string; // e.g. "N° 01"
  title: string;
  subtitle: string;
  category: string;
  year: string;
  heroImage: string;
  shortDescription: string;
  aiTools: string[];
  layoutType: 'large-editorial' | 'diptych' | 'wide-magazine';
  
  // Case study detail content
  assignment: string;
  process: string;
  prompts: {
    tool: string;
    promptText: string;
    parameters?: string;
    resultNote?: string;
  }[];
  experiments: {
    title: string;
    description: string;
    image?: string;
  }[];
  comparison?: {
    aiRawTitle: string;
    aiRawImage: string;
    aiRawDescription: string;
    humanEditedTitle: string;
    humanEditedImage: string;
    humanEditedDescription: string;
  };
  galleryImages: {
    url: string;
    caption: string;
  }[];
  finalResult: string;
  reflection: string;
}

export interface ResearchItem {
  id: string;
  number: string;
  question: string;
  context: string;
  experiment: string;
  aiTools: string[];
  results: string;
  conclusion: string;
  learnings: string;
  image: string;
  tag: string;
}

export interface LearningLog {
  id: string;
  phase: string;
  period: string;
  title: string;
  attempted: string;
  learned: string;
  wentWrong: string;
  feedback: string;
  nextSteps: string;
  badge: string;
}

export interface AITransparencyEntry {
  id: string;
  tool: string;
  purpose: string;
  prompt: string;
  outputSummary: string;
  humanAdjustments: string;
  reflection: string;
  category: 'Text & Prompting' | 'Image Generation' | 'Video & Motion' | 'Code & Workflow' | 'Beeldgeneratie' | 'Tekst & Prompts';
}

export interface CriterionStatus {
  id: string;
  number: string;
  label: string;
  fulfillment: string;
  status: 'Voldaan' | 'In behandeling';
}

export interface ResearchStory {
  id: string;
  code: string; // e.g. "RS // 01"
  type: 'RS';
  title: string;
  subtitle: string;
  storyDefinition: string;
  summary: string;
  
  // Acceptatiecriteria
  acceptanceCriteria: CriterionStatus[];
  
  // Kwaliteitscriteria
  qualityCriteria: CriterionStatus[];

  // Uitwerking van Acceptatiecriteria
  examples?: {
    title: string;
    tag: string;
    description: string;
    impact: string;
    image?: string;
  }[];

  prosAndCons?: {
    pros: { title: string; desc: string }[];
    cons: { title: string; desc: string }[];
  };

  approachAndReflection?: {
    approachTitle: string;
    approach: string;
    conclusionTitle: string;
    conclusion: string;
    reflection: string;
  };

  // For RS 02: Droombaan
  dreamJob?: {
    roleName: string;
    field: string;
    workActivities: string[];
    skillsAndCompetencies: string[];
    responsibilities: string[];
    aiInfluenceOverview: string[];
    personalMotivation: string;
  };

  // Uitwerking van Kwaliteitscriteria
  qualityExecution: {
    promptArchitecture: {
      systemPrompt: string;
      userPrompt: string;
      parametersAndVariables: string;
      rationale: string;
    };
    reliableSources: {
      title: string;
      authorOrOrg: string;
      year: string;
      type: string;
      insight: string;
    }[];
    llmJustification: {
      modelsUsed: string[];
      justification: string;
    };
    triangulationOrGrounding: {
      methodology: string;
      comparativeAnalysis: string;
      conclusions: string;
    };
  };
}

export interface PortfolioProfile {
  name: string;
  tagline: string;
  subTagline: string;
  editorialStatement: string;
  studyProgramme: string;
  minorName: string;
  minorPeriod: string;
  portraitImage: string;
  secondaryPortrait: string;
  aboutStory: {
    whoAmI: string;
    education: string;
    whyFutureproofAI: string;
    aiInterests: string;
    minorGoals: string;
  };
  editorialQuotes: string[];
  contactEmail: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}
