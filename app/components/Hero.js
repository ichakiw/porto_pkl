'use client'

import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <img 
          src="/Profil.jpg" 
          alt="Foto Profil Nabila Avisha Suryani" 
          className={styles.profileImage}
        />
        <h1>Nabila Avisha Suryani</h1>
        <p className={styles.subtitle}>Pengembangan Perangkat Lunak dan Gim</p>
        <p className={styles.description}>
          Saya adalah siswi yang bersemangat dalam pengembangan web 
          dan siap untuk mengikuti Praktek Kerja Lapangan (PKL) untuk 
          mengembangkan keterampilan profesional.
        </p>
        <div className={styles.buttons}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            Lihat Project
          </a>
        </div>
      </div>
    </section>
  )
}