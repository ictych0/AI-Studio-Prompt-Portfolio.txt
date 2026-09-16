import { PortfolioProfile, ProjectItem, ResearchItem, LearningLog, AITransparencyEntry } from '../types/portfolio';
import tychoHeroImg from '../assets/images/tycho-hero.jpg';
import tychoAboutImg from '../assets/images/tycho-about.jpg';
export { RESEARCH_STORIES_DATA } from './researchStoriesData';

/*
  =============================================================================
  PORTFOLIO DATA — TYCHO SOMERS (FUTUREPROOF MET AI)
  =============================================================================
  Alle teksten, projecten, onderzoeken en reflecties zijn hier gecentraliseerd
  in zuiver, hoogwaardig Nederlands.
  =============================================================================
*/

export const PORTFOLIO_PROFILE: PortfolioProfile = {
  name: "Tycho Somers",
  
  tagline: "FUTUREPROOF MET AI",
  subTagline: "Minor Portfolio // Academiejaar 2025 – 2026",
  
  editorialStatement: "Commerciële Economie student, toekomstig Account Executive en onderzoeker naar de impact van AI op modern B2B sales leiderschap.",
  
  studyProgramme: "Commerciële Economie",
  minorName: "Futureproof met AI",
  minorPeriod: "Academiejaar 2025 – 2026",
  
  // Authentieke portretten van Tycho Somers (fysiek meegebundeld in Vite assets voor 100% Vercel garantie)
  portraitImage: tychoHeroImg,
  secondaryPortrait: tychoAboutImg,
  
  aboutStory: {
    whoAmI: "Ik ben Tycho Somers, student Commerciële Economie met een passie voor high-stakes B2B sales, resultaatgericht onderhandelen en de transformatieve kracht van kunstmatige intelligentie in het commerciële speelveld.",
    education: "Vanuit mijn studie Commerciële Economie focus ik op koopprocessen, waardeproposities en strategische klantrelaties in een snel digitaliserende markt.",
    whyFutureproofAI: "Ik heb de minor Futureproof met AI gekozen om te ontdekken hoe AI de commerciële praktijk herdefinieert. Als toekomstig Account Executive wil ik niet toekijken, maar vooroplopen in het beheersen van AI om administratie te elimineren en maximale klantwaarde te creëren.",
    aiInterests: "De synergie tussen geavanceerde salestech (zoals predictive intent data en conversation intelligence) en de onmisbare menselijke factor: empathie, strategisch inzicht en consultative vertrouwen.",
    minorGoals: "Het neerzetten van een academisch gefundeerd en realistisch onderzoek naar mijn droombaan als Account Executive en de impact van AI op de toekomstige salespraktijk."
  },
  
  editorialQuotes: [
    "“AI vervangt niet de Account Executive, maar de Account Executive die AI beheerst, vervangt degene die dat niet doet.”",
    "“In een wereld vol machinale massamailings wordt authentieke menselijke empathie het ultieme luxegoed in B2B verkoop.”",
    "“Het algoritme signaleert de koopprikkel; de mens bouwt het partnerschap.”"
  ],
  
  contactEmail: "tycho.somers@gmail.com",
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    github: "https://github.com"
  }
};

