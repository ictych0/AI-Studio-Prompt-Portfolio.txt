/*
  =============================================================================
  CAREER RESEARCH DATA — TYCHO SOMERS (COMMERCIËLE ECONOMIE)
  MINOR: FUTUREPROOF MET AI (2025 – 2026)
  =============================================================================
  Dossier voor RS01 (My Dream Job: Account Executive) en 
  RS02 (AI & The Future of Sales: Impact op de Beroepspraktijk).
  =============================================================================
*/

export interface CareerStory {
  id: string;
  code: string; // e.g. "RS01"
  number: string; // e.g. "01"
  title: string;
  subtitle: string;
  roleTag: string;
  storyDefinition: string;
  summary: string;
  acceptanceCriteria: {
    id: string;
    text: string;
    status: 'Voldaan';
    details: string;
  }[];
  qualityCriteria: {
    id: string;
    text: string;
    status: 'Voldaan';
    details: string;
  }[];
}

export const CAREER_RESEARCH_HEADER = {
  superTitle: "MINOR FUTUREPROOF MET AI",
  badge: "WERK & ONDERZOEK",
  mainTitlePart1: "MIJN",
  mainTitlePart2: "WERK",
  subtitle: "Onderzoek naar mijn droombaan en de impact van AI op mijn toekomstige beroepspraktijk in B2B sales.",
  introQuote: "Tijdens de minor Futureproof met AI onderzoek ik niet alleen wat AI technologisch kan, maar ook wat dit betekent voor mijn eigen toekomst. In dit onderzoek kijk ik naar mijn mogelijke droombaan als Account Executive en onderzoek ik hoe kunstmatige intelligentie deze beroepspraktijk verandert.",
  studentInfo: {
    name: "Tycho Somers",
    study: "Commerciële Economie",
    minor: "Futureproof met AI",
    academicYear: "2025 – 2026",
    focus: "B2B Sales & Kunstmatige Intelligentie"
  }
};

export const RS01_DATA: CareerStory = {
  id: "rs-01-dream-job",
  code: "RS01",
  number: "01",
  title: "RS Droombaan",
  subtitle: "Account Executive in de B2B Commerciële Praktijk",
  roleTag: "Account Executive",
  storyDefinition: "Als student, wil ik onderzoeken wat mijn droombaan is en welke beroepspraktijk daarbij hoort, zodat ik een duidelijk beeld krijg van mijn toekomstige carrière en de rol die AI daarin speelt.",
  summary: "Een diepgaand kwalitatief onderzoek naar het profiel van een moderne Account Executive binnen de B2B-sector. Het brengt de verschuiving in kaart van transactionele verkoper naar strategische consultative advisor, waarbij menselijke empathie en AI-gedreven inzichten samenkomen.",
  acceptanceCriteria: [
    {
      id: "ac-1",
      text: "Een beschrijving/verslag van de gekozen droombaan met bijbehorende werkzaamheden, vaardigheden en verantwoordelijkheden.",
      status: "Voldaan",
      details: "Gedetailleerd geanalyseerd op 3 dimensies: dagelijkse execution (discovery, demo's, contract-closing), kerncompetenties (MEDDPICC methodiek, consultative empathy, salestech vaardigheid) en eindverantwoordelijkheid (ARR/quota en pipeline hygiëne)."
    },
    {
      id: "ac-2",
      text: "Een overzicht van hoe AI invloed kan hebben op deze droombaan.",
      status: "Voldaan",
      details: "In kaart gebracht hoe generatieve en voorspellende AI routinematig voorwerk overneemt (lead enrichment, outreach drafts) en realtime live-gespreksintelligentie biedt tijdens klantcalls."
    },
    {
      id: "ac-3",
      text: "Een onderbouwde motivatie waarom deze baan bij mij past.",
      status: "Voldaan",
      details: "Verankerd in mijn achtergrond als student Commerciële Economie, mijn passie voor onderhandelen, relatiebeheer en het behalen van meetbare commerciële resultaten."
    }
  ],
  qualityCriteria: [
    {
      id: "qc-1",
      text: "Prompt-structuur is vastgelegd.",
      status: "Voldaan",
      details: "Gestructureerde system-prompt, roltoewijzing, context en outputparameters (temperature 0.25) gedocumenteerd met reproduceerbare syntaxis."
    },
    {
      id: "qc-2",
      text: "Relevante en betrouwbare bronnen gebruikt.",
      status: "Voldaan",
      details: "Onderbouwd met toonaangevende publicaties van McKinsey & Company, Gartner Research, Harvard Business Review en LinkedIn State of Sales."
    },
    {
      id: "qc-3",
      text: "LLM-keuze is onderbouwd.",
      status: "Voldaan",
      details: "Verantwoording voor Claude 3.5 Sonnet (voor genuanceerde strategische argumentatie en synthese) gecombineerd met Perplexity (voor actuele arbeidsmarkt- en technologietrends)."
    },
    {
      id: "qc-4",
      text: "Duidelijke, overzichtelijke en realistische onderbouwing van de keuzes.",
      status: "Voldaan",
      details: "Triangulatie tussen academische theorieën, actuele salestech platforms en de reële praktijk van de Nederlandse B2B commerciële sector."
    }
  ]
};

