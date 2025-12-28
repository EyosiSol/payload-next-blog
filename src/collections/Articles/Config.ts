import { CollectionConfig, FieldHook } from 'payload'
import { generateSlugHook } from './hooks/generate-slug-hook'
import generateContentSummaryHook from './hooks/generate-contentSummary-hook'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

export const Article: CollectionConfig = {
  slug: 'articles',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      hooks: { beforeValidate: [generateSlugHook] },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'contentSummary',
      type: 'textarea',
      required: true,
      hooks: {
        beforeValidate: [generateContentSummaryHook],
      },
    },
    {
      name: 'readTimeInMins',
      type: 'number',
      defaultValue: 0,
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData.readTimeInMins
          },
        ],
        afterRead: [
          ({ data }) => {
            // datacontent
            const text = convertLexicalToPlaintext({ data: data?.content })
            const wordsPerMinute = 200
            const words = text.trim().split(/\s+/).length
            return Math.max(1, Math.ceil(words / wordsPerMinute))
          },
        ],
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'article-authors',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: ['Draft', 'Published'],
      defaultValue: 'Draft',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
        condition: (data) => data?.status === 'Published',
      },
    },
  ],
  timestamps: true,
}
