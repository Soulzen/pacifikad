import React from "react"
import styles from "./whyUs.module.css"
import Image from "next/image"

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
            src="/images/03.jpg"
            alt="Océanos Azules"
            width={800}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyUs
