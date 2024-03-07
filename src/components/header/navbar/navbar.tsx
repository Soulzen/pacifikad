// components/NavBar.js

import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from "./navbar.module.css"
import { pages, Page } from "@/data/pages"

type NavBarProps = {
  desktop?: boolean
}

const NavBar = ({ desktop }: NavBarProps) => {
  const pathname = usePathname()

  return (
    <nav
      className={`${styles.navbar} ${desktop ? styles.navbar__desktop : null}`}
    >
      <ul className={styles.navbar_nav}>
        {pages.map((page: Page) => (
          <li key={page.id} className={styles.nav_item}>
            <Link
              href={page.url}
              className={`${styles.nav_link} ${
                pathname === page.url ? styles.nav_link__selected : ""
              }`}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
