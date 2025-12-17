import { Project, NavItem } from './types';

export const APP_NAME = "ADAN ZUKANCIC";

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Index' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'Philosophy' },
  { id: 'contact', label: 'Initiate' },
];

// OVDJE MIJENJATE PROJEKTE
// Svaki objekt {} unutar uglastih zagrada [] je jedan projekat.
// Za dodavanje novog, kopirajte cijeli blok od { do } i zalijepite ga na dno liste.
// NAPOMENA ZA VIDEO: Ako u 'thumbnail' ili 'gallery' stavite link koji zavrsava na .mp4, 
// stranica ce automatski prikazati video umjesto slike.

export const PROJECTS: Project[] = [
  {
    id: 'graphics-01',
    title: 'Dental Studio Logo Redesign',
    category: 'graphic',
    client: 'Nadin Redžić',
    year: '2025',
    thumbnail: '/projtects/graphic/dental-studio/DSCover.jpg',
    description: "Logo redesign for Dental Studio Dr. Nadin Redžić based in Bosanski Petrovac. The goal of the project was to modernize the existing visual identity while preserving the core concept of the original brand.",
    challenge: "The original logo had a recognizable idea, but suffered from poor legibility and visual inconsistency. The initials integrated into the tooth symbol were difficult to read, especially at smaller sizes and in real-world applications.",
    solution: "The original concept was refined through cleaner lines, improved proportions, and clearer typography. The brand color palette was updated to better communicate trust and professionalism. Horizontal, stacked, and icon-only logo versions were designed, all presented within a single presentation poster.",
    gallery: [
      '/projtects/graphic/dental-studio/DentalStudioLogo.jpg',
      '/projtects/graphic/dental-studio/DentalStudioLogoStacked.jpg',
      '/projtects/graphic/dental-studio/DentalStudioRedesign.jpg',
      '/projtects/graphic/dental-studio/DentalStudioLogoRedesign.jpg',
    ]
  },

   {
    id: 'graphics-02',
    title: 'N1 Television: Pogled s vrha - Logo Design',
    category: 'graphic',
    client: 'N1 Television',
    year: '2025',
    thumbnail: '/projtects/graphic/N1/n1cover.jpg',
    description: "Logo design project for the new TV show Pogled s vrha on N1 television. The task was to develop multiple logo directions aligned with the show’s editorial tone, focusing on themes of perspective, overview, authority, and analysis. The project resulted in a series of conceptually different logo solutions, each interpreting the title through symbols such as vision, horizon, ascent, and typographic structure.",
    challenge: "The main challenge was translating an abstract concept - “a view from above” - into a clear, professional, and broadcast-ready visual identity. The logo needed to work across television, digital platforms, and on-screen bugs, while avoiding literal or overused symbols. Another key challenge was offering multiple distinct directions that stay within the brief, yet provide the client with real choice in tone, symbolism, and visual character.",
    solution: "Several logo concepts were developed, each exploring a different interpretation of the brief. Some solutions use abstract eye and horizon metaphors, others focus on mountain peaks, paths, or purely typographic structures. All concepts were designed with scalability, clarity, and broadcast usability in mind, functioning equally well in color, monochrome, and small-size applications. Together, the concepts provide a flexible set of options that reflect authority, perspective, and editorial credibility - core values of the show Pogled s vrha.",
    link: {
      label: 'View and download the full N1: Pogled s vrha - Logo Design (PDF)',
      url: 'https://drive.google.com/file/d/1W04F_zt2uzukkOkKm08pOtEXvoOUy5mj/view?usp=sharing'
    },
    gallery: [
      '/projtects/graphic/N1/n1.png',
      '/projtects/graphic/N1/n1.2.png',
      '/projtects/graphic/N1/n1.3.png',
      '/projtects/graphic/N1/n1.4.png',
      '/projtects/graphic/N1/n1.5.png',
      '/projtects/graphic/N1/n1.6.png',
      '/projtects/graphic/N1/n1.7.png',
    ]
  },

  {
    id: 'graphics-03',
    title: 'Kreativ Festival Visual Identity',
    category: 'graphic',
    client: 'International Burch University',
    year: '2025',
    thumbnail: '/projtects/graphic/kreativ/KreativCover.jpg',
    description: "Visual identity design for Kreativ Festival, a multidisciplinary creative event held at International Burch University in Sarajevo. The identity captures the raw energy of student creativity through expressive typography, bold color contrasts, and controlled visual chaos.",
    challenge: "The main challenge was to visually represent creativity not as a polished outcome, but as a process - messy, loud, experimental, and unpredictable. The identity needed to speak to a young, creative audience while remaining flexible enough to function across posters, merchandise, social media, and large-format prints.",
    solution: "A dynamic visual system built around the concept of Creative Chaos. Rough brush strokes, high-contrast neon colors, layered textures, and hand-drawn typography were used to create an energetic and rebellious aesthetic. The system was applied consistently across posters, teasers, T-shirts, stickers, social media visuals, accreditations, and a final presentation poster - forming a cohesive yet flexible identity that reflects the spirit of the festival.",
    gallery: [
      '/projtects/graphic/kreativ/KreativMain.jpg',
      '/projtects/graphic/kreativ/KreativTeaser.jpg',
      '/projtects/graphic/kreativ/KreativPoster.jpg',
      '/projtects/graphic/kreativ/KreativPost.png',
    ]
  },

  {
    id: 'graphics-04',
    title: 'Garden of Dreams Visual Identity',
    category: 'graphic',
    client: 'Garden of Dreams',
    year: '2023',
    thumbnail: '/projtects/graphic/garden-of-dreams/GoDCover.jpg',
    description: "Garden of Dreams is a visual identity project created for an electronic music festival based in Sarajevo. The concept revolves around surreal imagery, dream logic, and organic symbolism inspired by the words garden and dreams. The core visual features a surreal eye with wings, representing perception, awareness, and the immersive experience of electronic music. The identity was developed across multiple formats, including posters, billboards, merchandise, credentials, and digital assets.",
    challenge: "The main challenge was to create a strong and recognizable festival identity that reflects the atmosphere of electronic music while avoiding generic club visuals. The design needed to feel surreal and emotional rather than literal, combining music, nature, and dream symbolism into a cohesive system. Another challenge was ensuring the visual language could scale consistently across different applications, from large outdoor billboards to small physical items like badges and tote bags.",
    solution: "The solution was a surreal central symbol built around an abstract eye with wings, combining organic forms and bold colors to evoke both dreams and sound. The visual system blends nature-inspired shapes with vibrant, electronic color contrasts, creating a balance between the organic and the synthetic. The identity was applied consistently across all touchpoints, including posters, billboards, merchandise, credentials, badges, and animated visuals, forming a complete and immersive festival branding experience.",
    gallery: [
      '/projtects/graphic/garden-of-dreams/GardenOfDreamsVisuals.jpg',
      '/projtects/graphic/garden-of-dreams/GoDB.jpg',
      '/projtects/graphic/garden-of-dreams/GoDT.jpg',
      '/projtects/graphic/garden-of-dreams/GardenOfDreamsAnimation.mp4',
    ]
  },

  {
    id: 'graphics-05',
    title: 'Personal Branding',
    category: 'graphic',
    client: 'Self Project',
    year: '2024',
    thumbnail: '/projtects/graphic/personal-branding/PBCover.jpg',
    description: "This project represents my personal branding system, designed as a complete visual identity for my work as a graphic designer. The goal was to create a brand that communicates clarity, confidence, and creative focus, while remaining flexible across digital, print, and motion-based applications. The project includes logo design, logotype, color system, typography, and a clearly defined brand vision and values.",
    challenge: "The main challenge was to visually translate my personal values and professional mindset into a cohesive brand system. As a self-branding project, the identity needed to feel authentic and intentional, not decorative or generic. Another key challenge was balancing creativity with structure - creating a system that feels expressive, but also precise, consistent, and scalable for long-term use.",
    solution: "The solution was a minimalist yet concept-driven identity built around three core principles: Creativity, Professionalism, and Innovation. These values are visually represented through a custom logo system, a restrained color palette, and clean typography. The logo is constructed using a modular approach and proportional logic, ensuring balance and recognizability. The three circular elements act as a symbolic foundation of the brand, representing the three core values and serving as a recurring visual motif across the identity. Together, these elements form a flexible branding system that communicates both personal expression and professional reliability, suitable for a wide range of applications from digital presence to print materials.",
    link: {
      label: 'View and download the full Personal Branding (PDF)',
      url: 'https://drive.google.com/file/d/17LYVqotryEnSQgAVB6kP-sQPVzLmb5ob/view?usp=sharing'
    },
    gallery: [
      '/projtects/graphic/personal-branding/PersonalLogo.png',
      '/projtects/graphic/personal-branding/Personal1.png',
      '/projtects/graphic/personal-branding/Personal2.png',
      '/projtects/graphic/personal-branding/Personal3.png',
      '/projtects/graphic/personal-branding/Adan_Zukančić_Logo_Animation.mp4',
    ]
  },

  {
    id: 'graphics-06',
    title: 'Oatastic - Oat Milk Package Design',
    category: 'graphic',
    client: 'Oatastic',
    year: '2024',
    thumbnail: '/projtects/graphic/oatastic/OatasticCover.jpg',
    description: "Character-driven oat milk packaging design created to challenge the typical “healthy and neutral” aesthetics of the category. The project uses humor, personality, and bold visual storytelling to attract new audiences to oat milk.",
    challenge: "Oat milk brands often rely on clean, minimal, and wellness-focused visuals, which can feel repetitive and uninspiring. The challenge was to design a packaging system that would appeal to people who normally do not consume oat milk, while still maintaining a coherent and recognizable brand identity across multiple flavors.",
    solution: "The solution was a character-based packaging system where each flavor is represented by a distinct illustrated personality with its own name, attitude, and color palette. By using expressive characters, playful typography, and strong color contrasts, the brand communicates humor and individuality instead of traditional health messaging. This approach creates strong shelf impact, clear flavor differentiation, and a memorable brand presence that positions Oatastic as bold, unconventional, and approachable.",
    link: {
      label: 'View and download the full Oat Milk Branding - Oatastic (PDF)',
      url: 'https://drive.google.com/file/d/13pcAmDIUeoahUc41WbRsF6ooqUKiPsXC/view?usp=sharing'
    },
    gallery: [
      '/projtects/graphic/oatastic/OatasticLogo.png',
      '/projtects/graphic/oatastic/Oatastic1.png',
      '/projtects/graphic/oatastic/Oatastic2.png',
      '/projtects/graphic/oatastic/Oatastic3.png',
      '/projtects/graphic/oatastic/Oatastic4.png',
      '/projtects/graphic/oatastic/Oatastic5.png',
      '/projtects/graphic/oatastic/Oatastic6.png',
    ]
  },

    {
    id: 'graphics-07',
    title: 'Prvi korak u poslovni svijet - Logo Design',
    category: 'graphic',
    client: 'Fondacija Hastor',
    year: '2024',
    thumbnail: '/projtects/graphic/prvi-korak/PrviKorakCover.jpg',
    description: "Logo design project for the mentoring program Prvi korak u poslovni svijet organized by Fondacija Hastor. The program is designed to support students through mentoring and practical guidance as they take their first step into the professional world. The goal of this project was to create a clear, modern, and meaningful visual identity that communicates progress, support, and structured growth, while staying fully aligned with the existing brand of Fondacija Hastor.",
    challenge: "The main challenge was to design a logo that feels professional, trustworthy, and educational, without appearing rigid or corporate. The identity needed to communicate mentorship, guidance, and progression, while remaining visually simple, scalable, and easily recognizable across different applications. Another key challenge was ensuring full compatibility with the established visual system and color palette of Fondacija Hastor.",
    solution: "The final solution was developed through three distinct logo concepts, each exploring different symbolic approaches. The selected concept is based on the program’s initials, designed in an isometric, stair-like structure that represents steps, growth, and entering the business world. The geometric construction follows precise design principles and mathematical proportions, ensuring balance, clarity, and consistency. The color palette was carefully chosen to match Fondacija Hastor’s branding, allowing the logo to integrate seamlessly across print, digital, and environmental applications.",
    link: {
      label: 'A full project presentation is available in a detailed PDF showcasing the design process, construction, and applications.',
      url: 'https://drive.google.com/file/d/1GO4R1GrjHxlMUOkq5P5dJfF91pR1jmIK/view?usp=sharing'
    },
    gallery: [
      '/projtects/graphic/prvi-korak/PrviKorak1.png',
      '/projtects/graphic/prvi-korak/PrviKorak2.png',
      '/projtects/graphic/prvi-korak/PrviKorak3.png',
      '/projtects/graphic/prvi-korak/PrviKorak4.png',
      '/projtects/graphic/prvi-korak/PrviKorak5.png',
      '/projtects/graphic/prvi-korak/PrviKorak6.png',
      '/projtects/graphic/prvi-korak/PrviKorak7.png',
      '/projtects/graphic/prvi-korak/PrviKorak8.png',
    ]
  },

   {
    id: 'graphics-08',
    title: 'Florence 2028 Visual Identity Design',
    category: 'graphic',
    client: 'Professor Esad Mulabegović',
    year: '2024',
    thumbnail: '/projtects/graphic/florence/FlorenceCover.jpg',
    description: "Florence 2028 is a conceptual branding project developed for the Olympic Games. The task was to design a complete visual identity system, including the emblem, logotype, pictograms, medals, torch, signage, and supporting applications. The identity draws inspiration from the cultural and historical symbols of Florence, reinterpreted through a contemporary and functional design language.",
    challenge: "The main challenge was creating a unifying symbol capable of representing both the Olympic spirit and the identity of Florence. The visual system needed to be flexible enough to scale across a wide range of applications while maintaining clarity, recognizability, and consistency. Another challenge was designing a pictogram system that feels dynamic and sport-specific while remaining visually cohesive.",
    solution: "The solution is an emblem based on the Florentine lily, reimagined as an Olympic torch, with the flame symbolizing movement, energy, and competition. The logo combines cultural heritage with the universal symbolism of the Olympic flame, creating a strong and meaningful visual centerpiece. All pictograms were derived from the flame shape used in the emblem, ensuring consistency across sports and visual applications. The color palette was carefully selected to reflect Florence’s identity while maintaining strong contrast and visibility across digital and physical environments.",
    link: {
      label: 'View and download the full Florence 2028 Visual Identity (PDF)',
      url: 'https://drive.google.com/file/d/1BAxC6TCqQesOc2ccO0aUZOsRXOg7aRio/view?usp=sharing'
    },
    gallery: [
      '/projtects/graphic/florence/FlorenceLogo.png',
      '/projtects/graphic/florence/FlorenceConstruction.png',
      '/projtects/graphic/florence/FlorenceType.png',
      '/projtects/graphic/florence/FlorenceP.png',
    ]
  },

  {
    id: 'graphics-09',
    title: 'Creative Bull - Branding Design',
    category: 'graphic',
    client: 'Creative Bull Agency',
    year: '2022',
    thumbnail: '/projtects/graphic/creative-bull/CBCover.jpg',
    description: "Creative Bull is a branding project developed for a creative design agency. The goal was to design a complete brand system, documented through a comprehensive brand guidelines book. The project covers brand strategy, visual identity, tone of voice, logo system, typography, color palette, and real-world applications.",
    challenge: "The main challenge was to create a brand that balances strength and creativity. The identity needed to feel bold and confident, while still remaining approachable, playful, and concept-driven. Another key challenge was ensuring consistency across all brand touchpoints and translating the concept into a clear, usable brand system.",
    solution: "The solution was a full branding system centered around a distinctive logo mark combining a stylized bull’s head and an art brush integrated through negative space. The visual language is supported by a strong color palette built around deep blue and vibrant orange, creating contrast, energy, and recognizability. All elements were documented in a detailed brand guidelines book, defining logo usage, typography, colors, tone of voice, and correct applications to ensure long-term brand consistency.",
    link: {
      label: 'View and download the full Brand Guidelines (PDF)',
      url: 'https://drive.google.com/file/d/1Ycqh9BqilDRJcWjPbdxP22hWgEWZI_9c/view?usp=sharing'
    },
    gallery: [
      '/projtects/graphic/creative-bull/CreativeBullCoverThumbnail.jpg',
      '/projtects/graphic/creative-bull/Creative-Bull-Brand-Guidelines-Page-1.jpg',
      '/projtects/graphic/creative-bull/Creative-Bull-Brand-Guidelines-Page-4.jpg',
      '/projtects/graphic/creative-bull/Creative-Bull-Brand-Guidelines-Page-7.jpg',
      '/projtects/graphic/creative-bull/Creative-Bull-Brand-Guidelines-Page-9.jpg',
      '/projtects/graphic/creative-bull/Creative-Bull-Brand-Guidelines-Page-16.jpg',
      '/projtects/graphic/creative-bull/Creative-Bull-Brand-Guidelines-Page-22.jpg',
    ]
  },

  {
    id: 'graphic-10',
    title: '7 Samurai - Movie Poster',
    category: 'graphic',
    client: 'Professor Esad Mulabegović',
    year: '2022',
    thumbnail: '/projtects/graphic/7-samurai/7-Samurai-Movie-Poster-cover-web.jpg',
    description: "Typographic movie poster for the movie Seven Samurai (1954), created as part of a graphic design studio exercise. The task focused on storytelling using typography only, without illustration or imagery, relying on composition, rhythm, and contrast to convey the film’s intensity and structure.",
    challenge: "The main challenge was translating a visually rich and action-driven film into a purely typographic form. Without the use of imagery, the poster needed to communicate scale, conflict, and hierarchy through layout, type weight, and spatial tension alone.",
    solution: "The solution was built around a strong typographic hierarchy and a fragmented layout. Bold expressive letterforms reference the raw energy of the film, while controlled spacing and alignment guide the viewer’s eye through the composition. Typography becomes both the narrative and the visual language, carrying emotion, movement, and structure.",
    gallery: [
      '/projtects/graphic/7-samurai/7 Samurai Movie Poster.jpg',
    ]
  },

  {
    id: 'photography-01',
    title: 'Deadpan Photography - A typological study of traffic signs photographed from the back side',
    category: 'photography',
    client: 'Artistic Project',
    year: '2025',
    thumbnail: '/projtects/photography/deadpan/DeadpanCover.jpg',
    description: "This project is a typological photographic study of the back sides of traffic signs, captured using a deadpan aesthetic. By photographing the signs from behind, the work shifts focus away from their intended communicative function toward their formal and material presence.",
    challenge: "The project asks what happens when a traffic sign loses its meaning. By removing the visible symbol and message, the sign is de-semantized and presented as a neutral object rather than a directive.",
    solution: "Using a strict grid and frontal composition, the images catalog variations in geometry, material, wear, and mounting solutions. Elements of local improvisation such as signs attached to utility poles are included, emphasizing how standardized infrastructure adapts to specific environments. Stripped of function, the traffic signs become minimalist sculptures. The project reframes banal urban infrastructure as an aesthetic object, highlighting form, surface, and repetition rather than information.",
    gallery: [
      '/projtects/photography/deadpan/DeadpanGS.jpg',
      '/projtects/photography/deadpan/Deadpan1.jpg',
      '/projtects/photography/deadpan/Deadpan2.jpg',
      '/projtects/photography/deadpan/Deadpan3.jpg',
      '/projtects/photography/deadpan/Deadpan4.jpg',
      '/projtects/photography/deadpan/Deadpan5.jpg',
      '/projtects/photography/deadpan/Deadpan6.jpg',
      '/projtects/photography/deadpan/Deadpan7.jpg',
      '/projtects/photography/deadpan/Deadpan8.jpg',
      '/projtects/photography/deadpan/Deadpan9.jpg',
    ]
  },

  {
    id: 'photography-02',
    title: 'Sarajevo in Focus',
    category: 'photography',
    client: 'Artistic Project',
    year: '2023',
    thumbnail: '/projtects/photography/sarajevo-ld/SiFCover.jpg',
    description: "Sarajevo in Focus is a light diary project that explores everyday urban scenes in Sarajevo through the observation of natural and artificial light. The series focuses on how light shapes atmosphere, space, and perception rather than on events or people. By documenting subtle shifts in illumination, shadow, and contrast, the project captures quiet, often overlooked moments of the city’s daily visual rhythm.",
    challenge: "The main challenge was to photograph familiar urban environments without relying on narrative, drama, or iconic city symbols. Instead of documenting Sarajevo as a place of history or spectacle, the task was to focus purely on light as the primary subject. Another challenge was maintaining consistency across the series while allowing light conditions to vary naturally throughout the day.",
    solution: "The project was approached as a systematic visual diary, photographing scenes where light becomes the defining element of the composition. By using restrained framing, minimal intervention, and observational distance, the images allow light to reveal textures, depth, and spatial relationships within the city. This approach shifts attention from what is being photographed to how it is seen, presenting Sarajevo as a sequence of visual impressions shaped by light rather than by narrative content.",
    link: {
      label: 'View and download the full Sarajevo in Focus (PDF)',
      url: 'https://drive.google.com/file/d/1rE304bLVzht4964j3PmjMJ1a6Hefnd75/view?usp=sharing'
    },
    gallery: [
      '/projtects/photography/sarajevo-ld/SiF1.png',
      '/projtects/photography/sarajevo-ld/SiF2.png',
      '/projtects/photography/sarajevo-ld/SiF3.png',
      '/projtects/photography/sarajevo-ld/SiF4.png',
      '/projtects/photography/sarajevo-ld/SiF5.png',
      '/projtects/photography/sarajevo-ld/SiF6.png',
      '/projtects/photography/sarajevo-ld/SiF7.png',
      '/projtects/photography/sarajevo-ld/SiF8.png',
      '/projtects/photography/sarajevo-ld/SiF9.png',
      '/projtects/photography/sarajevo-ld/SiF10.png',
      '/projtects/photography/sarajevo-ld/SiF11.png',
      '/projtects/photography/sarajevo-ld/SiF12.png',
      '/projtects/photography/sarajevo-ld/SiF13.png',
      '/projtects/photography/sarajevo-ld/SiF14.png',
      '/projtects/photography/sarajevo-ld/SiF15.png',
    ]
  },

  {
    id: 'photography-03',
    title: 'Krhkost',
    category: 'photography',
    client: 'Artistic Project - Mentor: Emir Klepo',
    year: '2025',
    thumbnail: '/projtects/photography/krhkost/KrhkostCover.jpg',
    description: "Krhkost (Fragility) is a photography project that explores emotional and mental vulnerability through symbolic still-life compositions and human presence. Using fragile materials and controlled visual progression, the project examines how pressure, exposure, and internal tension shape human experience.",
    challenge: "Emotional fragility is often invisible, abstract, and difficult to represent visually. The challenge was to translate internal psychological states into physical form without relying on narrative storytelling or direct illustration, while maintaining visual restraint and conceptual clarity.",
    solution: "By using fragile materials such as eggshells, organic elements, reflective surfaces, and minimal portrait gestures, the project performs a visual de-semantization of objects and bodies. Through repetition and progression, fragility is presented not as weakness, but as a transformative state - where breaking, cracking, and distortion become necessary steps toward awareness and reconstruction.",
    link: {
      label: 'View and download the full Krhkost (PDF)',
      url: 'https://drive.google.com/file/d/1puNJEvwd7ePUDyNKkisl1Uojp5ohVhWe/view?usp=sharing'
    },
    gallery: [
      '/projtects/photography/krhkost/Krhkost1.png',
      '/projtects/photography/krhkost/Krhkost2.png',
      '/projtects/photography/krhkost/Krhkost3.png',
      '/projtects/photography/krhkost/Krhkost4.png',
      '/projtects/photography/krhkost/Krhkost5.png',
      '/projtects/photography/krhkost/Krhkost6.png',
      '/projtects/photography/krhkost/Krhkost7.png',
      '/projtects/photography/krhkost/Krhkost8.png',
      '/projtects/photography/krhkost/Krhkost9.png',
      '/projtects/photography/krhkost/Krhkost10.png',
      '/projtects/photography/krhkost/Krhkost11.png',
    ]
  },

  {
    id: 'photography-04',
    title: 'Poetry of the Dormitory',
    category: 'photography',
    client: 'Artistic Project',
    year: '2025',
    thumbnail: '/projtects/photography/dom/PotDCover.jpg',
    description: "Poetry of the Dormitory is a photographic exploration of a student dormitory in Sarajevo, approached as an architectural and emotional object rather than a functional space. The project follows a visual journey through the building, using light, form, texture, and rhythm to narrate the lived experience of a student inside the dormitory.",
    challenge: "The main challenge was to transform an everyday, often overlooked environment into a meaningful visual narrative. The dormitory needed to be presented beyond its utilitarian purpose, while avoiding literal storytelling or obvious documentation. Another challenge was maintaining visual cohesion while moving through contrasting spaces - exterior and interior, cold and warm, empty and inhabited - without losing conceptual clarity.",
    solution: "The solution was a sequenced photographic series structured as a spatial and emotional progression. The project begins with colder, more distant exterior scenes, transitions into warmer and more intimate interior spaces, introduces moments of tension and contrast, and concludes with the exit - symbolizing departure and closure. Through careful framing, controlled color, and attention to architectural details, the dormitory is reinterpreted as a poetic space that mirrors the student journey: from initial alienation, through adaptation and meaningful moments, to eventual exit and transformation.",
    link: {
      label: 'View and download the full Poetry of the Dormitory (PDF)',
      url: 'https://drive.google.com/file/d/1FGvAUvf5tAv5HPl29XXbYFIid6tcJeDM/view?usp=sharing'
    },
    gallery: [
      '/projtects/photography/dom/PotD1.png',
      '/projtects/photography/dom/PotD2.png',
      '/projtects/photography/dom/PotD3.png',
      '/projtects/photography/dom/PotD4.png',
      '/projtects/photography/dom/PotD5.png',
      '/projtects/photography/dom/PotD6.png',
      '/projtects/photography/dom/PotD7.png',
      '/projtects/photography/dom/PotD8.png',
      '/projtects/photography/dom/PotD9.png',
      '/projtects/photography/dom/PotD10.png',
      '/projtects/photography/dom/PotD11.png',
      '/projtects/photography/dom/PotD12.png',
      '/projtects/photography/dom/PotD13.png',
    ]
  },

  {
    id: 'photography-05',
    title: 'Resonance',
    category: 'photography',
    client: 'Artistic Project - Mentor: Emir Klepo',
    year: '2025',
    thumbnail: '/projtects/photography/resonance/ResonanceCover.jpg',
    description: "Resonance is a photography project centered around a personal object: a guitar I have owned and lived with for many years. Through a sequence of detailed, abstract, and contextual images, the project explores the emotional bond between an object and its owner, treating the guitar not just as an instrument, but as a silent witness to different life phases, moods, and internal states.",
    challenge: "The main challenge was translating something intangible - emotion, memory, and personal history - into a visual language. Rather than documenting music or performance, the task was to express resonance as an emotional and psychological process, avoiding narrative clichés and instead relying on form, texture, rhythm, and visual progression.",
    solution: "The solution was a photographic series built through close-ups, diptychs, triptychs, and contrasts between the guitar’s anatomy and external environments. Details of strings, wood, wear, and imperfections are paired with images from the surrounding world, creating visual echoes between object and environment. The sequence moves from stillness to motion, clarity to blur, and tension to release, mirroring emotional shifts over time. The guitar becomes a metaphor for endurance, vulnerability, and continuity - resonating through every phase, emotion, and moment.",
    link: {
      label: 'View and download the full Resonance (PDF)',
      url: 'https://drive.google.com/file/d/1atHvTFbifi29HCz6LPY0-vSeIAXw7Vsh/view?usp=sharing'
    },
    gallery: [
      '/projtects/photography/resonance/Resonance1.png',
      '/projtects/photography/resonance/Resonance2.png',
      '/projtects/photography/resonance/Resonance3.png',
      '/projtects/photography/resonance/Resonance4.png',
      '/projtects/photography/resonance/Resonance5.png',
      '/projtects/photography/resonance/Resonance6.png',
      '/projtects/photography/resonance/Resonance7.png',
      '/projtects/photography/resonance/Resonance8.png',
      '/projtects/photography/resonance/Resonance9.png',
      '/projtects/photography/resonance/Resonance10.png',
      '/projtects/photography/resonance/Resonance11.png',
      '/projtects/photography/resonance/Resonance12.png',
      '/projtects/photography/resonance/Resonance13.png',
    ]
  },

  {
    id: 'photography-06',
    title: 'Product Photography - Organic Wildflower Honey',
    category: 'photography',
    client: 'Emir Klepo',
    year: '2025',
    thumbnail: '/projtects/photography/med/MedCover.jpg',
    description: "Product photography project focused on creating two distinct advertising images: an informative shot and a lifestyle shot. The product chosen for this project was organic wildflower honey.",
    challenge: "The challenge was to visually communicate two different functions of advertising photography. The informative image needed to clearly present the product, its label, texture, and quality, while the lifestyle image had to place the product within a relatable, emotional context that suggests everyday use and atmosphere.",
    solution: "The informative photograph isolates the honey jar against a clean background, emphasizing packaging design, color, and material clarity. The lifestyle photograph introduces human interaction and surrounding elements such as bread, tea, and natural light, presenting the honey as part of a warm, everyday ritual. Together, the two images balance clarity and emotion, fulfilling both commercial and narrative goals of product advertising.",
    gallery: [
      '/projtects/photography/med/MedInformative.jpg',
      '/projtects/photography/med/MedLifestyle.jpg',
      '/projtects/photography/med/MedGS.jpg',
    ]
  },

  {
    id: 'photography-07',
    title: 'Levitation - Studio Photography',
    category: 'photography',
    client: 'Mirza Hasanefendić',
    year: '2023',
    thumbnail: '/projtects/photography/levitation/LevitationCover.jpg',
    description: "Studio photography exercise created for the Photography course, focused on the concept of levitation. The project explores suspended objects and visual tension through controlled studio conditions and digital compositing.",
    challenge: "The task was to convincingly create the illusion of levitation while maintaining visual balance and realism. Beyond the technical aspect, the challenge was to allow the scene to carry multiple interpretations, leaving emotional meaning open to the viewer rather than defining it explicitly.",
    solution: "Food elements were photographed separately in a studio setup and combined using advanced compositing techniques. Careful control of lighting, shadows, and proportions was used to enhance the sense of suspension. The final image functions both as a technical exercise in levitation photography and as an open-ended visual narrative, allowing viewers to project their own emotional readings onto the scene.",
    gallery: [
      '/projtects/photography/levitation/Levitation.jpg',
    ]
  },

  {
    id: 'photography-08',
    title: 'Food Photography',
    category: 'photography',
    client: 'Mirza Hasanefendić',
    year: '2023',
    thumbnail: '/projtects/photography/cookies/FoodPhotoCover.jpg',
    description: "A food photography project created as part of a university assignment, focused on visual composition and creative freedom. The subject is cookies photographed in a dynamic, playful arrangement, emphasizing movement and balance rather than literal realism.",
    challenge: "Although the assignment required photographing food, the main challenge was to go beyond a static presentation and create a visually engaging composition. The goal was to introduce rhythm, depth, and energy into the frame while maintaining professional lighting and clear subject definition.",
    solution: "The cookies were photographed in a controlled studio environment, allowing precise control over light, shadows, and texture. Advanced photo editing techniques were used to enhance the sense of movement and compositional flow. The final result presents food photography as a dynamic visual study, combining technical precision with creative experimentation.",
    gallery: [
      '/projtects/photography/cookies/FoodPhoto.jpg',
    ]
  },

{
    id: 'Video-01',
    title: 'Akord mira',
    category: 'video',
    client: 'Artistic Project',
    year: '2024',
    thumbnail: '/projtects/video/akord-mira/AkordMiraCover.mp4',
    description: "Akord mira is a short film centered around a young guitarist who discovers a forbidden melody while searching for a book in a library. After playing the melody, time freezes, leaving him as the only person able to move. When he plays it again, time resumes. The story unfolds as a reflection on music, responsibility, and the emotional weight of living in a world shaped by ongoing conflict.",
    challenge: "The main challenge was to translate an abstract idea into a clear cinematic narrative. The film needed to balance realism with symbolic elements such as frozen time and dreams, while addressing the psychological impact of war without showing violence directly. Another challenge was leaving the ending open, allowing space for interpretation and discussion rather than offering a definitive answer.",
    solution: "The story progresses from discovery and curiosity to moral responsibility. After reading daily news about wars, the protagonist is deeply affected, culminating in a dream sequence of bombing that reflects his inner fear and anxiety. Faced with the choice of whether to play the melody again and stop time once more, he ultimately decides to act, believing that even a small pause could bring relief. The film ends ambiguously, questioning whether time remains frozen or continues to flow. The closing song “Mir brate mir” accompanies the credits, reinforcing the film’s central message of peace and reflection.",
    link: {
      label: 'View and download the full Film Akord mira',
      url: 'https://drive.google.com/file/d/17wflIN42497gSQR3Luws5fyYd1XZWo1E/view?usp=sharing'
    },
    gallery: [
    ]
  },

  {
    id: 'Video-02',
    title: 'Džoni budi dobar - Music Video',
    category: 'video',
    client: 'Artistic Project',
    year: '2025',
    thumbnail: '/projtects/video/dzoni-budi-dobar/DzoniCover.mp4',
    description: "Music video concept created for the song “Džoni budi dobar” by the band Azra. The video follows a character wandering through the city at night who eventually encounters a version of himself, blending urban night imagery with an 80s-inspired aesthetic.",
    challenge: "The main challenge was translating the song’s attitude and atmosphere into a visual narrative without relying on literal storytelling. The video needed to feel retro and cinematic while keeping the pacing engaging and the concept clear: a personal confrontation that happens in the middle of nocturnal drifting.",
    solution: "The solution was a night-driven, urban visual story built around self-encounter as the central motif. Street lights, shadows, and neon-like tones were used to reinforce an 80s mood, while the protagonist’s movement through the city creates a gradual buildup toward the moment of meeting himself. The result is a stylized, atmospheric music video that reflects the song’s energy through mood, rhythm, and visual identity.",
    link: {
      label: 'View and download the full Džoni budi dobar Music Video',
      url: 'https://drive.google.com/file/d/1QwNntovTWnipCUeZ0mjWyb6Tl51jujdK/view?usp=sharing'
    },
    gallery: [
    ]
  },

  {
    id: 'Video-03',
    title: 'Garden of Dreams Official Logo Animation',
    category: 'video',
    client: 'Garden of Dreams',
    year: '2024',
    thumbnail: '/projtects/video/garden-of-dreams-logo-animation/GoDLogoCover.mp4',
    description: "Official logo animation created for the Garden of Dreams Festival held in Sarajevo. The project focuses on animating the existing festival logo and translating its visual identity into motion for digital platforms, primarily social media.",
    challenge: "The challenge was to animate the logo in a way that feels organic to the festival’s identity while remaining clear, recognizable, and suitable for official use. The animation needed to enhance the logo without overcomplicating it, and to work effectively in short-form formats such as Instagram.",
    solution: "A reveal-based animation was developed, where individual elements of the logo move, interact, and uncover previously hidden parts of the mark. Motion was used to guide the viewer’s eye and gradually construct the full logo, reinforcing its surreal and electronic character. The final animation functions as the official logo motion asset and is published on the festival’s Instagram page, extending the visual identity into a dynamic, digital form.",
    link: {
      label: 'View and download the full Garden of Dreams Logo Animation',
      url: 'https://drive.google.com/file/d/1EWtnEShFAcsg_28P2jzv8Zi07b2oGHWR/view?usp=sharing'
    },
    gallery: [
      '/projtects/video/garden-of-dreams-logo-animation/GoDAnimation1.jpg',
    ]
  },

  {
    id: 'Video-04',
    title: 'Garden of Dreams Visual Identity Animation',
    category: 'video',
    client: 'Garden of Dreams',
    year: '2024',
    thumbnail: '/projtects/video/garden-of-dreams/GoDLoopAnimation.mp4',
    description: "Loop animation created as an extension of the Garden of Dreams Festival visual identity. The animation translates the previously designed static visuals into continuous motion, reinforcing the festival’s surreal and electronic atmosphere.",
    challenge: "The challenge was to animate the visual identity in a way that preserves its symbolic and aesthetic qualities while functioning as a seamless loop. The motion needed to feel fluid and hypnotic, suitable for digital screens and social media, without introducing a beginning or an end.",
    solution: "A looping animation was developed using key visual elements from the identity, focusing on rhythm, repetition, and subtle transformations. Movement was designed to feel organic and immersive, allowing the visuals to continuously evolve while maintaining recognizability. The result is a flexible motion asset that extends the Garden of Dreams identity into a living, ongoing visual experience.",
    link: {
      label: 'View and download the full Garden of Dreams Visual Identity Animation',
      url: 'https://drive.google.com/file/d/13-EUzEP7SXL44v2DS3AlueTP1YXUihBU/view?usp=sharing'
    },
    gallery: [
    ]
  },

  {
    id: 'Video-05',
    title: 'Personal Logo Animation',
    category: 'video',
    client: 'Self Project',
    year: '2024',
    thumbnail: '/projtects/video/personal-logo-animation/PBCover.mp4',
    description: "Logo animation created as part of my personal branding identity. The animation brings the static logo into motion, using its core visual elements to introduce rhythm, clarity, and recognizability in a digital context.",
    challenge: "The challenge was to animate the logo without losing its minimalist character and conceptual meaning. The motion needed to feel intentional and restrained, reinforcing the brand’s values rather than turning the logo into a purely decorative element.",
    solution: "The animation is built around the movement of the three circular elements that form the foundation of the logo. These circles interact, move, and gradually reveal the complete mark, emphasizing structure, balance, and continuity. The result is a clean and controlled logo reveal that strengthens the identity and works seamlessly across digital platforms.",
    link: {
      label: 'View and download the full Personal Logo Animation',
      url: 'https://drive.google.com/file/d/1-5aam_Rg5zzetcNQbqMKtQtxq9j0vbTb/view?usp=sharing'
    },
    gallery: [
    ]
  },

  {
    id: 'Video-06',
    title: 'Ti nisi on',
    category: 'video',
    client: 'Artistic Project - Mentor: Ljubomir Todorović',
    year: '2025',
    thumbnail: '/projtects/video/ti-nisi-on/TiNisiOnCover.mp4',
    description: "“Ti nisi on” is a short film developed for the Art Direction course under the mentorship of Professor Ljubomir Todorović. The project addresses domestic violence from an unconventional perspective: the film is directed toward the perpetrator, not the victim. Its goal is to confront violent behavior by revealing how it appears through the eyes of the person being harmed.",
    challenge: "Domestic violence is most often represented by focusing on victims and consequences, which can unintentionally distance the perpetrator from responsibility. The challenge was to create a film that avoids sensationalism or explicit depiction, while still communicating the gravity of violence. Another key challenge was approaching the subject ethically and psychologically, aiming to provoke self-recognition and accountability rather than judgment or shock.",
    solution: "The film follows a young man whose controlling behavior escalates into irreversible consequences. Through narrative structure and visual perspective, the audience is placed inside the perpetrator’s mindset, gradually exposing the disconnect between how he perceives his actions and how they are experienced by the victim. The story culminates in a moment of realization and remorse, positioning violence not as power but as destruction. By reframing the act through reflection and consequence, “Ti nisi on” seeks to open space for behavioral change by forcing the perpetrator to truly see what he has done.",
    link: {
      label: 'View and download the full Ti nisi on',
      url: 'https://drive.google.com/file/d/13JGaY_HQ-MqUT4sOYy_H5_FOJALHBYxK/view?usp=sharing'
    },
    gallery: [
    ]
  },

  {
    id: 'Video-07',
    title: 'BAINDEMER - Animations',
    category: 'video',
    client: 'BAINDEMER',
    year: '2023',
    thumbnail: '/projtects/video/bain-de-mer/BAINDEMERCover.mp4',
    description: "Two short brand animations created for BAINDEMER during my internship at SO Agency. The animations were developed as digital motion assets, designed to reflect the brand’s contemporary, fashion-oriented identity through fast pacing and clean visual transitions.",
    challenge: "The challenge was to translate BAINDEMER’s modern and confident brand language into motion while strictly following the creative brief. The animations needed to feel dynamic and current, suitable for digital platforms, and consistent with the brand’s visual system, without unnecessary complexity or over-animation.",
    solution: "Both animations were designed with a focus on speed, rhythm, and clarity. Sharp cuts, precise timing, and minimal visual elements were used to reinforce a modern, fashion-driven aesthetic. The result is a pair of concise, impactful motion pieces that align with BAINDEMER’s brand positioning and function effectively as contemporary digital branding content.",
    link: {
      label: 'View and download the full BAINDEMER Animations',
      url: 'https://drive.google.com/drive/folders/1yktO91Ok3uyv9PxhOrIczkzu90HhBw-d?usp=drive_link'
    },
    gallery: [
    ]
  },

  {
    id: 'Video-08',
    title: 'International Burch University Animation',
    category: 'video',
    client: 'International Burch University',
    year: '2023',
    thumbnail: '/projtects/video/ibu-animation/IBUCover.mp4',
    description: "Motion design animation created for International Burch University (IBU). The project focuses on a clean and professional visual transition, combining illustration and logo animation for institutional communication.",
    challenge: "The challenge was to create a smooth and meaningful visual transformation that connects different symbolic elements while maintaining a clear, academic tone. The animation needed to feel modern and polished, suitable for official university use, without relying on complex visuals or heavy effects.",
    solution: "A morphing-based animation was developed, transitioning from a PC and camera into a student graduation cap, which then evolves into the animated IBU logo. Simple illustrations, controlled motion, and precise timing were used to ensure clarity and elegance. The result is a minimal, professional animation that communicates education, growth, and identity through refined motion design.",
    link: {
      label: 'View and download the full International Burch University Animation',
      url: 'https://drive.google.com/file/d/1efWAM6O1oMB7O71IaWqjB70dY-XELvW5/view?usp=sharing'
    },
    gallery: [
    ]
  },

  {
    id: 'Video-09',
    title: 'Voiceover Animation',
    category: 'video',
    client: 'Animation Course',
    year: '2024',
    thumbnail: '/projtects/video/voiceover/VoiceoverCover.mp4',
    description: "Voiceover-based animation created as part of the 2D Animation course. The project was developed using a predefined voiceover provided by the professor, serving as the foundation for timing, structure, and visual storytelling.",
    challenge: "The main challenge was to translate an existing voiceover into a coherent and engaging visual narrative. The animation needed to synchronize typography, motion, and graphic elements precisely with the audio, while maintaining clarity and rhythm throughout the piece.",
    solution: "The animation was built by structuring visual beats directly around the voiceover. Kinetic typography, simple illustrative elements, and controlled motion were used to support the spoken content and enhance its meaning. By focusing on timing, pacing, and visual hierarchy, the final result effectively combines sound and image into a clear and dynamic 2D animation.",
    link: {
      label: 'View and download the full Voiceover Animation',
      url: 'https://drive.google.com/file/d/13TwjtGdMntsm79mkjKs79bprYolYxGoJ/view?usp=sharing'
    },
    gallery: [
    ]
  },

  {
    id: 'web-design-01',
    title: 'sanametall.de',
    category: 'web',
    client: 'sanametall.de',
    year: '2024',
    thumbnail: '/projtects/web/sanametall.de/sanametallCover.mp4',
    description: "Web design and web development project created for sanametall.de. The project involved a complete redesign and rebuild of the company’s website, transforming an outdated and non-functional platform into a modern, clear, and multilingual business website.",
    challenge: "The existing website no longer reflected the company’s services, professionalism, or technical standards. It lacked structure, clarity, and modern functionality. The challenge was to design a solution that meets the client’s visual preferences while also improving usability, structure, and performance, and to deliver a website that works equally well across languages and devices.",
    solution: "The project was developed end-to-end, from initial discussions with the company director to final deployment. The design was created in Figma, combining the client’s wishes with strategic design suggestions to achieve a balanced and functional result. Development was carried out in WordPress, implementing modern web elements such as structured service and product listings, a contact form, and a clear content hierarchy. The website is fully multilingual (Bosnian, English, and German), responsive, and optimized for everyday business use, resulting in a modern digital presence aligned with sanametall.de’s needs and goals.",
    link: {
      label: 'View the full sanametall.de',
      url: 'https://sanametall.de'
    },
    gallery: [
    ]
  },

    {
    id: 'web-design-02',
    title: 'Pizzeria City Bihać',
    category: 'web',
    client: 'Pizzeria City Bihać',
    year: '2025',
    thumbnail: '/projtects/web/pizzeriacitybihac.com/PizzeriaCityCover.mp4',
    description: "Digital menu website created for Pizzeria City in Bihać. The project focuses on a clean, simple layout designed to make browsing the menu fast and intuitive for users.",
    challenge: "The main challenge was designing a digital menu that works smoothly for all users, especially on mobile devices. The interface needed to be clear, easy to navigate, and visually unobtrusive, allowing users to find dishes and prices quickly without confusion or unnecessary visual noise.",
    solution: "A minimalist layout with clear typography and structured categories was developed to ensure excellent usability and user experience. The interface prioritizes readability, logical navigation, and fast access to information, making the digital menu easy to understand at a glance. The result is a functional and user-friendly menu website that improves the overall customer experience while maintaining a clean and modern visual style.",
    link: {
      label: 'View the full pizzeriacitybihac.com',
      url: 'https://pizzeriacitybihac.com'
    },
    gallery: [
    ]
  },

    {
    id: 'web-design-03',
    title: 'Personal Website - Old',
    category: 'web',
    client: 'Self Project',
    year: '2023',
    thumbnail: '/projtects/web/personal-website/PersonalOldCover.mp4',
    description: "Personal portfolio website created using WordPress, developed as an earlier version of my online presence. The website explores a Bauhaus-inspired aesthetic, using oversized elements and strong visual hierarchy to present creative work in a clean and confident way.",
    challenge: "The challenge was to design a portfolio that feels bold and expressive without becoming chaotic. Large-scale elements needed to be carefully balanced with whitespace and structure, ensuring that the projects remain clear, readable, and easy to navigate.",
    solution: "A Bauhaus-influenced layout was developed, combining large typographic elements, strong contrasts, and minimal color usage. Oversized components are used intentionally to create rhythm and emphasis, while the overall structure remains clean and organized. Built in WordPress, the website presents projects in a clear, accessible manner, demonstrating how expressive design can coexist with usability and clarity.",
    gallery: [
    ]
  },
];

export const FAQ_ITEMS = [
  { q: "What is your typical timeline?", a: "Great work takes time, but momentum is key. Typical branding projects run 4-6 weeks. Web builds 5-12 weeks." },
  { q: "Do you work with startups?", a: "I work with visionaries. If your idea disrupts, I'am interested, regardless of your current size." },
  { q: "What is your budget range?", a: "Each project is tailored individually. Pricing varies depending on the scope, complexity, and type of service requested." },
];