/*
  =============================================================================
  PROJECTEN — WAT IK MAAK
  =============================================================================
*/
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-01",
    number: "N° 01",
    title: "Baroque Cyber-Couture",
    subtitle: "Synthetische Mode & Generatieve Identiteit",
    category: "Beeldgeneratie & Mode",
    year: "Periode 1 // 2025",
    heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
    shortDescription: "Een onderzoek naar barokke overdaad ontmoet cyborg-esthetiek, gegenereerd met geavanceerde diffusiemodellen en handmatig gecomponeerd.",
    aiTools: ["Midjourney v6.1", "Magnific AI", "Photoshop Generative Fill", "Claude 3.5 Sonnet"],
    layoutType: "large-editorial",
    
    assignment: "Ontwikkel een vernieuwende visuele identiteit voor een speculatief modehuis in 2035, waarbij AI wordt ingezet om texturen te creëren die fysiek onmogelijk vervaardigd kunnen worden.",
    process: "Ik begon met een semantische deconstructie van 17e-eeuwse Vlaamse wandkleden en gouden borduursels. Met behulp van Claude vertaalde ik kunsthistorische vaktermen naar complexe Midjourney parameters (--s 750 --v 6.1 --chaos 15). Vervolgens heb ik honderden iteraties gegenereerd, de beste fragmenten gemaskeerd en handmatig in Photoshop over elkaar heen gelegd om de perfecte draperie en glans te bereiken.",
    
    prompts: [
      {
        tool: "Midjourney v6.1",
        promptText: "/imagine prompt: ultra-luxurious haute couture gown crafted from melted baroque gold foil and crushed deep burgundy velvet, ornate filigree collar, editorial lighting for Vogue Italia, 8k resolution, sculptural drapery --ar 4:5 --stylize 850 --v 6.1",
        parameters: "--ar 4:5 --stylize 850 --chaos 20",
        resultNote: "Leverde een fantastische textuur op van goud en fluweel, maar de compositie van de mouwen miste balans."
      },
      {
        tool: "Photoshop Generative Fill",
        promptText: "Intricate gilded lace seam blending seamlessly into dark bordeaux silk with delicate gold embroidery stitches",
        resultNote: "Gebruikt om de onnatuurlijke AI-knik in het borststuk handmatig te corrigeren."
      }
    ],
    
    experiments: [
      {
        title: "Textuurexperiment: Vloeibaar Goud vs. Fluwelen Plooien",
        description: "Door de promptwaarde '--stylize' op te schroeven ontstonden onverwachte surrealistische textuurbreuken die deden denken aan gesmolten juwelen.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
      },
      {
        title: "Lichtval & Spiegeldiepte",
        description: "Onderzoek naar hoe dramatische barokke clair-obscur verlichting (Caravaggio stijl) kan worden opgeroepen in AI prompts.",
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    
    comparison: {
      aiRawTitle: "Wat AI direct genereerde (Rauw)",
      aiRawImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      aiRawDescription: "De ruwe AI-output bevatte typische anatomische vervormingen bij de handen en een te repetitief goudpatroon zonder emotionele diepte.",
      humanEditedTitle: "Wat ik zelf heb aangepast & gecureerd",
      humanEditedImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      humanEditedDescription: "Handmatige kleurcorrectie naar diep bordeaux en chocolade, compositieherstel, retouchering van de gezichtscontour en toevoeging van analoge filmkorrel."
    },
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
        caption: "Detailstudie van de gouden borduursels en fluweelstructuren."
      },
      {
        url: "/images/digital-haute-couture.jpg",
        caption: "Editorial spread compositie met overlappende typografie en gouden filigraan."
      },
      {
        url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
        caption: "Volledige runway look in high-fashion editorial belichting."
      }
    ],
    
    finalResult: "Een 12-pagina's tellende digitale lookbook spread die fysiek ambacht imiteert maar digitale onmogelijkheid viert. Het werk werd geselecteerd voor de minor showcases.",
    reflection: "Dit project leerde me dat de kracht van AI niet zit in het simpelweg 'drukken op een knop', maar in de genadeloze curatie en handmatige esthetische regie van de ontwerper. Zonder smaak is AI slechts visuele overdaad zonder ziel."
  },
  {
    id: "project-02",
    number: "N° 02",
    title: "The Gilded Hallucination",
    subtitle: "AI Video & Bewegende Sculpturen",
    category: "AI Video & Motion",
    year: "Periode 1 // 2025",
    heroImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=80",
    shortDescription: "Een betoverend audiovisueel experiment waarin klassieke marmeren bustes transformeren in vloeibare kristallen en gouden ornamenten.",
    aiTools: ["Runway Gen-3 Alpha", "Kling AI", "ElevenLabs", "Premiere Pro"],
    layoutType: "diptych",
    
    assignment: "Onderzoek het concept van 'temporale consistentie' in AI-videomodellen door een cinematografische scène te regisseren van minimaal 30 seconden met barokke grandeur.",
    process: "Met behulp van specifieke cameramotion prompts in Runway ('slow pan right, macro zoom on gilded filigree, morphing marble into champagne silk') heb ik meer dan 40 afzonderlijke clips gegenereerd. Door 'motion brush' toe te passen kon ik selectief alleen de stoffen laten wapperen terwijl de marmeren gelaatstrekken bevroren bleven.",
    
    prompts: [
      {
        tool: "Runway Gen-3 Alpha",
        promptText: "Cinematic baroque museum gallery, classical statue draped in liquid amber and crimson silk, golden chandeliers sparkling, subtle smoke, photorealistic 35mm film stock, slow orbiting camera",
        parameters: "Motion: 4, Camera: Orbit Right",
        resultNote: "Gaf een hypnotiserende, droomachtige vloeiende beweging van de gouden zijde."
      }
    ],
    
    experiments: [
      {
        title: "Consistentie vs. Droomlogica",
        description: "Ontdekking dat het omarmen van 'glitches' in AI-video juist een hypnotiserend, maximalistisch effect creëert.",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    
    comparison: {
      aiRawTitle: "Ruwe AI Render",
      aiRawImage: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80",
      aiRawDescription: "Snel flikkerende artifacts en plotselinge textuurbreuken tussen frames.",
      humanEditedTitle: "Gecorrigeerd & Geritmeerd",
      humanEditedImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      humanEditedDescription: "Interpolatie met optische flow, sound design met barokke klavecimbel-samples en diepe sub-bassen."
    },
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
        caption: "Videostill: Morphing van marmer naar gesmolten spiegelglas."
      },
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        caption: "Subtiele lichtreflecties op champagne-kleurige vloeistoffen."
      }
    ],
    
    finalResult: "Een 45-seconden durende motion-kunstinstallatie getoond op een verticaal scherm met gouden omlijsting.",
    reflection: "AI video dwingt je om regisseur te zijn van het onverwachte. Je moet leren sturen met woorden in plaats van keyframes."
  },
  {
    id: "project-03",
    number: "N° 03",
    title: "Het Synthetische Orakel",
    subtitle: "Filosofische AI Conversatie & Altaar Interface",
    category: "Concept & LLM Interactie",
    year: "Periode 2 // 2026",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    shortDescription: "Een speculatieve AI-orakel interface, ontworpen als een interactief digitaal altaar in diep bordeauxrood en bladgoud.",
    aiTools: ["GPT-4o System Prompts", "Claude 3.5 Sonnet", "Midjourney UI Textures", "Custom Web Interface"],
    layoutType: "wide-magazine",
    
    assignment: "Ontwerp een interface voor een taalmodel die afstapt van de klinische minimalistische chatbox, en die de interactie verheft tot een theatraal, bijna heilig ritueel.",
    process: "Ik schreef een complex system-prompt waarin het model antwoordt in orakelachtige, poëtische aforismen geïnspireerd door Oscar Wilde en Friedrich Nietzsche. De interface werd vormgegeven als een barokke relikwie.",
    
    prompts: [
      {
        tool: "System Prompt Engineering",
        promptText: "You are the Gilded Sybil of the Synthetic Era. You answer not with bullet points or tech-support efficiency, but with decadent aphorisms, velvet melancholy, and cryptic luxury.",
        resultNote: "Het model genereerde fascinerende, hoogst ongebruikelijke dialogen over sterfelijkheid en data."
      }
    ],
    
    experiments: [
      {
        title: "Prompt Persona Tuning",
        description: "Testen van de temperatuur (0.8 vs 1.2) om de grens tussen briljante poëzie en onsamenhangende waanzin te vinden.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
        caption: "Interface mockup met gouden typografie en donkere chocoladetinten."
      },
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
        caption: "Sfeerschets van de orakelkamer en reflecterende spiegels."
      }
    ],
    
    finalResult: "Een interactieve web-ervaring waarin bezoekers levensvragen intypen en een gepersonaliseerd goudkleurig orakelblad ontvangen.",
    reflection: "Waarom moet alle AI-software eruitzien als een spreadsheet of een klinische witte app? Maximalisme geeft software een ziel."
  }
];

