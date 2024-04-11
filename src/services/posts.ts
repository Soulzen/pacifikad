import qs from "qs"

import { API_URL } from "@/config"
import { NewsPage } from "@/types/NewsPage"
import { json } from "stream/consumers"

export async function getBlogs() {
  const obj = qs.parse(
    "sort[0]=createdAt:asc&populate[author][fields][0]=name&populate[author][fields][1]=surname&populate[cover][fields][0]=width&populate[cover][fields][1]=height&populate[cover][fields][2]=url&populate[cover][fields][3]=alternativeText&populate[categories][fields][0]=name&fields[0]=title&fields[1]=description&fields[2]=slug&pagination[pageSize]=10&pagination[page]=1"
  )

  const query = {
    sort: ["createdAt:asc"],
    populate: {
      author: {
        fields: ["name", "surname"],
        populate: ["avatar"]
      },
      cover: { fields: ["width", "height", "url", "alternativeText"] },
      categories: { fields: ["name"] }
    },
    fields: ["title", "description", "slug"],
    pagination: { pageSize: "10", page: "1" }
  }

  const url = `${API_URL}/posts?${qs.stringify(query)}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data: NewsPage = await res.json()
  return data
}
