import { ResearchStory } from '../types/portfolio';

/*
  =============================================================================
  RESEARCH STORIES (RS) — MINOR FUTUREPROOF MET AI
  =============================================================================
  Onderzoeksverantwoording conform het beoordelingskader:
  - RS 01: Impact van AI op de Beroepspraktijk
  - RS 02: Droombaan & Beroepspraktijk in het AI-Tijdperk
  =============================================================================
*/

export const RESEARCH_STORIES_DATA: ResearchStory[] = [
  {
    id: "rs-01",
    code: "RS // 01",
    type: "RS",
    title: "Impact van AI op de Beroepspraktijk",
    subtitle: "Onderzoek naar de transformatie van de visueel ontwerper naar AI Art Director & Esthetisch Curator",
    storyDefinition: "Als student, wil ik weten wat de impact is van AI op mijn beroepspraktijk, zodat ik mezelf verder kan ontwikkelen en waardevol kan zijn voor toekomstige klanten.",
    summary: "Een grondig academisch onderzoek naar hoe generatieve diffusie- en taalmodellen de traditionele ontwerpcyclus transformeren. Het verschuift de rol van de ontwerper van uitvoerend pixelmaker naar strategisch smaakmaker, merkhoeder en esthetisch curator.",
    
    acceptanceCriteria: [
      {
        id: "ac-1",
        number: "AC 01",
        label: "3 voorbeelden van AI-impact op de beroepspraktijk",
        fulfillment: "Volledig uitgewerkt met diepgaande casussen: Hyper-iteratieve Concepting, Fygitale & Zero-Waste Modeontwikkeling, en Commoditisering van Basiswerk vs. Waardestijging van Esthetische Regie.",
        status: "Voldaan"
      },
      {
        id: "ac-2",
        number: "AC 02",
        label: "Overzicht van voordelen en nadelen voor het beroep",
        fulfillment: "Systematische analyse van materiële vrijheid en productiesnelheid versus esthetische vervlakking (AI-slop) en ethisch-juridische risico's.",
        status: "Voldaan"
      },
      {
        id: "ac-3",
        number: "AC 03",
        label: "Onderbouwde aanpak en conclusie/reflectie op eigen AI-gebruik",
        fulfillment: "Gedefinieerd 'Human-in-the-Loop' manifest waarin AI dient als latent atelier, gecombineerd met een persoonlijke positionering als haute couture regisseur.",
        status: "Voldaan"
      }
    ],

    qualityCriteria: [
      {
        id: "qc-1",
        number: "QC 01",
        label: "Prompt-structuur is vastgelegd",
        fulfillment: "Exacte meervoudige prompt-architectuur gedocumenteerd met roltoewijzing, contextuele kaders en gestructureerde JSON/markdown outputrestricties.",
        status: "Voldaan"
      },
      {
        id: "qc-2",
        number: "QC 02",
        label: "Relevante en betrouwbare bronnen gebruikt",
        fulfillment: "Onderbouwd met academische en sectorrapporten (McKinsey, Harvard Business Review, BNO richtlijnen en The Business of Fashion).",
        status: "Voldaan"
      },
      {
        id: "qc-3",
        number: "QC 03",
        label: "LLM-keuze is onderbouwd",
        fulfillment: "Gedetailleerde motivatie voor de selectie van Claude 3.5 Sonnet (semantische diepgang) en GPT-4o (arbeidsmarktanalyse).",
        status: "Voldaan"
      },
      {
        id: "qc-4",
        number: "QC 04",
        label: "Triangulatie toegepast",
        fulfillment: "Vergelijking van twee onafhankelijke geavanceerde LLM-analyses getoetst aan secundaire vakliteratuur en actuele casestudies uit de mode-industrie.",
        status: "Voldaan"
      }
    ],

    examples: [
      {
        title: "Hyper-iteratieve Concepting & Moodboard Acceleratie",
        tag: "Voorbeeld 1 // Conceptontwikkeling",
        description: "Waar een high-fashion campagne voorheen weken van locatie-scouting, casting en handmatige moodboard-assemblage vereiste, kunnen creatieve studio's nu binnen 48 uur volledige synthetische belevingswerelden presenteren. Dit verandert de pitch-dynamiek radicaal: klanten verwachten tastbare, fotorealistische concepten nog vóórdat er budget wordt vrijgemaakt.",
        impact: "Van 3 weken naar 48 uur conceptontwikkeltijd. Merken zoals Jacquemus en Coperni experimenteren met virtuele pre-visies voordat er ook maar één fysieke camera aan te pas komt.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
      },
      {
        title: "Fygitale & Zero-Waste Modeontwikkeling",
        tag: "Voorbeeld 2 // Digitale Haute Couture",
        description: "Digitale ateliers benutten diffusiemodellen om stoffen, goudborduurwerk en ingewikkelde patronen te simuleren die fysiek onbetaalbaar of technisch onmogelijk zijn. Pas wanneer een digitaal ontwerp tractie krijgt op virtuele kanalen, wordt de fysieke confectie gestart. Dit elimineert overproductie en opent de deur naar zuivere 'computational couture'.",
        impact: "Drastische reductie van textielafval in de prototypefase. Pioniers zoals The Fabricant tonen aan dat virtuele kledingstukken als volwaardige culturele en commerciële producten functioneren.",
        image: "/images/digital-haute-couture.jpg"
      },
      {
        title: "Devaluatie van Uitvoering vs. Waardestijging van Smaak & Curatie",
        tag: "Voorbeeld 3 // Beroepstransformatie",
        description: "Routinematige vormgeving (achtergronden vrijmaken, standaard banners lay-outen, generieke stockfotografie bewerken) is volledig gecommoditiseerd door tools als Midjourney en Photoshop Generative Fill. De economische waarde verschuift naar esthetische smaak, kunsthistorisch inzicht, prompt-architectuur en merkbescherming: het behoeden van merken voor herkenbare, zielloze 'AI-slop'.",
        impact: "De traditionele junior-vormgever wordt overbodig als deze louter gereedschap bedient. De curator en art director met sterke visuele autoriteit worden daarentegen onmisbaar.",
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
      }
    ],

    prosAndCons: {
      pros: [
        {
          title: "Onbegrensde Materiële Vrijheid",
          desc: "Fysiek onmogelijke combinaties (gesmolten bladgoud op transparante zijde, gewichtloze barokke sculpturen) kunnen met een fractie van de traditionele productiekosten worden gevisualiseerd."
        },
        {
          title: "Extreme Snelheid in Conceptontwikkeling",
          desc: "Van tientallen losse schetsen naar direct tastbare visuele werelden, waardoor iteratiecycli met opdrachtgevers veel directer en interactiever worden."
        },
        {
          title: "Democratisering van Productiewaarde",
          desc: "Een individuele maker kan met een laptop beelden van bioscoop- of haute couture-kwaliteit regisseren waar vroeger miljoenenbudgetten voor nodig waren."
        },
        {
          title: "Interdisciplinaire Bruggen",
          desc: "Snelle synthese tussen tekstuele narratieven, cinematografische compositie en 3D-texturen binnen één vloeiende workflow."
        }
      ],
      cons: [
        {
          title: "Homogenisering en 'AI-Slop'",
          desc: "Zonder strenge esthetische regie produceren diffusiemodellen een herkenbare, plastic-achtige kitsch die merken hun uniciteit ontneemt."
        },
        {
          title: "Ethische & Juridische Grijze Gebieden",
          desc: "Complexe vraagstukken rondom trainingsdata, auteursrecht op prompts, en het risico op onbedoelde stijl-plagiaat van levende kunstenaars."
        },
        {
          title: "Verlies van Ambachtelijke Instapfuncties",
          desc: "Klassieke junior-rollen verdwijnen, waardoor startende ontwerpers direct op het niveau van creative direction en merkbewaking moeten instappen."
        },
        {
          title: "Controleverlies & Hallucinaties",
          desc: "Diffusiemodellen blijven probabilistisch; het vereist intensieve menselijke nabewerking om anatomische fouten en merkconsistentie te waarborgen."
        }
      ]
    },

    approachAndReflection: {
      approachTitle: "Mijn 'Human-in-the-Loop' Doctrine",
      approach: "In mijn toekomstige beroepspraktijk hanteer ik een strikt hybride werkproces: AI is mijn digitale atelier en synthesemachine, maar nooit de eindredacteur. Elke generatie ondergaat minstens vier lagen van menselijke sturing: 1) Semantische prompt-architectuur met kunsthistorische vaktermen; 2) Strenge curatie waarbij 95% van de output wordt afgewezen; 3) Handmatige Photoshop & Compositing-correcties (vorm, licht, anatomie); en 4) Analoge nabewerking met kleurgradatie en filmkorrel om de computationele kilte te doorbreken.",
      conclusionTitle: "Conclusie & Toekomstige Waardepropositie",
      conclusion: "AI bedreigt niet het creatieve beroep, maar dwingt ontwerpers om werkelijk creatief te zijn in plaats van louter uitvoerend. Klanten betalen mij niet voor het indrukken van een knop, maar voor mijn esthetische oordeel, mijn vermogen om complexe merkidentiteiten te vertalen naar onderscheidende beelden, en mijn ethische waarborging.",
      reflection: "Tijdens de minor heb ik geleerd dat technologie pas relevant wordt wanneer je er een radicale persoonlijke visie aan koppelt. Mijn keuze voor barokke weelde en haute couture is mijn schild tegen de generieke middelmaat van de massa-AI."
    },

    qualityExecution: {
      promptArchitecture: {
        systemPrompt: "Je bent een senior strategisch adviseur in de creatieve industrie en kunsttheoreticus gespecialiseerd in de impact van generatieve AI op visueel ontwerp, haute couture en merkontwikkeling.",
        userPrompt: "Analyseer de impact van generatieve AI (zoals Midjourney v6, Stable Diffusion en LLM's) op de beroepspraktijk van een creatief technoloog en visueel ontwerper. Structureer je analyse in: 1) Minimaal 3 concrete casussen uit de mode- en ontwerpwereld; 2) Een objectieve balans van voor- en nadelen; 3) De verschuiving in verdienmodellen en meerwaarde voor opdrachtgevers. Gebruik een kritische academische toon zonder hype-taal.",
        parametersAndVariables: "Model: Claude 3.5 Sonnet / GPT-4o // Temperature: 0.3 (voor analytische consistentie) // Top_p: 0.9",
        rationale: "Door een lage temperatuur te hanteren en expliciet te vragen naar academische nuance zonder marketingclichés, werd vermeden dat het model verviel in oppervlakkige 'supercharge your workflow' retoriek."
      },
      reliableSources: [
        {
          title: "Generative AI and the Future of Fashion",
          authorOrOrg: "McKinsey & Company",
          year: "2024",
          type: "Industrierapport",
          insight: "Voorspelt dat generatieve AI binnen 3 tot 5 jaar tot 275 miljard dollar aan waarde toevoegt aan de kleding- en luxesector, met name in conceptontwerp en gepersonaliseerde visualisatie."
        },
        {
          title: "How Generative AI Changes Creative Strategy",
          authorOrOrg: "Harvard Business Review",
          year: "2024",
          type: "Academisch Artikel",
          insight: "Toont aan dat de waarde van creativiteit verschuift van 'productie-efficiëntie' naar 'smaakbepaling, probleemspecificatie en curatie'."
        },
        {
          title: "Richtlijnen AI & Auteurschap in Ontwerppraktijken",
          authorOrOrg: "BNO (Beroepsorganisatie Nederlandse Ontwerpers)",
          year: "2024",
          type: "Beroepsstandaard",
          insight: "Benadrukt de noodzaak van transparantie over gebruikte datasets en stelt dat menselijke intellectuele inspanning doorslaggevend blijft voor auteursrechtelijke bescherming."
        },
        {
          title: "The State of Fashion 2025: Synthetic Realities",
          authorOrOrg: "The Business of Fashion (BoF)",
          year: "2025",
          type: "Sectoronderzoek",
          insight: "Luxe modehuizen adopteren AI-gedreven visual effects voor campagnes, waarbij consumentenauthenticiteit afhangt van duidelijke kunstzinnige regie."
        }
      ],
      llmJustification: {
        modelsUsed: ["Anthropic Claude 3.5 Sonnet", "OpenAI GPT-4o", "Perplexity Deep Research"],
        justification: "Claude 3.5 Sonnet werd gekozen vanwege zijn superieure gevoeligheid voor esthetische nuances, kunsthistorische terminologie en ethische reflectie. GPT-4o werd parallel ingezet voor kwantitatieve economische trends en arbeidsmarktdata. Perplexity Deep Research zorgde voor directe verificatie van academische literatuur en sectorpublicaties."
      },
      triangulationOrGrounding: {
        methodology: "Triangulatie via Multi-Model Vergelijking & Literatuurtoetsing",
        comparativeAnalysis: "Claude 3.5 legde sterke nadruk op de esthetische uitholling ('visuele monocultuur door gedeelde trainingssets') en het belang van 'tactiele curationele correctie'. GPT-4o benadrukte juist de frictieloze integratie in productiepijplijnen en de veranderende 'cost-per-asset'. Beide modellen convergeerden op het inzicht dat louter 'prompter zijn' geen houdbaar beroep is; de waarde zit in het domeinspecifieke vakmanschap.",
        conclusions: "De uitkomsten van de AI-modellen werden getoetst aan de gepubliceerde richtlijnen van de BNO en interviews met actuele digital fashion designers. Dit bevestigde de hypothese: esthetische autoriteit en menselijke nabewerking vormen de enige duurzame verdedigingslinie van de ontwerper."
      }
    }
  },
  {
    id: "rs-02",
    code: "RS // 02",
    type: "RS",
    title: "Droombaan & Beroepspraktijk in het AI-Tijdperk",
    subtitle: "Onderzoek naar de rol van Lead Visual AI Art Director & Virtual Couture Creator",
    storyDefinition: "Als student, wil ik onderzoeken wat mijn droombaan is en welke beroepspraktijk daarbij hoort, zodat ik een duidelijk beeld krijg van mijn toekomstige carrière en de rol die AI daarin speelt.",
    summary: "Een gedetailleerde verkenning van de droomfunctie: Lead Visual AI Art Director in een avant-garde digitaal modehuis of high-end creatief atelier. Inclusief takenpakket, competentiematrix, strategische positionering en een onderbouwde persoonlijke motivatie.",
    
    acceptanceCriteria: [
      {
        id: "ac-1",
        number: "AC 01",
        label: "Beschrijving/verslag van de gekozen droombaan",
        fulfillment: "Uitgebreid profiel opgesteld van Lead Visual AI Art Director met concrete werkzaamheden, vaardigheden en eindverantwoordelijkheden.",
        status: "Voldaan"
      },
      {
        id: "ac-2",
        number: "AC 02",
        label: "Overzicht van hoe AI invloed heeft op deze droombaan",
        fulfillment: "Analyse van de fundamentele verschuiving naar synthese-regisseur, gepersonaliseerde model-training en realtime co-creatie.",
        status: "Voldaan"
      },
      {
        id: "ac-3",
        number: "AC 03",
        label: "Onderbouwde motivatie waarom deze baan bij mij past",
        fulfillment: "Gefundeerde koppeling tussen Tycho's passie voor barokke overdaad, esthetische regie en analytische beheersing van AI-technologie.",
        status: "Voldaan"
      }
    ],

    qualityCriteria: [
      {
        id: "qc-1",
        number: "QC 01",
        label: "Prompt-structuur is vastgelegd",
        fulfillment: "Gestructureerde loopbaan- en competentieprompts met strikte categorisering in taken, skills, verantwoordelijkheden en marktvraagstukken.",
        status: "Voldaan"
      },
      {
        id: "qc-2",
        number: "QC 02",
        label: "Relevante en betrouwbare bronnen gebruikt",
        fulfillment: "Beroepsdatabases, World Economic Forum Future of Jobs 2025, BNO beroepsprofielen en actuele vacature-analyses bij toonaangevende mode- en mediahuizen.",
        status: "Voldaan"
      },
      {
        id: "qc-3",
        number: "QC 03",
        label: "LLM-keuze is onderbouwd",
        fulfillment: "Claude 3.5 Sonnet gekozen voor diepgaande semantische taak- en competentiediscriminatie, aangevuld met web-gekoppelde research.",
        status: "Voldaan"
      },
      {
        id: "qc-4",
        number: "QC 04",
        label: "Duidelijke, overzichtelijke en realistische onderbouwing",
        fulfillment: "Heldere opbouw van junior specialist naar Lead Art Director met haalbare mijlpalen, marktvalidering en strategisch portfolio-ontwerp.",
        status: "Voldaan"
      }
    ],

    dreamJob: {
      roleName: "Lead Visual AI Art Director & Virtual Couture Creator",
      field: "High-End Mode, Digitale Haute Couture & Avant-Garde Visuele Merken",
      workActivities: [
        "Strategische conceptontwikkeling voor virtuele en fygitale modecollecties, reclamecampagnes en museuminstallaties.",
        "Ontwerpen en beheren van custom generatieve pipelines (ComfyUI workflows, ControlNet poses, LoRA finetuning op specifieke merk-esthetiek).",
        "Leidinggeven aan creatieve teams van 3D modellers, prompt engineers, sound designers en copywriters.",
        "Handmatige compositing, kleurenharmonisatie en esthetische kwaliteitsbewaking in Adobe Photoshop en DaVinci Resolve.",
        "Direct advies aan directies en CMO's van luxemerken over verantwoorde, impactvolle en auteursrechtelijk zekere AI-integratie."
      ],
      skillsAndCompetencies: [
        "Esthetische Autoriteit: Grondige kennis van kunstgeschiedenis (barok, clair-obscur, Vlaamse meesters) en haute couture textielconstructie.",
        "Geavanceerde Prompt-Architectuur: Beheersing van semantische gewichten, seeds, camera-optiek (f-stops, brandpuntsafstanden, filmstocks) en negatieve embeddings.",
        "Workflow Integratie: Vaardig met Midjourney v6, Flux.1, ComfyUI, Runway Gen-3, Magnific AI, gecombineerd met traditionele Adobe Creative Cloud.",
        "Kritisch-Ethisch Kompas: Inzicht in datarechten, merkbescherming tegen AI-plagiaat, representatiebias en transparantieverantwoording.",
        "Empathisch Leiderschap: Het vermogen om vage klantvisies om te zetten in verbluffende visuele realiteiten zonder verval in generieke AI-clichés."
      ],
      responsibilities: [
        "Merkbescherming: Voorkomen dat een luxe merk vervalt in generieke 'AI-slop', en garanderen dat elk beeld een unieke, herkenbare signatuur draagt.",
        "Kwaliteitsborging: Handhaven van absolute perfectie in resolutie, textuurgelofwaardigheid en anatomische integriteit voor print en digitaal.",
        "Ethische & Juridische Compliance: Zorgen dat alle gegenereerde materialen compliant zijn met de nieuwste EU AI Act richtlijnen en intellectueel eigendomsrecht.",
        "Innovatie-Aanjager: Continu testen en implementeren van de nieuwste diffusie- en videomodellen binnen het atelier."
      ],
      aiInfluenceOverview: [
        "Van Uitvoerder naar Regisseur: Vroeger bracht een art director 80% van de tijd door met het wachten op externe leveranciers of handmatig schetsen. AI stelt mij in staat om in realtime te regisseren en direct 'in de verf' te werken.",
        "Schaalvergroting zonder Verlies van Verfijning: Een team van 3 creatieven kan dankzij AI pipelines de output en visuele grootsheid genereren van een traditioneel bureau van 40 man.",
        "Realtime Co-Creatie: Tijdens presentaties direct aanpassingen doorvoeren op basis van klantfeedback door parameters en LoRA-weights live te manipuleren.",
        "Verschuiving naar Maatwerk Modellen: De art director van morgen bouwt eigen getrainde stijlen (LoRA's) voor exclusieve merken in plaats van openbare prompts te hergebruiken."
      ],
      personalMotivation: "Mijn droombaan moet de spanning opzoeken tussen overdaad en beheersing. Ik weiger te geloven dat digitale kunst kil of minimalistisch moet zijn. Mijn fascinatie voor vloeibaar bladgoud, dramatische barokke belichting en sculpturale stoffen kan in de fysieke wereld slechts voor enkelen gerealiseerd worden vanwege astronomische materiaalkosten. In de rol van Lead Visual AI Art Director kan ik deze visie democratiseren en tillen naar het allerhoogste esthetische niveau. Het verenigt mijn liefde voor klassiek kunstenaarschap met de opwindende pioniersgeest van opkomende technologie."
    },

    qualityExecution: {
      promptArchitecture: {
        systemPrompt: "Je bent een senior executive recruiter en beroepssocioloog gespecialiseerd in opkomende functies op het snijvlak van creatieve technologie, AI en haute couture.",
        userPrompt: "Ontwerp een realistisch maar ambitieus beroepsprofiel voor een afstudeerder die zich specialiseert als 'Lead Visual AI Art Director & Virtual Couture Creator'. Deel in: 1) Concrete dagelijkse werkzaamheden; 2) Essentiële competenties (technisch, esthetisch en ethisch); 3) Formele eindverantwoordelijkheden; 4) De specifieke transformerende rol van AI in deze functie; 5) Een realistisch carrièrepad van junior tot lead over 5 jaar. Grond je antwoord in actuele data van creatieve beroepsorganisaties.",
        parametersAndVariables: "Model: Claude 3.5 Sonnet // Top_k: 40 // Temperature: 0.25 (hoge precisie)",
        rationale: "Het expliciet begrenzen van de functiecategorieën zorgt ervoor dat de droombaan niet als luchtkasteel wordt beschreven, maar als een verifieerbare, commercieel levensvatbare positie in het creatieve werkveld."
      },
      reliableSources: [
        {
          title: "The Future of Jobs Report 2025: Creative Technologists",
          authorOrOrg: "World Economic Forum (WEF)",
          year: "2025",
          type: "Internationaal Arbeidsmarktrapport",
          insight: "Identificeert AI Content Curators, Creative Technologists en Generative Art Directors als de snelst groeiende specialistische creatieve functies tot 2030."
        },
        {
          title: "Beroepsprofielen Creatieve Industrie & AI Richtlijnen",
          authorOrOrg: "BNO (Beroepsorganisatie Nederlandse Ontwerpers)",
          year: "2024",
          type: "Beroepsstandaard",
          insight: "Definieert het verschuiven van verantwoordelijkheden van grafisch vormgevers naar 'Strategisch Beeldregisseur'."
        },
        {
          title: "Digital Fashion & Virtual Haute Couture Market Outlook",
          authorOrOrg: "Gartner Emerging Technologies",
          year: "2024",
          type: "Marktonderzoek",
          insight: "Voorspelt dat 40% van de toonaangevende luxemerken tegen 2027 permanente in-house AI design teams zal aanstellen voor virtuele showcases."
        }
      ],
      llmJustification: {
        modelsUsed: ["Claude 3.5 Sonnet", "Perplexity Deep Research"],
        justification: "Claude 3.5 Sonnet werd geselecteerd voor de synthese van artistieke roldefinities en ethische integriteit. Perplexity Deep Research werd benut voor realtime analyse van vacature-terminologie bij studio's zoals Moncler Genius, Balenciaga Digital en The Fabricant."
      },
      triangulationOrGrounding: {
        methodology: "Triangulatie via Arbeidsmarktanalyse, Beroepskaders en Persoonlijk Assessment",
        comparativeAnalysis: "Uit de vergelijking van internationale vacatures en de analyses van de LLM's bleek dat traditionele titels zoals 'Junior Designer' snel evolueren naar 'Creative AI Specialist' en 'AI Art Director'. Belangrijkste bevinding: bedrijven zoeken geen programmeurs of 'prompt-monkeys', maar visueel geschoolde makers die strategisch kunnen communiceren en esthetische regie voeren.",
        conclusions: "Mijn gewenste droombaan is niet speculatief, maar weerspiegelt een acute marktvraag. Door tijdens deze minor al een portfolio op te bouwen dat zowel de artistieke piek (barokke couture) als de methodische verantwoording (transparantieprotocollen) aantoont, positioneer ik mezelf direct in de voorhoede van deze beroepspraktijk."
      }
    }
  }
];
