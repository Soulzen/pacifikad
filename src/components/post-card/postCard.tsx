import React from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "./postCard.module.css"
import { NewsPageDatum } from "@/types/NewsPage"

interface LastPostProps {
  post: NewsPageDatum
  main?: boolean
}

const PostCard = ({ post, main }: LastPostProps) => {
  const { cover, title, description, slug, author, categories } =
    post.attributes
  const {
    url: avatarUrl,
    width: avatarWidth,
    height: avatarHeight
  } = author.data.attributes.avatar.data.attributes.formats.small

  return (
    <Link
      className={`${styles.post} ${main ? styles.postMain : null}`}
      href={`/novedades/${post.id}`}
    >
      <Image
        className={`${styles.image} ${main ? styles.imageMain : null}`}
        src={cover.data.attributes.url}
        alt={cover.data.attributes.alternativeText}
        width={cover.data.attributes.width}
        height={cover.data.attributes.height}
      />
      <div className={`${styles.content} ${main ? styles.contentMain : null}`}>
        <div className={styles.categories}>
          {categories.data.map((category) => (
            <span key={category.id} className={styles.category}>
              {category.attributes.name}
            </span>
          ))}
        </div>
        <h4 className={`${styles.title} ${main ? styles.titleMain : null}`}>
          {title}
        </h4>
        <p
          className={`${styles.description} ${
            main ? styles.descriptionMain : null
          }`}
        >
          {description}
        </p>
        <div className={`${styles.author} ${main ? styles.authorMain : null}`}>
          <Image
            className={`${styles.avatar} ${main ? styles.avatarMain : null}`}
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
  )
}

export default PostCard
