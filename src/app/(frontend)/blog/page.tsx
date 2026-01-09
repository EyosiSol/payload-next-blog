import { ArticleCard } from './_components/article-card'

export default async function BlogIndexPage() {
  return (
    <div className=" grid grid-cols-3 gap-4 w-full">
      <ArticleCard
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
      ></ArticleCard>
    </div>
  )
}
