import React from "react"
import styles from "./pilars.module.css"
import PilarCard from "./pilar-card/pilar-card"

import { pilars } from "@/data/pilars"

const Pilars = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nuestro trabajo con tu marca se basa en <b>3 pilares fundamentales</b>{" "}
          para tu crecimiento
        </h2>
        <div className={styles.pilars}>
          {pilars.map((pilar, index) => (
            <PilarCard
              key={index}
              src={pilar.src}
              alt={pilar.alt}
              title={pilar.title}
              description={pilar.description}
              rot={pilar.rot}
            />
          ))}
        </div>
        <h3 className={styles.counterTitle}>¡Queremos ayudarte a crecer!</h3>
      </div>
    </section>
  )
}

export default Pilars
