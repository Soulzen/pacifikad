// To parse this data:
//
//   import { Convert, Post } from "./file";
//
//   const post = Convert.toPost(json);

export interface Post {
  data: PostData
  meta: Meta
}

export interface PostData {
  id: number
  attributes: PurpleAttributes
}

export interface PurpleAttributes {
  title: string
  slug: string
  cover: Cover
  author: Author
  text_media?: TextMedia[]
}

export interface Author {
  data: AuthorData
}

export interface AuthorData {
  id: number
  attributes: FluffyAttributes
}

export interface FluffyAttributes {
  name: string
  surname: string
}

export interface Cover {
  data: CoverData | null
}

export interface CoverData {
  id: number
  attributes: TentacledAttributes
}

export interface TentacledAttributes {
  alternativeText: null | string
  width: number
  height: number
  url: string
}

export interface TextMedia {
  id: number
  richText?: null | string
  media2Right: boolean
  media: Cover
}

export interface Meta {}

// Converts JSON strings to/from your types
export class Convert {
  public static toPost(json: string): Post {
    return JSON.parse(json)
  }

  public static postToJson(value: Post): string {
    return JSON.stringify(value)
  }
}
