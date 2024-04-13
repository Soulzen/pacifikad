import styles from "./page.module.css"
import Hero from "./(sections)/01-hero/hero"
import LastPost from "./(sections)/02-last-post/lastPost"
import { getBlogs, getLastBlog } from "@/services/posts"
import Posts from "./(sections)/03-posts/posts"

const Novedades = async ({
  searchParams
}: {
  searchParams: { page: number }
}) => {
  const { page } = searchParams
  const { data: lastPost } = await getLastBlog()
  const newsPage = await getBlogs(page)

  return (
    <main className={styles.main}>
      <Hero />
      <LastPost post={lastPost[0]} />
      <Posts newsPage={newsPage} />
    </main>
  )
}

export default Novedades
