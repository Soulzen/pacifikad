import React from "react"

import styles from "./lastPost.module.css"
import { NewsPageDatum } from "@/types/NewsPage"
import Image from "next/image"
import Link from "next/link"

interface LastPostProps {
  post: NewsPageDatum
}

const LastPost = ({ post }: LastPostProps) => {
  const { cover, title, description, slug, author } = post.attributes
  const {
    url: avatarUrl,
    width: avatarWidth,
    height: avatarHeight
  } = author.data.attributes.avatar.data.attributes.formats.small
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.introduction}>Nuestro último post</h3>
        <Link className={styles.post} href={`/novedades/${post.id}`}>
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
            <div className={styles.author}>
              <Image
                className={styles.avatar}
                src={avatarUrl}
                alt={author.data.attributes.name}
                width={avatarWidth}
                height={avatarHeight}
              />
              <div className={styles.author__info}>
                <p className={styles.author__role}>Autor</p>
                <p className={styles.author__name}>
                  {author.data.attributes.name} {author.data.attributes.surname}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default LastPost
