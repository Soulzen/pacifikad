import styles from "./page.module.css"
import { API_URL } from "@/config"
import { Post } from "@/types/Post"
import Hero from "./(sections)/01-hero/hero"

async function getBlogs() {
  const url = `${API_URL}/posts?sort[0]=createdAt:asc&populate[author][fields][0]=name&populate[author][fields][1]=surname&populate[cover][fields][0]=width&populate[cover][fields][1]=height&populate[cover][fields][2]=url&populate[cover][fields][3]=alternativeText&populate[categories][fields][0]=name&fields[0]=title&fields[1]=description&fields[2]=slug&pagination[pageSize]=10&pagination[page]=1`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data: Post = await res.json()
  return data
}

const Novedades = async () => {
  const { data, meta } = await getBlogs()
  console.log(JSON.stringify(data))

  return (
    <main className={styles.main}>
      <Hero />
    </main>
  )
}

export default Novedades
