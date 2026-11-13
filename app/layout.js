import './styles/globals.css'

export const metadata = {
  title: 'Portfolio - Nama Anda',
  description: 'Portfolio pribadi untuk keperluan PKL',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}