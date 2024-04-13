import { Pagination as PaginationType } from "@/types/NewsPage"
import styles from "./pagination.module.css"
import Link from "next/link"

interface PaginationProps {
  pagination: PaginationType
}

const Pagination = ({ pagination }: PaginationProps) => {
  const { pageCount, page, pageSize, total } = pagination
  const isFirstPage = page === 1
  const isLastPage = page === pageCount
  const prevPage = page - 1
  const prevPageUrl = isFirstPage ? "#" : `/novedades?page=${prevPage}`
  const nextPage = page + 1
  const nextPageUrl = isLastPage ? "#" : `/novedades?page=${nextPage}`
  const from = (page - 1) * pageSize + 1
  const to = Math.min(page * pageSize, total)

  return (
    <div className={styles.pagination}>
      <span className={styles.pagination__info}>
        Showing <span className={styles.pagination__info_data}>{from}</span> to{" "}
        <span className={styles.pagination__info_data}>{to}</span> of{" "}
        <span className={styles.pagination__info_data}>{total}</span> Entries
      </span>
      <div className={styles.navigation}>
        {isFirstPage ? (
          <div
            className={styles.navLink}
            style={{ pointerEvents: "none", opacity: 0.5 }}
          >
            <svg
              className={`${styles.arrowIcon} ${styles.arrowIcon__left}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </div>
        ) : (
          <Link href={prevPageUrl} className={styles.navLink}>
            <svg
              className={`${styles.arrowIcon} ${styles.arrowIcon__left}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </Link>
        )}
        {isLastPage ? (
          <div
            className={styles.navLink}
            style={{ pointerEvents: "none", opacity: 0.5 }}
          >
            Next
            <svg
              className={`${styles.arrowIcon} ${styles.arrowIcon__right}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        ) : (
          <Link href={nextPageUrl} className={styles.navLink}>
            Next
            <svg
              className={`${styles.arrowIcon} ${styles.arrowIcon__right}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination
