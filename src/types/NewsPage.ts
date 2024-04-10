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
}

export interface Categories {
  data: CategoriesDatum[]
}

export interface CategoriesDatum {
  id: number
  attributes: TentacledAttributes
}

export interface TentacledAttributes {
  name: string
}

export interface Cover {
  data: CoverData
}

export interface CoverData {
  id: number
  attributes: StickyAttributes
}

export interface StickyAttributes {
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