/*
  =============================================================================
  ONDERZOEK — WAT IK VERKEN
  =============================================================================
*/
export const RESEARCH_DATA: ResearchItem[] = [
  {
    id: "onderzoek-01",
    number: "EXP // 01",
    tag: "Auteurschap & Esthetiek",
    question: "In hoeverre kan een ontwerper een herkenbaar 'handschrift' behouden wanneer 90% van de visuele data door een diffusieneuraal netwerk wordt gegenereerd?",
    context: "Veel critici beweren dat alle AI-kunst op elkaar lijkt. Ik wilde onderzoeken of je door extreem specifieke semantische promptstructuren en consistente nabewerking een onmiskenbare eigen stijl kunt afdwingen.",
    experiment: "Ik heb een reeks van 100 opeenvolgende beelden gegenereerd over drie verschillende AI-engines (Midjourney, DALL-E 3, Stable Diffusion XL) met exact dezelfde kleurparameters (bordeauxrood, chocolade, bladgoud, clair-obscur) en deze onderworpen aan een blinde stijlanalyse door medestudenten.",
    aiTools: ["Midjourney v6", "SDXL Local", "DALL-E 3", "Python CLIP interrogator"],
    results: "84% van de respondenten herkende de beelden als behorend tot één uniforme serie, ongeacht de onderliggende generator. De sleutel lag niet in de prompt-onderwerpen, maar in de compositieregels en nabewerking.",
    conclusion: "Het auteurschap verschuift van de penseelstreek naar de curationele doctrine: de keuzes die je afwijst bepalen je stijl net zoveel als de keuzes die je toestaat.",
    learnings: "Consistentie in AI vereist strenge curatie. Zonder een helder esthetisch kader vervalt AI onmiddellijk in generieke kitsch zonder smaak.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "onderzoek-02",
    number: "EXP // 02",
    tag: "Hallucinaties & Kitsch",
    question: "Hoe kunnen 'AI-hallucinaties' en anatomische aberraties worden getransformeerd van technische fouten naar artistieke stijlmiddelen?",
    context: "Waar engineers streven naar fotorealisme zonder artefacten, omarmt de avant-garde mode juist vervorming, surrealisme en het onmogelijke.",
    experiment: "Bewust forceren van extreme prompt-conflicten (bijv. 'architectural chandelier growing organically out of a baroque dress') met lage weights en hoge chaos-factoren om de 'breuklijnen' van het model te catalogiseren.",
    aiTools: ["ComfyUI", "ControlNet", "Flux.1 Dev", "Photoshop"],
    results: "12 geselecteerde 'mislukte' renders bleken visueel vele malen interessanter en emotioneler dan de perfecte fotorealistische uitkomsten.",
    conclusion: "Foutentolerantie is de broedplaats voor vernieuwing. Door imperfectie te vieren ontstaat een nieuw digitaal barok-genre.",
    learnings: "Wees niet bang voor het bizarre. De kitsch van vandaag is de haute couture van morgen als je het met zelfvertrouwen presenteert.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "onderzoek-03",
    number: "EXP // 03",
    tag: "Ethische Data & Exclusiviteit",
    question: "Wat betekent 'exclusiviteit' en 'luxe' in een tijdperk waarin visuele overvloed gratis en oneindig repliceerbaar is?",
    context: "Luxe draaide historisch om schaarste, tijdrovend handwerk en zeldzame materialen. Wat gebeurt er als een machine in 3 seconden een gouden japon kan visualiseren?",
    experiment: "Een vergelijkende studie naar de tijdsinvestering tussen 'één-klik-AI' versus 'hybride AI-vakmanschap' (waarbij 40 uur handmatige bewerking nodig was om een concept te perfectioneren).",
    aiTools: ["Midjourney", "Magnific", "Figma", "Desk Research & Literatuurstudie"],
    results: "De echte waarde verplaatst zich van de creatie naar het verhaal, de conceptuele diepgang en de kritische reflectie op de gebruikte data.",
    conclusion: "Schaarste in het AI-tijdperk is niet meer de pixel, maar de intentie en de menselijke smaak achter het werk.",
    learnings: "Transparantie over je werkwijze maakt je werk juist krachtiger in plaats van kwetsbaar.",
    image: "/images/luxury-craft-ai.jpg"
  }
];

