import React from "react"
import styles from "./pilar-card.module.css"
import Image, { StaticImageData } from "next/image"

interface PilarCardProps {
  src: StaticImageData
  alt: string
  title: string
  description: string
  rot: number
}

const PilarCard = ({ src, alt, title, description, rot }: PilarCardProps) => {
  return (
    <div className={styles.pilar}>
      <Image
        className={styles.image}
        style={{ rotate: `${rot}deg` }}
        src={src}
        alt={alt}
        sizes="(max-width: 900px) 100vw,  33vw"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default PilarCard
