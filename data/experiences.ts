export interface Experience {
  body: string;
  title: string;
  role: string;
  dateBegin: string;
  dateEnd: string;
  companyUrl: string;
  workUrl?: string;
  location: string;
  technologies: string;
}

const experiences: Experience[] = [
  {
    body: "Apprentissage et utilisation du framework Ruby on Rails.\nDéveloppement d'applications web et d'application mobiles avec (React / React Native).\nTravail en équipe sous la tutelle d'un chef de projet.",
    title: "Idéematic",
    role: "Développeur web",
    dateBegin: "2016-10-16",
    dateEnd: "Aujourd'hui",
    companyUrl: "https://www.ideematic.com/",
    workUrl: "/works/fedfinance",
    location: "Strasbourg",
    technologies: "Ruby on Rails, React, React Native",
  },
  {
    body: "Refonte du site web de l’entreprise (blog, portfolio, services, etc...) - almedia.fr.\nRéalisation d’un serious game pour la CCI Alsace - smarttech-solutions.eu.\nUtilisation de Javascript et de Jekyll.\nTravail en autonomie et responsabilité technique de projets.",
    title: "Almédia SARL",
    role: "Développeur web apprenti",
    dateBegin: "2015-10-01",
    dateEnd: "2016-07-03",
    companyUrl: "http://www.almedia.fr",
    workUrl: "/works/almedia/",
    location: "Strasbourg, FR",
    technologies: "HTML, CSS, JavaScript, Jekyll",
  },
  {
    body: "Approfondissement des compétences en développement web vues au cours du DUT. Back-end, front-end, React, Drupal, arts visuels, UI & UX Design.",
    title: "IUT de Haguenau",
    role: "Etudiant en Licence Professionnelle Techniques et Activités de l’Image et du Son",
    dateBegin: "2015-09-01",
    dateEnd: "2016-07-01",
    companyUrl:
      "http://iuthaguenau.unistra.fr/licence-pro/lp-tais-techniques-et-activites-de-l-image-et-du-son/",
    location: "Haguenau, FR",
    technologies: "HTML, CSS, JavaScript, React, Drupal",
  },
  {
    body: "Stage de fin de parcours de DUT. Développeur web / cadre international (FR / DE / EN). Développement PHP, Intégration de template email, utilisation d’API. Travail sur le site principal de l’entreprise",
    title: "Dalim Software GmbH",
    role: "Développeur web stagiaire",
    dateBegin: "2015-04-07",
    dateEnd: "2015-06-26",
    companyUrl: "https://www.dalim.com/fr/home/",
    location: "Kehl, DE",
    technologies: "HTML, CSS, JavaScript, PHP",
  },
  {
    body: "Acquisition de compétences dans le développement web, le design, le multimédia et l’informatique en général.",
    title: "IUT de Haguenau",
    role: "Etudiant en DUT Métiers du Multimédia et de l’Internet",
    dateBegin: "2013-09-01",
    dateEnd: "2015-07-01",
    companyUrl:
      "http://iuthaguenau.unistra.fr/dut/mmi-metiers-du-multimedia-et-de-linternet/",
    location: "Haguenau, FR",
    technologies: "HTML, CSS, JavaScript, PHP, WordPress",
  },
];

export default experiences;