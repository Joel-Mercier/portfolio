import StickyScrollReveal from "@/components/ui/sticky-scroll-reveal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { getWorks } from "@/utils/mdx";
import { useMemo } from "react";

const Works = () => {
  const projects = getWorks()
  const content = useMemo(() => {
    return projects.map(({ slug, metadata }) => ({
      title: metadata.title,
      description: metadata.lead,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--red-500))] flex items-center justify-center text-white p-4 object-cover">
          {/* <ExportedImage
            src={metadata.cover}
            alt={metadata.title}
            className="object-cover"
          /> */}
        </div>
      ),
      path: metadata.websiteUrl || `/works/${slug}` || "#",
    }));
  }, [projects])
  return (
    <div className="lg:py-24">
      <Link
        href="/"
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-red-500"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Retour
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Tous les projets
      </h1>
      <StickyScrollReveal content={content} />
    </div>
  );
};

export default Works;
