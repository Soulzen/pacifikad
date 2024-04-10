import React from "react"

import styles from "./lastPost.module.css"
import { NewsPageDatum } from "@/types/NewsPage"
import Image from "next/image"
import Link from "next/link"

interface LastPostProps {
  post: NewsPageDatum
}

const LastPost = ({ post }: LastPostProps) => {
  const { cover, title, description, slug } = post.attributes
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.introduction}>Nuestro último post</h3>
        <Link
          className={styles.post}
          href={`/novedades/${post.attributes.slug}`}
        >
          <Image
            className={styles.image}
            src={cover.data.attributes.url}
            alt={cover.data.attributes.alternativeText}
            width={cover.data.attributes.width}
            height={cover.data.attributes.height}
          />
          <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default LastPost
