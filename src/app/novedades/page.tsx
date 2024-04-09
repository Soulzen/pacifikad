import styles from "./page.module.css"
import { API_URL } from "@/config"
import { NewsPage } from "@/types/NewsPage"
import Hero from "./(sections)/01-hero/hero"

async function getBlogs() {
  const url = `${API_URL}/news-pages`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data: NewsPage = await res.json()
  return data
}

const Novedades = async () => {
  //const { data, meta } = await getBlogs()

  return (
    <main className={styles.main}>
      <Hero />
    </main>
  )
}

export default Novedades