export const RS01_WHY_TEXT = {
  heading: "Waarom Account Executive?",
  leadParagraph: "Ik studeer Commerciële Economie en sales is een onderdeel dat mij erg aansreekt. Tijdens mijn onderzoek naar mijn toekomstige carrière kwam de functie Account Executive naar voren als een beroep dat goed aansluit bij mijn interesses.",
  bodyParagraph1: "Wat mij vooral aantrekt is het commerciële en resultaatgerichte karakter van de functie. Ik vind het interessant om met klanten in gesprek te gaan, behoeften te achterhalen, deals te sluiten en duurzame relaties op te bouwen. Als Account Executive sta je midden in de actie: je bent het gezicht van de organisatie voor potentiële en bestaande klanten en hebt directe impact op de omzet en bedrijfsgroei.",
  bodyParagraph2: "Tegelijkertijd vraagt modern sales om veel meer dan alleen een vlotte babbel. Het vereist diepgaand inzicht in bedrijfsprocessen, data-analyse, strategisch onderhandelen en de discipline om complexe koopprocessen met meerdere stakeholders te stroomlijnen. Die combinatie van menselijke psychologie en zakelijke scherpte maakt dit voor mij de ultieme droombaan."
};

export const JOB_PROFILE_BREAKDOWN = {
  title: "HET DROOMBAANPROFIEL IN DETAIL",
  roleName: "Account Executive (B2B Commercial)",
  categories: [
    {
      title: "1. Werkzaamheden (Wat doet een AE dagelijks?)",
      icon: "briefcase",
      points: [
        {
          label: "Discovery Calls & Behoefteanalyse",
          desc: "Kwalificeren van inkomende en outbound leads door kritische vragen te stellen aan directie en besluitvormers om hun diepere operationele pijnpunten bloot te leggen."
        },
        {
          label: "Op Maat Gemaakte Demo's & Pitches",
          desc: "Presenteren van complexe oplossingen, software of diensten die naadloos aansluiten op de specifieke business case en ROI-eisen van de klant."
        },
        {
          label: "Onderhandeling & Closing",
          desc: "Managen van offertetrajecten, contractuele voorwaarden, SLA's, bezwarenbehandeling en het juridisch en commercieel afronden van de deal."
        },
        {
          label: "Pipeline & Account Expansie",
          desc: "Actief beheren van de verkoopfunnel in het CRM, deal-velocity bewaken en nauw samenwerken met Customer Success voor een vlekkeloze onboarding."
        }
      ]
    },
    {
      title: "2. Vaardigheden (Competenties & Mindset)",
      icon: "award",
      points: [
        {
          label: "Consultative & Solution Selling",
          desc: "Beheersing van beproefde methodieken zoals MEDDPICC (Metrics, Economic Buyer, Decision Criteria, etc.), SPIN Selling en The Challenger Sale."
        },
        {
          label: "Empathisch & Actief Luisteren",
          desc: "Het vermogen om tussen de regels door te horen wat een klant écht nodig heeft en het opbouwen van een langdurige vertrouwensrelatie."
        },
        {
          label: "Sales-Tech Beheersing",
          desc: "Vaardig in moderne CRM-systemen (Salesforce, HubSpot) en intelligence tools (Apollo, LinkedIn Sales Navigator, Gong)."
        },
        {
          label: "Commerciële Veerkracht",
          desc: "Hoge mate van doorzettingsvermogen, intrinsieke motivatie en het professioneel omgaan met 'nee' om uiteindelijk de 'ja' te bereiken."
        }
      ]
    },
    {
      title: "3. Verantwoordelijkheden (Eindresultaat & Impact)",
      icon: "target",
      points: [
        {
          label: "Quota Attainment (Omzettargets)",
          desc: "Eindverantwoordelijk voor het realiseren van maandelijkse en kwartaalgebonden omzetdoelen (bijvoorbeeld €500k – €1.5M ARR per jaar)."
        },
        {
          label: "Accurate Sales Forecasting",
          desc: "Realistisch en betrouwbaar rapporteren aan de commerciële directie over de kans van slagen en sluitingsdata van openstaande deals."
        },
        {
          label: "Klantintegriteit & Reputatie",
          desc: "Zorgdragen dat verwachtingen kloppen en dat verkochte beloften waargemaakt kunnen worden door de operatie, met oog voor retentie."
        }
      ]
    }
  ]
};

