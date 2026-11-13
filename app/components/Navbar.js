'use client'

import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar({ toggleTheme, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.logo}>Portfolio</a>
        
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>Tentang</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skill</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Project</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Kontak</a></li>
          <li>
            <button className={styles.themeToggle} onClick={toggleTheme}>
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}