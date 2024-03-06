"use client"

import React from "react"
import { useForm, ValidationError } from "@formspree/react"

import styles from "./contact-form.module.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("xgegzeyz")
  if (state.succeeded) {
    return (
      <div className={styles.submited}>
        <h2 className={styles.thank_text}>¡Gracias por tu interes!</h2>
      </div>
    )
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Nombre
        </label>
        <input
          className={styles.input}
          id="name"
          type="text"
          name="name"
          placeholder="¿Cómo te llamas?"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          placeholder="Déjanos tu email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <button
        className={styles.button}
        type="submit"
        disabled={state.submitting}
      >
        Necesito tranquilidad en mi Emprendimiento
      </button>
      <p className={styles.confidential}>
        Tus datos son totalmente confidenciales
      </p>
    </form>
  )
}
function App() {
  return <ContactForm />
}
export default App
