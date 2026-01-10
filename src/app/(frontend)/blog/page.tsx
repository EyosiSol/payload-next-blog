import { getPublishedArticles } from '@/collections/Articles/fetchers'
import { ArticleCard } from './_components/article-card'
import { relationIsObject } from '@/lib/payload/helpers/relation-to-object'

export default async function BlogIndexPage() {
  const articles = await getPublishedArticles()
  if (!articles.length) {
    return <p>No articles Found</p>
  }
  return (
    <div className=" grid grid-cols-3 gap-4 w-full">
      {articles.map(
        ({ id, title, contentSummary, coverImage, publishedAt, readTimeInMins, author, slug }) => {
          if (!relationIsObject(coverImage)) return null
          if (!relationIsObject(author) || !relationIsObject(author.avatar)) return null
          return (
            <ArticleCard
              key={id}
              href={`/blog/${slug}`}
              title={title}
              summary={contentSummary}
              publishedAt={new Date(publishedAt ?? new Date())}
              readTimeMins={readTimeInMins ?? 0}
              coverImage={coverImage}
              author={{
                avatar: author.avatar,
                name: author.name,
                role: author.role,
              }}
            />
          )
        },
      )}
      {/* <ArticleCard
        href="/blog/how-to-create-a-blog-tutorial-no-one-asked-for"
        title="How to create a Blog Tutorial No One Asked For"
        summary="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
        coverImage="https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png"
        publishedAt={new Date()}
        readTimeMins={30}
        author={{
          avatar: 'https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png',
          name: 'Jhon Doe',
          role: 'Staff Writer',
        }}
      ></ArticleCard> */}
    </div>
  )
}
