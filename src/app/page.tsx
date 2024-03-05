import Image from "next/image"
import styles from "./page.module.css"
import Hero from "@/components/sections/01-hero/hero"
import Strategy from "@/components/sections/02-strategy/strategy"

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Strategy />
    </main>
  )
}
