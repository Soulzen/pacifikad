import { StaticImageData } from "next/image"
import Image1 from "../../public/images/05-1.jpg"
import Image2 from "../../public/images/05-2.jpg"
import Image3 from "../../public/images/05-3.jpg"

export interface Pilar {
  src: StaticImageData
  alt: string
  title: string
  description: string
  rot: number
}

export const pilars: Pilar[] = [
  {
    src: Image1,
    alt: "Hand on water with rock",
    title: "Alineación de objetivos",
    description:
      "Tenemos como propósito alinear los objetivos de tu marca con tus Estrategias de Marketing y Comunicación.",
    rot: -5
  },
  {
    src: Image2,
    alt: "Woman standing next to the sea",
    title: "Diferenciarte de la  competencia",
    description:
      "Nuestra misión es llevar tu negocio a espacios inexplorados de comunicación, creatividad e innovación en estrategias.",
    rot: 2
  },
  {
    src: Image3,
    alt: "Hand reaching into water",
    title: "Acompañamiento",
    description:
      "En Pacifikad nos entusiasma poder brindarte calma y tranquilidad en tu navegación dentro del marketing digital. Buscamos que tus ideas sean escuchadas y se materializen.",
    rot: 5
  }
]
