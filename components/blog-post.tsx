import ExportedImage from "next-image-export-optimizer";
import Test from "../public/images/blog/barba-js.gif";
import Link from "next/link";
import { BlogPost as BlogPostType } from "@/data/blog-posts";

interface Props {
  blogPost: BlogPostType;
}

const BlogPost = ({ blogPost }: Props) => {
  return (
    <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <ExportedImage
        src={Test}
        alt="Test"
        className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
      />
      <div className="z-10 col-span-6">
        <p className="-mt-1 text-sm font-semibold leading-6">2020</p>
        <h3 className="-mt-1">
          <Link
            href={"#"}
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-500 focus-visible:text-red-500  group/link text-base"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>Integrating Algolia Search with WordPress</span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogPost;
