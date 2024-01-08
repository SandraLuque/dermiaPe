import { z, defineCollection, reference } from 'astro:content'

const treatmentsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      description: z.string(),
      specialty: z.string(),
      details: reference('detailsTreatments'),
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
const detailsTreatmentsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image().optional()
    })
})
export const collections = {
  treatments: treatmentsCollection,
  offices: officesCollection,
  detailsTreatments: detailsTreatmentsCollection
}
