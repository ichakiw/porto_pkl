'use client'

import styles from '../styles/Projects.module.css'

const projectsData = [
  {
    id: 1,
    name: 'ElectroShop',
    description: 'penjualan berbasis web yang menyediakan berbagai produk elektronik seperti laptop, smartphone, monitor, dan aksesoris komputer. Aplikasi dilengkapi dengan fitur katalog produk, pencarian barang, serta sistem pengelolaan data untuk memudahkan proses transaksi.',
    tech: ['Next.js', 'PostgreSQL', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/ichakiw/nextjs_tansaksi.git',
    demo: 'https://demo.com',
    image: '/konter_online.png'  // ← Diubah sesuai nama file
  },
  {
    id: 2,
    name: 'CattenApp',
    description: 'Aplikasi mobile untuk pemesanan makanan dan minuman bahkan snack di kantin sekolah. Platform ini menghubungkan Buyer (Pengguna Kantin) dengan Seller (Pemilik Kantin) melalui sistem yang aman, mudah dan terpercaya.',
    tech: ['Android Studio', 'Firebase Authentication', 'Firebase Realtime Database', 'Material Design Components', 'Kotlin', 'Gradle'],
    github: 'https://github.com/Veltros/canteenappm',
    demo: 'https://demo.com',
    image: '/cantten.jpeg'  // ← Diperbaiki (sebelumnya catten.jpeg)
  },
  {
    id: 3,
    name: 'WarungOnline',
    description: 'Warung Online merupakan aplikasi berbasis web yang dibuat untuk memudahkan pengguna dalam membeli kebutuhan sehari-hari secara online. Aplikasi menyediakan fitur melihat produk, menambahkan barang ke keranjang, serta melakukan pemesanan dengan tampilan yang sederhana dan mudah digunakan..',
    tech: ['Laravel', 'Laragon', 'JavaScript','CSS','HTML','Bootstrap'],
    github: 'https://github.com/ichakiw/warung_online.git',
    demo: 'https://demo.com',
    image: '/warung_online.png'  // ← Diubah sesuai nama file
  },
  {
    id: 4,
    name: 'AppRental',
    description: 'menyewa berbagai aplikasi premium dalam jangka waktu tertentu. Pengguna dapat melihat daftar aplikasi yang tersedia, memilih durasi sewa, dan melakukan pemesanan secara mudah melalui antarmuka yang sederhana dan responsif.',
    tech: ['Next.js', 'PostgreSQL', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/ichakiw/nextjs_tansaksi.git',
    demo: 'https://demo.com',
    image: '/ngerental.png'  // ← Ganti dengan gambar yang tersedia
  },
   {
    id: 5,
    name: 'Adventure of Coint',
    description: 'Membuat game 2D menggunakan GDevelop 5 dengan sistem visual programming berbasis event. Game dipublikasikan melalui platform itch.io dan dapat dimainkan melalui browser.',
    tech: ['GDevelop 5', 'itch.io', 'HTML5','Event-Based Visual Programming'],
    github: 'https://github.com/ichakiw/nextjs_tansaksi.git',
    demo: 'https://demo.com',
    image: '/adventure_of_monster.png'  // ← Ganti dengan gambar yang tersedia
  },
]

export default function Projects() {
  // Fungsi untuk handle error gambar
  const handleImageError = (e) => {
    e.target.src = '/placeholder-project.jpg' // Gambar placeholder jika error
    e.target.alt = 'Gambar tidak tersedia'
  }

  return (
    <section id="projects" className={styles.projects}>
      <h2>Project</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img 
              src={project.image} 
              alt={project.name} 
              className={styles.image}
              onError={handleImageError}  // ← Tambahkan handler error
            />
            <div className={styles.content}>
              <h3>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkGithub}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}