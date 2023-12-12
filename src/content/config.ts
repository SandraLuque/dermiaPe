import { z, defineCollection } from 'astro:content'

const treatmentsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      description: z.string(),
      specialty: z.string(),
      procedures: z.string().optional(),
      type: z.array(z.string()),
      numberType: z.number()
    })
})
const officesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      office: z.string(),
      address: z.string().optional(),
      image: image(),
      contacts: z.string(),
      workingTime: z.string()
    })
})
export const collections = {
  treatments: treatmentsCollection,
  offices: officesCollection
}
