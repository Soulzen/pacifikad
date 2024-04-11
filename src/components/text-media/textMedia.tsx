import Image from "next/image"
import Parser from "html-react-parser"
import showdown from "showdown"

import { TextMedia as TextMediaType } from "@/types/Post"
import styles from "./textMedia.module.css"

interface TextMediaProps {
  item: TextMediaType
}

const TextMedia = ({ item }: TextMediaProps) => {
  const {
    richText,
    media2Right,
    media: { data }
  } = item
  const converter = new showdown.Converter()
  return (
    <div
      className={`${styles.container} ${
        media2Right ? null : styles.row__reverse
      }`}
    >
      {richText ? (
        <div className={styles.text}>
          {Parser(converter.makeHtml(richText))}
        </div>
      ) : null}
      {data ? (
        <Image
          className={styles.image}
          src={data.attributes.url}
          alt={
            data.attributes.alternativeText
              ? data.attributes.alternativeText
              : ""
          }
          width={data.attributes.width}
          height={data.attributes.height}
        />
      ) : null}
    </div>
  )
}

export default TextMedia
