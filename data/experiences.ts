import { Locale } from "@/locales/client";

export type Experience = Record<
  Locale,
  {
    body: string;
    title: string;
    role: string;
    dateBegin: string;
    dateEnd: string;
    companyUrl: string;
    location: string;
    technologies: string;
  }
>;

const experiences: Experience[] = [
  {
    fr: {
      body: "Apprentissage et utilisation du framework Ruby on Rails.\nDéveloppement d'applications web et d'application mobiles avec React / React Native.\nTravail en équipe sous la tutelle d'un chef de projet.",
      title: "Idéematic",
      role: "Développeur web",
      dateBegin: "2016-10-16",
      dateEnd: "Aujourd'hui",
      companyUrl: "https://ideematic.com/",
      location: "Strasbourg, FR",
      technologies: "Ruby on Rails, React, React Native",
    },
    en: {
      body: "Learning and usage of the Ruby on Rails framework. \nWeb applications and mobile apps development with React / React Native. \nTeam work under the supervision of a project manager.",
      title: "Idéematic",
      role: "Web developer",
      dateBegin: "2016-10-16",
      dateEnd: "Today",
      companyUrl: "https://ideematic.com/",
      location: "Strasbourg, FR",
      technologies: "Ruby on Rails, React, React Native",
    },
  },
  {
    fr: {
      body: "Refonte du site web de l’entreprise (blog, portfolio, services, etc...) - almedia.fr.\nRéalisation d’un serious game pour la CCI Alsace - smarttech-solutions.eu.\nUtilisation de Javascript et de Jekyll.\nTravail en autonomie et responsabilité technique de projets.",
      title: "Almédia",
      role: "Développeur web apprenti",
      dateBegin: "2015-10-01",
      dateEnd: "2016-07-03",
      companyUrl: "https://almedia.fr",
      location: "Strasbourg, FR",
      technologies: "HTML, CSS, JavaScript, Jekyll",
    },
    en: {
      body: "Redesign of the company's website (blog, portfolio, services, ...) - almedia.fr.\nProduction of a web based serious game for CCI Alsace - smarttech-solutions.eu.\nUsage of Javascript and Jekyll.\nTechnical responsability and autonomy while working on these projects.",
      title: "Almédia",
      role: "Apprentice web developer",
      dateBegin: "2015-10-01",
      dateEnd: "2016-07-03",
      companyUrl: "https://almedia.fr",
      location: "Strasbourg, FR",
      technologies: "HTML, CSS, JavaScript, Jekyll",
    },
  },
  {
    fr: {
      body: "Approfondissement des compétences en développement web vues au cours du DUT. Back-end, front-end, React, Drupal, arts visuels, UI & UX Design.",
      title: "IUT de Haguenau",
      role: "Etudiant en Licence Professionnelle Techniques et Activités de l’Image et du Son",
      dateBegin: "2015-09-01",
      dateEnd: "2016-07-01",
      companyUrl:
        "https://iuthaguenau.unistra.fr/licence-pro/lp-tais-techniques-et-activites-de-l-image-et-du-son/",
      location: "Haguenau, FR",
      technologies: "HTML, CSS, JavaScript, React, Drupal",
    },
    en: {
      body: "In depth learning of the web development skills discovered during the DUT. Back-end, front-end, React, Drupal, visual design, UI & UX design.",
      title: "IUT de Haguenau",
      role: "Student at Licence Professionnelle Techniques et Activités de l’Image et du Son",
      dateBegin: "2015-09-01",
      dateEnd: "2016-07-01",
      companyUrl:
        "https://iuthaguenau.unistra.fr/licence-pro/lp-tais-techniques-et-activites-de-l-image-et-du-son/",
      location: "Haguenau, FR",
      technologies: "HTML, CSS, JavaScript, React, Drupal",
    },
  },
  {
    fr: {
      body: "Stage de fin de parcours de DUT. Développeur web / cadre international (FR / DE / EN). Développement PHP, Intégration de template email, utilisation d’API. Travail sur le site principal de l’entreprise",
      title: "Dalim Software",
      role: "Développeur web stagiaire",
      dateBegin: "2015-04-07",
      dateEnd: "2015-06-26",
      companyUrl: "https://www.dalim.com/fr/home/",
      location: "Kehl, DE",
      technologies: "HTML, CSS, JavaScript, PHP",
    },
    en: {
      body: "End-of-course internship. Web developer / international setting (FR / DE / EN). PHP development, email template development, API usage. Worked at the company's headquarters.",
      title: "Dalim Software",
      role: "Intern web developer",
      dateBegin: "2015-04-07",
      dateEnd: "2015-06-26",
      companyUrl: "https://www.dalim.com/fr/home/",
      location: "Kehl, DE",
      technologies: "HTML, CSS, JavaScript, PHP",
    },
  },
  {
    fr: {
      body: "Acquisition de compétences dans le développement web, le design, le multimédia et l’informatique en général.",
      title: "IUT de Haguenau",
      role: "Etudiant en DUT Métiers du Multimédia et de l’Internet",
      dateBegin: "2013-09-01",
      dateEnd: "2015-07-01",
      companyUrl:
        "https://formations.unistra.fr/fr/formations/but-BT/but-metiers-du-multimedia-et-de-l-internet-ME343.html",
      location: "Haguenau, FR",
      technologies: "HTML, CSS, JavaScript, PHP, WordPress",
    },
    en: {
      body: "Acquisition of skills in web development, design, multimedia and IT in general.",
      title: "IUT de Haguenau",
      role: "Student at DUT Métiers du Multimédia et de l’Internet",
      dateBegin: "2013-09-01",
      dateEnd: "2015-07-01",
      companyUrl:
        "https://formations.unistra.fr/fr/formations/but-BT/but-metiers-du-multimedia-et-de-l-internet-ME343.html",
      location: "Haguenau, FR",
      technologies: "HTML, CSS, JavaScript, PHP, WordPress",
    },
  },
];

export default experiences;
