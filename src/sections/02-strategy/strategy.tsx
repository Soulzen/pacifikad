import React from "react"
import Image from "next/image"

import styles from "./strategy.module.css"
import hand_on_water from "@/../public/images/02.jpg"

const Strategy = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Utilizamos estrategia de <b>Océanos Azules</b> para darle valor
          diferencial a tu emprendimiento mediante Estrategias Digitales
        </h2>
        <div className={styles.content}>
          <Image
            className={styles.image}
            src={hand_on_water}
            alt="Estrategia de Océanos Azules"
            sizes="(max-width: 900px) 100vw,  33vw"
            priority
          />
          <div className={styles.text}>
            <p>
              Somos Camilo y Makarena, fundadores de <b>PACIFIKAD</b> y expertos
              en
              <b>Estrategias de Marketing Digital</b> y{" "}
              <b>Campañas Publicitarias</b>.
            </p>
            <p>
              En la digitalización de los últimos años hemos visto cómo el
              aumento de ofertantes ha complicado a las empresas para mantener
              su posición en el mercado, navegando en océanos rojos, saturados
              de competencia y en donde sobrevive el más fuerte.
            </p>
            <p className={styles.last}>
              ”En los <b>Océanos rojos</b> los peces luchan por sobrevivir de
              los tiburones, donde rara vez lo consiguen”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategy
