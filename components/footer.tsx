import { Github, Gitlab, Instagram } from "lucide-react"
import LocaleSelect from "./locale-select"

const Footer = () => {
  return (
    <footer>
      <a
        href="mailto:hello@joelmercier.io"
        className="font-medium text-slate-200 hover:text-red-300 focus-visible:text-red-300"
      >
        hello@joelmercier.io
      </a>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs shrink-0">
          <a
            href="https://github.com/Joel-Mercier"
            className="block hover:text-slate-200"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="GitHub (opens in a new tab)"
          >
            <Github />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            href="https://gitlab.com/SireCuit"
            className="block hover:text-slate-200"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Gitlab (opens in a new tab)"
          >
            <Gitlab />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            href="https://www.instagram.com/adventuresincode/"
            className="block hover:text-slate-200"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Instagram (opens in a new tab)"
          >
            <Instagram />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <LocaleSelect />
        </li>
      </ul>
    </footer>
  )
}

export default Footer