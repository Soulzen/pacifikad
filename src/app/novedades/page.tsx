import styles from "./page.module.css"
import Hero from "./(sections)/01-hero/hero"
import LastPost from "./(sections)/02-last-post/lastPost"
import { getBlogs } from "@/services/posts"
import Posts from "./(sections)/03-posts/posts"

const Novedades = async () => {
  const { data, meta } = await getBlogs()
  const [firstPost, ...restPosts] = data

  return (
    <main className={styles.main}>
      <Hero />
      <LastPost post={firstPost} />
      <Posts posts={restPosts} />
    </main>
  )
}

export default Novedades
