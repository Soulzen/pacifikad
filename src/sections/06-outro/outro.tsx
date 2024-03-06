import React from "react"
import styles from "./outro.module.css"
import ContactForm from "@/components/contact-form/contact-form"

const Outro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Navegamos juntas en tu Negocio?</h2>
        {/* <div className={styles.placeholder}>Placeholder</div> */}
        <ContactForm />
      </div>
    </section>
  )
}

export default Outro
