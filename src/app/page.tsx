import Image from "next/image"
import styles from "./page.module.css"
import Hero from "@/components/sections/01-hero/hero"
import Strategy from "@/components/sections/02-strategy/strategy"
import WhyUs from "@/components/sections/03-whyUs/whyUs"
import Presentation from "@/components/sections/04-presentation/presentation"
import Pilars from "@/components/sections/05-pilars/pilars"

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Strategy />
      <WhyUs />
      <Presentation />
      <Pilars />
    </main>
  )
}
