import StickyScrollReveal from "@/components/ui/sticky-scroll-reveal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { getWorks } from "@/utils/mdx";
import { useMemo } from "react";
import { getCurrentLocale, getI18n } from "@/locales/server";
import Footer from "@/components/footer";

const Works = async () => {
  const locale = getCurrentLocale()
  const projects = getWorks(locale)
  const content = useMemo(() => {
    return projects.map(({ slug, metadata }) => ({
      title: metadata.title,
      description: metadata.lead,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--red-500))] flex items-center justify-center text-white p-4 object-cover">
          <ExportedImage
            fill
            src={metadata.cover}
            alt={metadata.title}
            className="object-cover"
          />
        </div>
      ),
      path: `/works/${slug}`,
    }));
  }, [projects])
  const t = await getI18n()
  return (
    <div className="lg:py-24">
      <div>
        <Link
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-red-500"
        >
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          {t('shared.back')}
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {t('works.title')}
        </h1>
        <StickyScrollReveal content={content} />
      </div>
      <Footer />
    </div>
  );
};

export default Works;
