import React from "react"
import Image from "next/image"

import styles from "./whyUs.module.css"
import woman_walking_on_water from "@/../public/images/03.jpg"

const WhyUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Por qué navegar hacia <b>Océanos Azules</b>?
        </h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Una estrategia de <b>Océano Azul</b> persigue diferenciar tu marca
              frente a los competidores, por ende nos ocupamos de la
              personalización de tu Estrategia Digital y del{" "}
              <b>acompañamiento</b> en tu marca personal.
            </p>
            <p>
              Al igual que tu, tenemos una <b>mentalidad disruptiva</b>. Nos
              gusta ser diferentes. Nuestra misión es alinear tu estrategia con
              tus acciones de Marketing Digital para lograr esos objetivos que
              tanto deseas.
            </p>
            <p className={styles.last}>
              “En PACIFIKAD apostamos a algo diferente porque venimos de las
              profundidades de los Océanos Azules, al igual que tú”
            </p>
          </div>
          <Image
            className={styles.image}
            src={woman_walking_on_water}
            alt="Océanos Azules"
            sizes="(max-width: 900px) 100vw,  50vw"
          />
        </div>
      </div>
    </section>
  )
}

export default WhyUs
