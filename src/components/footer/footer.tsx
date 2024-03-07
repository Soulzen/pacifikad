import React from "react"
import styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/icons/Logo"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.subsection}>
          <h3 className={styles.heading}>
            <Logo className={styles.icon} />
            Pacifikad
          </h3>
          <p className={styles.text}>
            © 2024 Pacifikad. Todos los derechos reservados.
          </p>

          <p className={styles.text}>Correo electrónico: info@pacifikad.com</p>
        </div>
        <div className={styles.subsection}>
          <h3 className={styles.heading}>Enlaces</h3>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.subsection}>
          <h3 className={styles.heading}>Siguenos en</h3>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#">
                <Image
                  src="/social_media/instagram.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />{" "}
                @pacifikad
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                <Image
                  src="/social_media/facebook.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />{" "}
                /pacifikad
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/makarena-ponce/"
              >
                <Image
                  src="/social_media/linkedin.svg"
                  alt="linkedin"
                  width={30}
                  height={30}
                />{" "}
                /in/makarena-ponce/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