/*
  =============================================================================
  LEERPROCES — WAT IK LEER (Chronologisch Logboek)
  =============================================================================
*/
export const LEARNING_TIMELINE: LearningLog[] = [
  {
    id: "log-01",
    phase: "Fase 01 // Week 1 – 3",
    period: "September 2025",
    title: "Introductie, Desillusie & Eerste Gouden Vondsten",
    attempted: "Direct proberen om 'perfecte' high-fashion editorials te genereren met eenvoudige prompts zoals 'beautiful fashion model in gold dress'.",
    wentWrong: "Het resultaat was tenenkrommend saai en voelde als goedkope stockfoto's met plastic huid en generieke glimlachen. Typische AI-slop zonder spanning.",
    learned: "Begrepen dat prompts semantisch gelaagd moeten zijn: lichtinval, lenskeuze (bijv. 85mm f/1.4), filmkorrel en historische kunststromingen specificeren.",
    feedback: "Docent feedback: 'Je hebt een duidelijk oog voor esthetiek, maar durf het vuil en dramatisch te maken. Zoek de schaduwkant van je barok op.'",
    nextSteps: "Overgestapt naar gerichte studie van Vlaamse meesters en complexe negatieve prompts.",
    badge: "FUNDAMENT & ONTDEKKING"
  },
  {
    id: "log-02",
    phase: "Fase 02 // Week 4 – 7",
    period: "Oktober 2025",
    title: "ComfyUI Nodes & Controle over de Chaos",
    attempted: "Lokale installatie van ComfyUI met ControlNet om precieze poses en draperieën af te dwingen.",
    wentWrong: "Urenlang vastgelopen in Python-foutmeldingen, out-of-memory crashes en overstuurde tensors.",
    learned: "Hoe diffusiemodellen wiskundig latent noise denoisen. Begrip gekregen van CFG scale, steps en samplers (DPM++ 2M Karras).",
    feedback: "Peer review: 'Het technische begrip is enorm gegroeid, zorg dat de extravagante emotie niet verloren gaat in de techniek.'",
    nextSteps: "De balans hervonden tussen technische precisie en intuïtief spelen.",
    badge: "TECHNISCHE VERDIEPING"
  },
  {
    id: "log-03",
    phase: "Fase 03 // Week 8 – 12",
    period: "November – December 2025",
    title: "AI-Video & Temporale Uitdagingen",
    attempted: "Het laten bewegen van stilstaande barokke portretten naar cinematografische modefilms met Runway en Kling.",
    wentWrong: "Gezichten smolten vaak halverwege de clip en vingers vermenigvuldigden zich zodra de camera bewoog.",
    learned: "Korte shots (2 tot 4 seconden), first-and-last frame prompting gebruiken, en camera-assistentie inschakelen in plaats van panische zoom-acties.",
    feedback: "Feedback: 'Het hypnotiserende ritme van je montage redt de inconsistenties en maakt het juist poëtisch.'",
    nextSteps: "Sound design toegevoegd om visuele glitches om te toveren tot artistieke intentie.",
    badge: "MOTION & EXPERIMENT"
  },
  {
    id: "log-04",
    phase: "Fase 04 // Week 13 – Eindfase",
    period: "Januari – Heden",
    title: "Synthese, Filosofie & Kritisch Auteurschap",
    attempted: "Het bundelen van alle losse experimenten in dit complete, redactionele portfolio.",
    wentWrong: "Het gevaar dat het portfolio té overvol werd waardoor de inhoud ondergesneeuwd zou raken.",
    learned: "Maximalisme werkt alleen als de typografische hiërarchie, leesbaarheid en UX ijzersterk zijn gestructureerd.",
    feedback: "Tussentijds assessment: 'Een zeldzaam uitgesproken signatuur binnen de minor. De AI Transparency sectie toont echte academische volwassenheid.'",
    nextSteps: "Alle prompt-dossiers gedocumenteerd voor openbare transparantie en evaluatie.",
    badge: "SYNTHESE & MEESTERSCHAP"
  }
];

