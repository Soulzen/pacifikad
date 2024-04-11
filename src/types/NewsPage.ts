// To parse this data:
//
//   import { Convert, NewsPage } from "./file";
//
//   const newsPage = Convert.toNewsPage(json);

export interface NewsPage {
  data: NewsPageDatum[]
  meta: Meta
}

export interface NewsPageDatum {
  id: number
  attributes: PurpleAttributes
}

export interface PurpleAttributes {
  title: string
  description: string
  slug: string
  author: Author
  cover: Cover
  categories: Categories
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
  avatar: Avatar
}

export interface Avatar {
  data: AvatarData
}

export interface AvatarData {
  id: number
  attributes: TentacledAttributes
}

export interface TentacledAttributes {
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
  provider_metadata: ProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface Formats {
  large: Large
  small: Large
  medium: Large
  thumbnail: Large
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}

export interface Categories {
  data: CategoriesDatum[]
}

export interface CategoriesDatum {
  id: number
  attributes: StickyAttributes
}

export interface StickyAttributes {
  name: string
}

export interface Cover {
  data: CoverData
}

export interface CoverData {
  id: number
  attributes: IndigoAttributes
}

export interface IndigoAttributes {
  width: number
  height: number
  url: string
  alternativeText: string
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
