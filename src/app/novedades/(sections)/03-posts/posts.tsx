import styles from "./posts.module.css"
import { NewsPage } from "@/types/NewsPage"
import PostCard from "@/components/post-card/postCard"
import Pagination from "@/components/pagination/pagination"

interface LastPostProps {
  newsPage: NewsPage
}

const Posts = ({ newsPage }: LastPostProps) => {
  const { data: posts, meta } = newsPage
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Más novedades</h2>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination pagination={meta.pagination} />
      </div>
    </section>
  )
}

export default Posts
