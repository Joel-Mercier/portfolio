import PixsebCover from "@/public/images/portfolio/covers/pixseb.jpg";
import GlobalmaCover from "@/public/images/portfolio/covers/portfolio@1x.jpg";
import ReactNative from "@/public/images/portfolio/covers/formation-react-native.png";

import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  date: string;
  roles: string;
  client: string;
  websiteUrl?: string;
  cover: StaticImageData;
  lead: string;
  path?: string;
  technologies?: string;
}

const projects: Project[] = [
  {
    title: "WoW Companion Hub",
    date: "2018-08-01",
    roles: "Développeur",
    client: "Projet personnel",
    websiteUrl: "https://globalma.com/",
    cover: GlobalmaCover,
    technologies: "NextJS, tRPC, Prisma",
    lead: "lorem ipsum dolor sit amet",
  },
  {
    title: "Formation React Native",
    date: "2018-08-01",
    roles: "Formateur",
    client: "Agence Idéematic",
    path: "/works/formation-react-native",
    cover: ReactNative,
    technologies: "React, React Native",
    lead: "lorem ipsum dolor sit amet",
  },
  {
    title: "Global MA",
    date: "2018-08-01",
    roles: "Développeur",
    client: "Global MA via l'agence Idéematic",
    websiteUrl: "https://www.globalma.com/",
    cover: GlobalmaCover,
    technologies: "Ruby on Rails, Bootstrap 5, CSS, Javascript",
    lead: "lorem ipsum dolor sit amet",
  },
  {
    path: "/works/pixseb",
    title: "Pixseb",
    date: "2018-08-01",
    roles: "Développeur",
    client: "INSA Strasbourg via l'agence Idéematic",
    websiteUrl: "https://pixseb.com/",
    cover: PixsebCover,
    technologies: "Ruby on Rails, JQuery",
    lead: "J'ai eu l'opportunité d'être le principal développeur d'un nouveau projet mené par l'agence Idéematic pour leur partenaire l'INSA de Strasbourg. J'ai ainsi pu développer la majeure partie d'une application de traitement de données industrielles",
  },
];

export default projects;
