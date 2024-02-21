"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import styles from "./header.module.css"
import NavBar from "../navbar/navbar"
// import TruckIcon from "../../icons/TruckIcon"
// import PhoneIcon from "@/icons/PhoneIcon"

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
          {/* <TruckIcon className={styles.logo} /> */}
          <h1 className={styles.heading}>Pacifikad</h1>
        </Link>
        <NavBar desktop />
        {/* <a href="tel:+34627749546" className={styles.telefono}>
          { <PhoneIcon className={styles.icon} /> }
          <p>+34 627749546</p>
        </a> */}
        <button className={styles.nav_menu} onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </div>
      {isMobileMenuOpen && <NavBar />}
    </header>
  )
}
