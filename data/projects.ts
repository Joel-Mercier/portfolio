import PixsebCover from "@/public/images/portfolio/covers/pixseb.jpg";
import GlobalmaCover from "@/public/images/portfolio/covers/portfolio@1x.jpg";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  date: string;
  roles: string;
  client: string;
  websiteUrl: string;
  cover: StaticImageData;
  lead: string;
  path?: string;
}

const projects: Project[] = [
  {
    path: "/works/pixseb",
    title: "Pixseb",
    date: "2018-08-01",
    roles: "Développeur",
    client: "INSA Strasbourg via l'agence Idéematic",
    websiteUrl: "https://pixseb.com/",
    cover: PixsebCover,
    lead: "J'ai eu l'opportunité d'être le principal développeur d'un nouveau projet mené par l'agence <a class='text-slate-400 hover:text-emerald-300 focus-visible:text-emerald-300' href='https://ideematic.com' target='_blank' rel='noreferrer noopener'>Idéematic</a> pour leur partenaire l'INSA de Strasbourg. J'ai ainsi pu développer la majeure partie d'une application de traitement de données industrielles",
  },
  {
    title: "Global MA",
    date: "2018-08-01",
    roles: "Développeur",
    client: "Global MA via l'agence Idéematic",
    websiteUrl: "https://globalma.com/",
    cover: GlobalmaCover,
    lead: "lorem ipsum dolor sit amet",
  },
  {
    title: "WoW Companion Hub",
    date: "2018-08-01",
    roles: "Développeur",
    client: "Projet personnel",
    websiteUrl: "https://globalma.com/",
    cover: GlobalmaCover,
    lead: "lorem ipsum dolor sit amet",
  },
];

export default projects;