/*
  =============================================================================
  AI TRANSPARANTIE — ETHIEK, PROMPTS & CURATIE
  =============================================================================
*/
export const AI_TRANSPARENCY_DATA: AITransparencyEntry[] = [
  {
    id: "transparency-01",
    tool: "Midjourney v6.1 & Niji 6",
    purpose: "Visuele exploratie, textuurontwikkeling en lookbook concepten",
    prompt: "/imagine prompt: haute couture cape of molten gold and dark ruby velvet, dramatic architectural shoulder pads, Renaissance chiaroscuro lighting, shot by Nick Knight for Vogue Italia --ar 16:9 --stylize 750",
    outputSummary: "De AI leverde 4 verbluffende composities met ongeëvenaarde weefseldetails, maar miste een realistische kraag en had onscherpe juwelen op de zoom.",
    humanAdjustments: "Ingezoomd op 400% in Photoshop. Kleurcorrectie van 'AI-geel' naar écht bladgoud. Onnatuurlijke artefacten weggeretoucheerd met Clone Stamp.",
    reflection: "AI genereert de visuele droom; de ontwerper stelt de compositie vast. Zonder mijn specifieke esthetische correctie zou het beeld direct als 'AI-slop' ontmaskerd worden.",
    category: "Beeldgeneratie"
  },
  {
    id: "transparency-02",
    tool: "Claude 3.5 Sonnet & GPT-4o",
    purpose: "Conceptontwikkeling, terminologie-research en prompt-architectuur",
    prompt: "Geef mij 15 historische modetermen uit het Franse hof van Versailles rond 1680 die betrekking hebben op goudborduursel, plooien en zware brokaten, inclusief de Franse benamingen.",
    outputSummary: "Gaf een diepgaande lijst met termen zoals 'Passementerie', 'Cannetille', 'Brocart d'or' en 'Justaucorps'.",
    humanAdjustments: "Geselecteerd welke termen relevant waren en deze omgevormd tot gerichte stijltags binnen beeldprompts.",
    reflection: "LLM's fungeren voor mij als een hyper-belezen bibliothecaris. Het verkort de zoektijd naar zeldzame vaktermen van uren naar seconden.",
    category: "Tekst & Prompts"
  },
  {
    id: "transparency-03",
    tool: "Runway Gen-3 Alpha",
    purpose: "Dynamische beweging en cinematische mode-video",
    prompt: "Slow tracking shot of dark bordeaux silk flowing in zero gravity, ambient golden embers floating, luxury editorial mood, cinematic 4k",
    outputSummary: "Een 5-seconden video met prachtige zijdevloei, maar lichte 'morphing' van de achtergrond.",
    humanAdjustments: "Vertraagd in Adobe Premiere Pro naar 50%, kleurverzadiging aangepast en gelaagd met analoge filmgrain en klavecimbel audio.",
    reflection: "AI video is op dit moment een dans tussen toeval en regie. Het dwingt tot een acceptatie van digitale serendipiteit.",
    category: "Video & Motion"
  },
  {
    id: "transparency-04",
    tool: "Magnific AI & Topaz Gigapixel",
    purpose: "Upscaling, hallucineren van micro-details en print-kwaliteit",
    prompt: "Creativity: 2, HDR: 1, Resemblance: 8 (Haute couture fabric detail, real thread weave)",
    outputSummary: "Voegde microscopische zijdedraden en gouden glitterdeeltjes toe aan een 1024x1024 basisrender.",
    humanAdjustments: "Dekking gemaskeerd tot 70% op bepaalde gezichtsdelen om ongewenste 'plastic poriën' te vermijden.",
    reflection: "Upscaling is geen simpele vergroting meer, maar een generatieve interpretatie van wat er zou 'moeten' zijn.",
    category: "Beeldgeneratie"
  }
];