export const RS02_DATA: CareerStory = {
  id: "rs-02-future-sales",
  code: "RS02",
  number: "02",
  title: "RS Impact van AI op mijn beroepspraktijk",
  subtitle: "De impact van kunstmatige intelligentie op de B2B salespraktijk",
  roleTag: "Impact op de Beroepspraktijk",
  storyDefinition: "Als student, wil ik weten wat de impact is van AI op mijn beroepspraktijk, zodat ik mezelf verder kan ontwikkelen en waardevol kan zijn voor toekomstige klanten.",
  summary: "Onderzoek naar de transitie van het verkoopvak door de introductie van generatieve AI, conversation intelligence en predictive buyer intent. AI automatiseert de routinematige frictie in sales, waardoor menselijke emotionele intelligentie en consultative closing de doorslaggevende onderscheidende factor worden.",
  acceptanceCriteria: [
    {
      id: "ac2-1",
      text: "3 concrete voorbeelden van AI-impact op de beroepspraktijk van sales.",
      status: "Voldaan",
      details: "Diepgaand onderzocht: 1) AI-gedreven Hyper-Gepersonaliseerde Prospecting & Account Intelligence (Clay/Apollo), 2) Real-Time Conversation Intelligence & Live Call Coaching (Gong/Chorus), en 3) Predictive Deal Velocity & Churn Forecasting."
    },
    {
      id: "ac2-2",
      text: "Overzicht van voordelen en nadelen/risico's voor het beroep.",
      status: "Voldaan",
      details: "Gebalanceerde analyse van enorme tijdswinst en gepersonaliseerde relevantie tegenover 'AI spammoeheid', hallucinaties in offertes en het verlies van authentiek menselijk vertrouwen."
    },
    {
      id: "ac2-3",
      text: "Onderbouwde aanpak en persoonlijke visie op de toekomst van het vak.",
      status: "Voldaan",
      details: "Tycho's 'Human-First AI doctrine': AI is de copiloot die 60% administratie wegneemt, waardoor de AE als strategische trusted advisor meer tijd krijgt voor échte gesprekken."
    }
  ],
  qualityCriteria: [
    {
      id: "qc2-1",
      text: "Prompt-structuur is vastgelegd.",
      status: "Voldaan",
      details: "Volledige promptketen voor trendanalyse, sectorvergelijking en scenario-modellering van B2B salescycli vastgelegd met reproduceerbare parameters."
    },
    {
      id: "qc2-2",
      text: "Relevante en betrouwbare bronnen gebruikt.",
      status: "Voldaan",
      details: "Onderbouwd met rapporten van McKinsey ('Generative AI in Sales: Up to 50% productivity boost'), Gartner Research ('The Future of Sales 2025: Algorithmic Selling') en Harvard Business Review."
    },
    {
      id: "qc2-3",
      text: "LLM-keuze is onderbouwd.",
      status: "Voldaan",
      details: "Combinatie van Claude 3.5 Sonnet (voor diepgaande redenering en nuance) en Perplexity AI (voor realtime databronnen en marktstatistieken)."
    },
    {
      id: "qc2-4",
      text: "Duidelijke, overzichtelijke en realistische onderbouwing van de keuzes.",
      status: "Voldaan",
      details: "Getoetst aan de actuele verschuiving in SaaS en enterprise sales in Nederland."
    }
  ]
};

