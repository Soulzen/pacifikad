import Image from "next/image"
import styles from "./hero.module.css"
import novedades_img from "@/../public/images/novedades.jpg"

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            className={styles.image}
            src={novedades_img}
            alt="smooth waves in the ocean"
            fill
            priority
            sizes="100vw"
          />
          <h1 className={styles.title}>
            Hola, somos Pacifikad. Descubre nuestras estrategias y herramientas
            de Marketing para potenciar tu Marca Online
          </h1>
          <p className={styles.subtitle}>
            Sumérgete en la Profundidad Digital: Explora nuestro blog para
            encontrar Estrategias de Marketing desde los Océanos Pacíficos
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
