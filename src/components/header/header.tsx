"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import styles from "./header.module.css"
import NavBar from "../hero/navbar/navbar"
import Logo from "@/icons/Logo"

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Logo className={styles.logo} />
          <h1 className={styles.heading}>Pacifikad</h1>
        </Link>
        <NavBar desktop />

        <button className={styles.nav_menu} onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </div>
      {isMobileMenuOpen && <NavBar />}
    </header>
  )
}