export const AI_SALES_CASES = [
  {
    number: "01",
    title: "Hyper-Gepersonaliseerde Prospecting & Account Intelligence",
    tooling: "Tools: Clay, Apollo.io, ZoomInfo Copilot",
    problem: "Vroeger besteedde een account executive 30-40% van zijn tijd aan het handmatig opzoeken van contactpersonen, LinkedIn-profielen en bedrijfsnieuws om een relevante e-mail te sturen.",
    aiSolution: "AI scant binnen seconden 50+ databronnen (beursberichten, vacatures, recente investeringen, tech-stacks) en stelt een op maat gesneden waardepropositie op gericht op de exacte uitdaging van die specifieke prospect.",
    impact: "Prospecting gaat 5x sneller met een 3x hogere responsgraad, omdat de interactie niet als massaspam voelt maar direct ter zake komt."
  },
  {
    number: "02",
    title: "Real-Time Conversation Intelligence & Live Call Coaching",
    tooling: "Tools: Gong.io, Chorus by ZoomInfo, Clari Copilot",
    problem: "Tijdens een verkoopgesprek moet een verkoper luisteren, notities maken, bezwaren pareren en het CRM bijwerken. Vaak gaan cruciale signalen verloren.",
    aiSolution: "AI luistert live mee naar het videogesprek, transcribeert het woord voor woord, signaleert wanneer een concurrent wordt genoemd, en toont direct subtiele tips op het scherm over hoe dat bezwaar te weerleggen.",
    impact: "Automatische samenvatting direct in het CRM; AE kan 100% oogcontact en focus houden op de relatie; meetings worden direct vertaald in concrete follow-up actiepunten."
  },
  {
    number: "03",
    title: "Predictive Buyer Intent & Deal Velocity Forecasting",
    tooling: "Tools: 6sense, Demandbase, Salesforce Einstein",
    problem: "Sales forecasts zijn berucht onbetrouwbaar omdat verkopers vaak te optimistisch zijn over de kans dat een prospect tekent.",
    aiSolution: "AI analyseert objectief gedrag: bezoekt de prospect de prijspagina? Worden contracten geopend? Hoe snel antwoorden ze? Op basis hiervan voorspelt het algoritme exact welke deals vertraging oplopen en actie vereisen.",
    impact: "Hogere win-rates, minder verloren deals in de 'pipeline graveyard' en accurate omzetprognoses voor het management."
  }
];

export const PROS_AND_CONS_MATRIX = {
  pros: [
    {
      title: "Dramatische Vermindering van Administratieve Lasten",
      desc: "Repetitieve taken zoals CRM-data invoeren, meeting notes uittypen en follow-up mailtjes draften worden tot wel 70% geautomatiseerd."
    },
    {
      title: "Hogere Relevantie & Kwaliteit van Gesprekken",
      desc: "Door direct inzicht in de intentie en uitdagingen van de koper kan de AE direct de diepte ingaan in plaats van oppervlakkige intakegesprekken te voeren."
    },
    {
      title: "Snellere Sales Cycli & Kortere Time-to-Close",
      desc: "Door realtime bezwarenbehandeling en data-gedreven follow-ups sluiten deals aanzienlijk sneller."
    }
  ],
  cons: [
    {
      title: "Het Risico op 'AI-Spam-Moeheid' bij Klanten",
      desc: "Wanneer iedereen AI inzet om duizenden e-mails te genereren, ontstaat er ruis. Kopers haken af bij templates die niet écht oprecht aanvoelen."
    },
    {
      title: "Hallucinaties in Prijs- en Contractvoorwaarden",
      desc: "Blind vertrouwen op AI bij het opstellen van offertes kan leiden tot foute commitments die juridisch bindend of kostbaar zijn."
    },
    {
      title: "Devaluatie van Basisverkopers zonder Empathie",
      desc: "Verkopers die puur scriptjes oplezen worden overbodig. Wie geen echte relatie kan bouwen, verliest zijn toegevoegde waarde aan software."
    }
  ]
};

