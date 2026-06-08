import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    longDescription: z.string(),
    image: z.string(),
    badge: z.string().optional(),
    features: z.array(z.string()),
    pricing: z.array(z.object({
      name: z.string(),
      price: z.string(),
      unit: z.string().optional(),
      description: z.string().optional(),
      featured: z.boolean().default(false),
    })),
    details: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    order: z.number().default(0),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    initials: z.string(),
    service: z.string(),
    rating: z.number().min(1).max(5),
    text: z.string(),
    featured: z.boolean().default(false),
  }),
});

const faqCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    bio: z.string(),
    certifications: z.array(z.string()),
    specialties: z.array(z.string()),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    author: z.string().default('遇見Mi美學館'),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  services: servicesCollection,
  testimonials: testimonialsCollection,
  faq: faqCollection,
  team: teamCollection,
  posts: postsCollection,
};
