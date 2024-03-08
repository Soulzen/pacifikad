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
        </div>

        <div className={styles.subsection}>
          <ul className={styles.list}>
            <li>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/makarena-ponce/"
              >
                <Image
                  className={styles.sm_icon}
                  src="/social_media/linkedin.svg"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
