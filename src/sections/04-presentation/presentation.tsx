import React from "react"
import Image from "next/image"

import styles from "./presentation.module.css"
import Image1 from "@/../public/images/04-1.jpg"
import Image2 from "@/../public/images/04-2.jpg"

const Presentation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Quiénes somos y por qué nos llamamos <b>PACIFIKAD</b>?
        </h2>
        <div className={styles.content}>
          <div className={styles.images}>
            <Image
              className={styles.image1}
              src={Image1}
              alt="Makarena"
              sizes="(max-width: 900px) 60vw,  30vw"
            />
            <Image
              className={styles.image2}
              src={Image2}
              alt="Camilo"
              sizes="(max-width: 900px) 60vw,  30vw"
            />
          </div>
          <div className={styles.text}>
            <p>
              Somos Makarena y Camilo, amantes del <b>Marketing Digital</b> y
              cuya misión es ayudar a <b>Mujeres Emprendedoras</b> a conseguir
              mejorar sus resultados a través de Estrategias de Marketing y
              Campañas de Publicidad.
            </p>
            <p>
              Somos amantes de la naturaleza, el mar y la tranquilidad
              espiritual. Nos identificamos con la <b>Libertad</b> y el{" "}
              <b>Emprendimiento</b>, además de ser unos apasionados en ayudar a
              crecer a marcas personales.
            </p>
            <p className={styles.last}>
              <b>“PACIFIKAD</b> nace con la idea de entregar tranquilidad a los
              emprendimientos inmersos en <b>Océanos azules</b> a través de una
              estrategia única y diferente”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
