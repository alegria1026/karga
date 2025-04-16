"use client"

import { useState } from "react"
import styles from "./Menu.module.css"
import { IoMdMenu, IoMdClose } from "react-icons/io"

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>KARGA</h1>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <a href="#" className={styles.navLink}>Home</a>
        <a href="#us" className={styles.navLink}>Nosotros</a>
        <a href="#" className={styles.navLink}>Servicio</a>
        <a href="#" className={styles.navLink}>Contacto</a>
      </div>
    </nav>
  )
}

export default Menu