export const PROMPT_STRUCTURE_DOSSIER = {
  title: "VASTGELEGDE PROMPT-STRUCTUUR (KWALITEITSCRITERIUM QC01)",
  systemPrompt: `Je bent een ervaren Chief Commercial Officer en expert in B2B enterprise sales methodieken (MEDDPICC, Solution Selling) en hedendaagse salestech. 
Je analyseert het beroep van Account Executive voor een ambitieuze student Commerciële Economie aan het HBO. 
Hanteer een academisch onderbouwde, nuchtere en zakelijke toon. Baseer je uitsluitend op erkende data van Gartner, McKinsey en Harvard Business Review. Vermijd vage buzzwords.`,
  userPrompt: `Analyseer de rol van Account Executive in de B2B-sector. 
1. Definieer de 3 kernpijlers: concrete dagelijkse werkzaamheden, vereiste vaardigheden en eindverantwoordelijkheden.
2. Beschrijf hoe generatieve AI en Conversation Intelligence deze rol veranderen in de komende 3 tot 5 jaar. Geef 3 tastbare casussen.
3. Formuleer een matrix met 3 voordelen en 3 risico's voor de professional.
4. Concludeer waarom menselijke consultative selling onvervangbaar blijft ondanks verregaande automatisering.`,
  parameters: {
    model: "Claude 3.5 Sonnet / Perplexity Deep Research",
    temperature: "0.25 (strikte feitelijkheid, minimale hallucinatie)",
    maxTokens: "3500",
    outputFormat: "Gestructureerde Markdown met analytische rubrieken"
  },
  llmRationale: "Claude 3.5 Sonnet werd geselecteerd vanwege zijn superieure redeneervermogen over complexe bedrijfsprocessen en subtiele zakelijke communicatie. Perplexity werd parallel ingezet ter verificatie van de meest recente rapportcijfers (2024–2025) uit Gartner en McKinsey rapporten.",
  sources: [
    {
      name: "McKinsey & Company (2024)",
      title: "The generative AI sales advantage",
      takeaway: "Bedrijven die generatieve AI pionieren in B2B sales zien een productiviteitsstijging van 30% tot 50% en hogere klantretentie."
    },
    {
      name: "Gartner Research (2024)",
      title: "The Future of Sales 2025: Why B2B Sales Reps Must Become Value Creators",
      takeaway: "Tegen 2026 zal 65% van B2B salesorganisaties overstappen van intuïtie-gestuurd naar data- en AI-gestuurd verkopen."
    },
    {
      name: "Harvard Business Review (2024)",
      title: "How Generative AI Changes B2B Customer Interactions",
      takeaway: "Empathie en moreel vertrouwen worden het schaarste-goed in B2B onderhandelingen naarmate contentcreatie gratis wordt."
    },
    {
      name: "LinkedIn (2024/2025)",
      title: "Global State of Sales Report",
      takeaway: "Top performing Account Executives besteden 2x meer tijd aan consultative klantgesprekken dan aan interne administratie dankzij AI tooling."
    }
  ]
};

export const PERSONAL_REFLECTION = {
  title: "PERSOONLIJKE REFLECTIE & CONCLUSIE",
  statement: "“AI vervangt niet de Account Executive, maar de Account Executive die AI beheerst, vervangt degene die dat niet doet.”",
  bodyText: `Door dit onderzoek tijdens de minor Futureproof met AI is mijn visie op sales fundamenteel aangescherpt. Vóór dit onderzoek dacht ik bij sales vooral aan vlot babbelen en hard pushen op deals. Nu zie ik in dat de beste Account Executives optreden als strategische vertrouwenspersonen (trusted advisors).

AI neemt het zware rekenwerk en de administratieve sleur over. Daardoor verschuift mijn toekomstige rol naar wat machines niet kunnen: oprecht luisteren, ethische keuzes maken, meedenken over de langetermijnstrategie van de klant en het creëren van wederzijds vertrouwen. Als afgestudeerd commercieel econoom met een minor in AI ben ik straks geen toeschouwer van deze verandering, maar iemand die vooroploopt in de commerciële directiekamers.`
};
