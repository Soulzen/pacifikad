import { getBlogById } from "@/services/posts"
import styles from "./page.module.css"
import Image from "next/image"
import TextMedia from "@/components/text-media/textMedia"

const Post = async ({ params }: { params: { id: string } }) => {
  const data = await getBlogById(params.id)

  const {
    data: {
      attributes: { title, cover, author, text_media }
    }
  } = data

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {cover.data ? (
          <Image
            className={styles.cover}
            src={cover.data.attributes.url}
            alt={
              cover.data.attributes.alternativeText
                ? cover.data.attributes.alternativeText
                : ""
            }
            width={cover.data.attributes.width}
            height={cover.data.attributes.height}
          />
        ) : null}
        <p className={styles.author}>
          Por{" "}
          <span className={styles.author__name}>
            {author.data.attributes.name} {author.data.attributes.surname}
          </span>
        </p>
        <div className={styles.content}>
          {text_media
            ? text_media.map((item) => <TextMedia key={item.id} item={item} />)
            : null}
        </div>
      </div>
    </main>
  )
}

export default Post
