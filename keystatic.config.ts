import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    blogContent: collection({
      label: "Blog Content",
      slugField: "title",
      path: "content/blog-content/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});

