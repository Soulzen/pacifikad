import Image from "next/image"
import styles from "./page.module.css"
import Hero from "@/sections/01-hero/hero"
import Strategy from "@/sections/02-strategy/strategy"
import WhyUs from "@/sections/03-whyUs/whyUs"
import Presentation from "@/sections/04-presentation/presentation"
import Pilars from "@/sections/05-pilars/pilars"
import Outro from "@/sections/06-outro/outro"

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Strategy />
      <WhyUs />
      <Presentation />
      <Pilars />
      <Outro />
    </main>
  )
}
