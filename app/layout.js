import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import styles from "../css/body.module.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rohit Jha',
  description: 'Rohit Jha is a DevOps Engineer based in India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.html}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={inter.url} />
      </head>
      <body className={styles.body}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
