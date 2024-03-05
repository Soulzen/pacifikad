import React from "react"
import styles from "./strategy.module.css"
import Image from "next/image"

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
            src="/images/02.jpg"
            alt="Estrategia de Océanos Azules"
            width={800}
            height={500}
          />
          <div className={styles.text}>
            <p>
              Somos Camilo y Makarena, fundadores de PACIFIKAD y expertos en
              Estrategias de Marketing Digital y Campañas Publicitarias.
            </p>
            <p>
              En la digitalización de los últimos años hemos visto cómo el
              aumento de ofertantes ha complicado a las empresas para mantener
              su posición en el mercado, navegando en océanos rojos, saturados
              de competencia y en donde sobrevive el más fuerte.
            </p>
            <p className={styles.last}>
              ”En los Océanos rojos los peces luchan por sobrevivir de los
              tiburones, donde rara vez lo consiguen”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategy
