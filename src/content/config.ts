import { z, defineCollection, reference } from 'astro:content';

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        bio: z.string().optional(),
        avatar: z.string().optional(),
        links: z.array(z.object({ url: z.string(), title: z.string(), icon: z.string().optional()}))
    })
})

const posts = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    author: reference('authors'),
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