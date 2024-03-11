import PixsebCover from "@/public/portfolio/covers/pixseb.jpg";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  date: string;
  roles: string;
  client: string;
  websiteUrl: string;
  gradientColors: string[];
  cover: StaticImageData;
  fullImg: string;
  lead: string;
  text: string;
}

const projects: Project[] = [
  {
    path: "/works/pixseb",
    title: "Pixseb",
    date: "2018-08-01",
    roles: "Développeur",
    client: "INSA Strasbourg via l'agence Idéematic",
    websiteUrl: "http://pixseb.com/",
    cover: PixsebCover,
    full_img: [
      "../../images/portfolio/pixseb/project.jpg",
      "../../images/portfolio/pixseb/diagram.jpg",
      "../../images/portfolio/pixseb/list.jpg",
    ],
    gradientColors: ["#5DBAEC", "#162631"],
    lead: "J'ai eu l'opportunité d'être le principal développeur d'un nouveau projet mené par l'agence <a href='https://ideematic.com' target='_blank' rel='noreferrer noopener'>Idéematic</a> pour leur partenaire l'INSA de Strasbourg. J'ai ainsi pu développer la majeure partie d'une application de traitement de données industrielles",
    text: "<h2>Un projet novateur</h2><p>Pixseb permet de créer des projets découpés en étapes durant lesquelles l'utilisateur renseigne des informations sur ces besoins et des brevets afin de générer à la fin un diagramme SUN permettant de visualiser les meilleurs technologies utiles à l'objectif fixé. J'ai pu développer un back-office permettant aux administrateur de gérer les utilisateurs, le parcours de création d'un projet décomposé en plusieurs étapes et enfin le service permettant d'interagir avec une API fournie par l'INSA contenant des brevets et du machine learning qui analyse des brevets afin d'en extraire des informations utiles pour la génération du diagramme final.</p><h2>Le diagramme SUN</h2><p>Le résultat d'un projet Pixseb est le diagramme SUN qui présente les brevets disposés en arc de cercle autour d'un centre représentant la solution idéale à l'innovation voulue. Pour pouvoir générer ce diagramme j'ai dû créer des fonctions permettant de produire des éléments SVG, de placer dans un repère cartésien des données radiales et d'attribuer un score aux différents brevets placés sur ce diagramme en fonctions des éléments saisis par l'utilisateur. Un export au format PNG et au format PDF avec un résumé du projet est également possible. La lisibilité et le placement des objets SVG ont été les challenges les plus importants de ce projets.</p>",
    youtube: "https://youtube.com/watch?v=To-Yr5Gt3Jk",
  },
];

export default projects;