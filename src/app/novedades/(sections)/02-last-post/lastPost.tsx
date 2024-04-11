import React from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "./lastPost.module.css"
import { NewsPageDatum } from "@/types/NewsPage"
import PostCard from "@/components/post-card/postCard"

interface LastPostProps {
  post: NewsPageDatum
}

const LastPost = ({ post }: LastPostProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.introduction}>Nuestro último post</h3>
        <PostCard post={post} main />
      </div>
    </section>
  )
}

export default LastPost
