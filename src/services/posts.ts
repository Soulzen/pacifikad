import qs from "qs"

import { API_URL } from "@/config"
import { NewsPage } from "@/types/NewsPage"
import { Post } from "@/types/Post"

export async function getBlogs() {
  const query = {
    sort: ["createdAt:desc"],
    populate: {
      author: {
        fields: ["name", "surname"],
        populate: ["avatar"]
      },
      cover: { fields: ["width", "height", "url", "alternativeText"] },
      categories: { fields: ["name"] }
    },
    fields: ["title", "description", "slug"],
    pagination: { pageSize: "9", page: "1" }
  }

  const url = `${API_URL}/posts?${qs.stringify(query)}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data: NewsPage = await res.json()
  return data
}

export async function getBlogById(id: string) {
  const query = {
    fields: ["title", "slug"],
    populate: {
      cover: {
        fields: ["alternativeText", "width", "height", "url"]
      },
      author: {
        fields: ["name", "surname"]
      },
      text_media: {
        fields: ["richText", "media2Right"],
        populate: {
          media: {
            fields: ["alternativeText", "width", "height", "url"]
          }
        }
      }
    }
  }

  const url = `${API_URL}/posts/${id}?${qs.stringify(query)}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data: Post = await res.json()
  return data
}
