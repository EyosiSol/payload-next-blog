import type { CollectionConfig } from 'payload'
import { generateBlurDataURL, isEligibleForBlurDataURL } from './lib/generate-blur-data'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'blurDataUrl',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
    },
  ],
  upload: true,
  hooks: {
    beforeChange: [
      async ({ operation, data, req }) => {
        if (operation !== 'create') return data
        // 1.check for validity
        if (!isEligibleForBlurDataURL(req.file?.mimetype ?? null)) return data
        const base64 = await generateBlurDataURL(req.file?.data)
        if (!base64) return data
        data.blurDataUrl = base64
        console.log(`Generated Blur data url for ${data.filename}`)

        return data
      },
    ],
  },
}
