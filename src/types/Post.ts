// To parse this data:
//
//   import { Convert, Post } from "./file";
//
//   const post = Convert.toPost(json);

export interface Post {
  data: Datum[]
  meta: Meta
}

export interface Datum {
  id: number
  attributes: PurpleAttributes
}

export interface PurpleAttributes {
  title: string
  description: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  author: Author
  categories: Categories
  cover: Cover
  text_media: TextMedia[]
}

export interface Author {
  data: DAT
}

export interface DAT {
  id: number
  attributes: FluffyAttributes
}

export interface FluffyAttributes {
  name: string
  surname?: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  slug?: string
}

export interface Categories {
  data: DAT[]
}

export interface Cover {
  data: Data | null
}

export interface Data {
  id: number
  attributes: TentacledAttributes
}

export interface TentacledAttributes {
  name: string
  alternativeText: null | string
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: EXT
  mime: MIME
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export enum EXT {
  Jpg = ".jpg"
}

export interface Formats {
  large: Large
  small: Large
  medium: Large
  thumbnail: Large
}

export interface Large {
  ext: EXT
  url: string
  hash: string
  mime: MIME
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

export enum MIME {
  ImageJPEG = "image/jpeg"
}

export interface ProviderMetadata {
  public_id: string
  resource_type: ResourceType
}

export enum ResourceType {
  Image = "image"
}

export interface TextMedia {
  id: number
  richText: null | string
  media2Right: boolean
  media: Cover
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPost(json: string): Post {
    return JSON.parse(json)
  }

  public static postToJson(value: Post): string {
    return JSON.stringify(value)
  }
}
