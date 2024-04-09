// To parse this data:
//
//   import { Convert, NewsPage } from "./file";
//
//   const newsPage = Convert.toNewsPage(json);

export interface NewsPage {
  data: Datum[]
  meta: Meta
}

export interface Datum {
  id: number
  attributes: DatumAttributes
}

export interface DatumAttributes {
  Title: string
  slug: string
  description: string
  content: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: Image
}

export interface Image {
  data: Data
}

export interface Data {
  id: number
  attributes: DataAttributes
}

export interface DataAttributes {
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
}

export interface Formats {
  thumbnail: Large
  medium: Large
  large: Large
  small: Large
}

export interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
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
  public static toNewsPage(json: string): NewsPage {
    return JSON.parse(json)
  }

  public static newsPageToJson(value: NewsPage): string {
    return JSON.stringify(value)
  }
}
