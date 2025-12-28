import type { FieldHook } from 'payload'
import { slugify } from 'payload/shared'
import type { Article as ArticleDoc } from '@/payload-types'

const generateSlugHook: FieldHook<ArticleDoc, string> = ({ value, data }) => {
  const base = value?.trim() ?? data?.title?.trim() ?? ''
  return slugify(base) ?? ''
}

export { generateSlugHook }
