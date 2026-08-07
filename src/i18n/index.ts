import i18next from "i18next";
import fr from "../locales/fr.json";

export const defaultLocale = "fr" as const;

i18next.init({
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  resources: { fr: { translation: fr } },
  interpolation: { escapeValue: false },
});

export const t = i18next.t.bind(i18next);

export interface ExperienceEntry {
  body: string;
  title: string;
  role: string;
  dateBegin: string;
  dateEnd: string;
  companyUrl: string;
  location: string;
  technologies: string;
}

export const experiences = fr.experiences as ExperienceEntry[];

export function link(
  href: string,
  label: string,
  className = "font-medium text-slate-200 hover:text-red-300 focus-visible:text-red-300",
): string {
  return `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}
