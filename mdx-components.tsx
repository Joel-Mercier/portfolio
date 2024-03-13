import type { MDXComponents } from "mdx/types";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-12">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl mb-8 mt-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    img: (props) => <ExportedImage {...(props as ExportedImageProps)} />,
    ...components,
  };
}
