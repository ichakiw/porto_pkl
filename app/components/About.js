'use client'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>Tentang Saya</h2>
      <div className={styles.aboutGrid}>
        {/* Card Biodata */}
        <div className={styles.aboutCard}>
          <h3>Biodata</h3>
          <ul>
            <li>
              <span>Nama Lengkap</span>
              <span>Nabila Avisha Suryani</span>
            </li>
            <li>
              <span>Tempat, Tanggal Lahir</span>
              <span>Jakarta, 25 Maret 2009</span>
            </li>
            <li>
              <span>Alamat</span>
              <span className={styles.addressText}>
                Jl. Danau Maninjau 6, RW 7/RW 2, Abadijaya, 
                Kec. Sukmajaya, Depok, Jawa Barat
              </span>
            </li>
            <li>
              <span>Telepon</span>
              <span>0821-1425-8300</span>
            </li>
            <li>
              <span>Email</span>
              <span>nabila.avisha2503@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Card Pendidikan */}
        <div className={styles.aboutCard}>
          <h3>Pendidikan</h3>
          <div className={styles.educationItem}>
            <h4>
              <a 
                href="https://www.smkn21jakarta.sch.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.schoolLink}
              >
                SMKN 21 Jakarta
                <span className={styles.linkIcon}>↗</span>
              </a>
            </h4>
            <p>Pengembangan Perangkat Lunak dan Gim | 2024 - Sekarang</p>
          </div>
          <div className={styles.educationItem}>
            <h4>
              <a 
                href="https://khas.sch.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.schoolLink}
              >
                Khadijah Boarding School Indonesia
                <span className={styles.linkIcon}>↗</span>
              </a>
            </h4>
            <p>Research Project | 2021 - 2024</p>
          </div>
          <div className={styles.educationItem}>
            <h4>
              <a 
                href="https://cahayaquran.sch.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.schoolLink}
              >
                SD Cahaya Quran
                <span className={styles.linkIcon}>↗</span>
              </a>
            </h4>
            <p>Sekolah Tahfizh Modern | 2015 - 2021</p>
          </div>
        </div>

        {/* Card Ringkasan Diri */}
        <div className={styles.aboutCard}>
          <h3>Ringkasan Diri</h3>
          <p className={styles.summaryText}>
            Saya adalah siswi jurusan Pengembangan Perangkat Lunak dan Gim yang memiliki minat besar 
            dalam pengembangan web dan teknologi. Saya memiliki kemampuan dalam 
            membangun aplikasi web menggunakan berbagai teknologi modern.
          </p>
          <p className={styles.summaryText}>
            Saya seorang yang cepat belajar, teliti, dan mampu bekerja sama 
            dalam tim. Saya selalu bersemangat untuk mempelajari hal-hal baru 
            dan mengembangkan keterampilan saya.
          </p>
        </div>

        {/* Card Tujuan PKL */}
        <div className={styles.aboutCard}>
          <h3>Tujuan PKL</h3>
          <ul className={styles.purposeList}>
            <li>Menerapkan ilmu yang telah dipelajari di sekolah ke dunia kerja</li>
            <li>Menambah pengalaman dan wawasan tentang lingkungan kerja profesional</li>
            <li>Mengembangkan kemampuan di bidang pemrograman dan pengembangan website</li>
            <li>Melatih kedisiplinan, tanggung jawab, dan kerja sama dalam tim</li>
            <li>Mempersiapkan diri untuk melanjutkan pendidikan atau memasuki dunia kerja setelah lulus</li>
          </ul>
        </div>
      </div>
    </section>
  )
}