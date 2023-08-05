import styles from './Layout.module.scss'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  )
}
