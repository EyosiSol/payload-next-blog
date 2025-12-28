import type { FieldHook } from 'payload'
import { slugify } from 'payload/shared'
import type { Article as ArticleDoc } from '@/payload-types'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

const MAX_SUMMARY_LENGTH = 160

const generateContentSummaryHook: FieldHook<ArticleDoc, string> = ({ value, data }) => {
  console.log(data?.content)
  if (value) return value.trim()
  if (!data?.content) return ''
  const text = convertLexicalToPlaintext({ data: data?.content }).trim()
  if (!text) return ' '
  return text.length > MAX_SUMMARY_LENGTH ? `${text.slice(0, MAX_SUMMARY_LENGTH)}...` : text
}

export default generateContentSummaryHook
