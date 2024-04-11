import styles from "./posts.module.css"
import { NewsPageDatum } from "@/types/NewsPage"
import PostCard from "@/components/post-card/postCard"

interface LastPostProps {
  posts: NewsPageDatum[]
}

const Posts = ({ posts }: LastPostProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Más novedades</h2>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Posts
