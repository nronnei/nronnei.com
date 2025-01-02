import { glob , file} from 'astro/loaders';
import { z, defineCollection, reference } from 'astro:content';

const authors = defineCollection({
  loader: file("./src/content/authors/index.json"),
    schema: z.object({
      id: z.string(),
      name: z.string(),
      bio: z.string().optional(),
      avatar: z.string().optional(),
      links: z.array(z.object({ url: z.string(), title: z.string(), icon: z.string().optional()}))
    })
  })
  
const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    draft: z.boolean().optional().default(false),
    // authors: z.array(z.string()),
    authors: z.array(reference('authors')),
    tags: z.array(z.string()),
    image: z.string().optional(),
    published: z.date(),
    updated: z.date().optional(),
  }),
});

export const collections = {
    authors,
    posts,
};