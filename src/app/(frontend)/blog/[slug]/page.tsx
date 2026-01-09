import { ArticleMetadata } from '../_components/article-metadata'
import Image from 'next/image'
const publishedAt = new Date()

export default async function BlogPostPage() {
  return (
    <div className="prose lg:prose-lg dark:prose-invert">
      <h1>How to create a Blog Tutorial No one asked for</h1>
      <ArticleMetadata
        intent="post"
        data={{
          author: {
            avatar: 'https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png',
            name: 'Jhon Doe',
            role: 'Staff Writer',
          },
          publishedAt,
          readTimeMins: 42,
        }}
        className="not-prose"
      />
      <Image
        src="https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png"
        alt="Cover Image"
        width={600}
        height={300}
        className="w-full rounded-md object-center object-cover"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam numquam eos error ab
        ipsum maxime beatae, facilis recusandae, eaque suscipit ea aspernatur. Fugit eum,
        accusantium praesentium facere quasi recusandae aperiam culpa tempora blanditiis labore
        aliquam, impedit tempore illum voluptatem. Nam, a. Aliquam quod officiis veritatis velit
        perferendis quisquam, porro sapiente expedita quos quas nostrum minima quibusdam dolorem
        nobis fugit enim mollitia harum maiores quasi. Culpa odio beatae, velit laboriosam incidunt
        vitae ipsa aliquam possimus pariatur fugiat facere? Rem dignissimos accusantium temporibus
        numquam debitis. Distinctio at, aliquam libero mollitia accusantium cupiditate maiores nobis
        dolorum ab delectus dicta porro doloribus culpa, dolor ipsam voluptatibus sunt ducimus sit
        harum? Esse, consequatur illo at quisquam iure odio blanditiis explicabo? Fugiat porro non
        nesciunt. Numquam incidunt vitae iusto minus cumque fugit cupiditate nihil earum, officia
        cum possimus iste doloribus veniam debitis vel culpa ipsum sapiente nisi voluptates nam?
        Eaque quisquam expedita harum doloremque optio corrupti eveniet asperiores cum totam omnis
        quo dignissimos accusantium consequatur reiciendis nisi repellat obcaecati ducimus, rem
        libero enim dicta neque odit mollitia dolores. Magnam impedit nisi rem quaerat est odit
        recusandae ratione fugit numquam. Quasi obcaecati voluptas doloremque, ducimus at porro
        velit, dicta nisi eligendi, debitis iusto odit autem. Consequatur nesciunt recusandae nulla
        temporibus, esse facilis excepturi hic reprehenderit non quibusdam eos porro nostrum iure
        pariatur reiciendis officia distinctio voluptas, eligendi saepe? Ea suscipit animi, nulla
        eaque blanditiis amet cumque, unde modi illo consequatur inventore accusantium numquam aut
        id commodi dolorum odit placeat tempora doloribus in? Suscipit excepturi doloremque quas
        dolore? Eum assumenda placeat numquam expedita veniam quod facilis, optio laborum doloribus
        ratione consequuntur, esse vitae, ipsum ad corporis omnis explicabo veritatis aut sit
        perspiciatis. Nihil iure, itaque facilis quas dolores tempora tempore veritatis in
        voluptates culpa eveniet veniam quo voluptatum ullam temporibus neque impedit beatae hic
        officia nesciunt deleniti! Totam temporibus repellat eaque delectus tempora minus
        voluptates, eum quasi quidem ex excepturi quo recusandae porro reiciendis neque ipsum ad est
        laudantium perspiciatis dolorum doloribus, aperiam optio suscipit perferendis! Odit sint
        magni hic sit rerum mollitia veniam ratione harum nobis itaque, magnam odio vitae incidunt
        repellat optio. Quod odit suscipit dolore iure accusamus consequatur optio recusandae
        delectus, officiis ullam sunt cumque, assumenda fuga autem earum perferendis nesciunt sed.
        Enim illo et officia tenetur ipsum, molestias perspiciatis quia maiores tempora modi commodi
        quibusdam veniam eum dolorem est sequi porro dolor assumenda mollitia ab? Culpa suscipit
        maiores repudiandae, reprehenderit voluptate dolor delectus.
      </p>
    </div>
  )
}
