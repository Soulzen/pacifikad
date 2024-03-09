import React from "react"
import Image from "next/image"

import styles from "./outro.module.css"
import ContactForm from "@/components/contact-form/contact-form"
import outro_image from "@/../public/images/06.jpg"

const Outro = () => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.bg_image}
        alt="Water"
        src={outro_image}
        placeholder="blur"
        quality={75}
        fill
        sizes="100vw"
      />
      <div className={styles.container}>
        <h2 className={styles.title}>¿Navegamos juntas en tu Negocio?</h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default Outro
