import styles from "./page.module.css"
import Hero from "./(sections)/01-hero/hero"
import LastPost from "./(sections)/02-last-post/lastPost"
import { getBlogs } from "@/services/posts"

const Novedades = async () => {
  const { data, meta } = await getBlogs()
  const [firstPost, ...restPosts] = data

  return (
    <main className={styles.main}>
      <Hero />
      <LastPost post={firstPost} />
    </main>
  )
}

export default Novedades
