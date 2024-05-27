import type { MDXComponents } from "mdx/types";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import YouTube from "./components/mdx/youtube";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export const Markdown: MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => <h3 className="tracking-tight text-slate-200">{children}</h3>,
  h4: ({ children }) => <h4 className="tracking-tight text-slate-200">{children}</h4>,
  h5: ({ children }) => <h5 className="tracking-tight text-slate-200">{children}</h5>,
  p: ({ children }) => <p className="mb-4">{children}</p>,
  img: (props) => <ExportedImage {...(props as ExportedImageProps)} width={800} height={400} className="rounded-md" />,
  YouTube: (props) => <YouTube {...props} />
}
