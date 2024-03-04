import React from "react"
import styles from "./hero.module.css"
import Arrow from "@/icons/Arrow"

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.pretitle}>Que Bueno tenerte aquí</h2>
          <h1 className={styles.title}>
            Navegar en el marketing digital puede ser un gran desafío.
            <b> Tú marca puede explorar otros Océanos de aguas calmas. </b>
            Queremos acompañar tu negocio hacia Océanos Azules, con foco en la
            innovación y creatividad para tu diferenciación.
          </h1>
        </div>
        <div className={styles.cta}>
          <a href="/contact" className={styles.button}>
            <Arrow strokeWidth={1.5} className={styles.arrow} /> Cuéntame más,
            por favor
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
