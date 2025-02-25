
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link> | 
        <Link href="/recipesCSR" className={styles.link}>Recipes CSR</Link> | 
        <Link href="/productsSSR" className={styles.link}>Products SSR</Link> | 
        <Link href="/postsISR" className={styles.link}>Posts ISR</Link>
      </nav>
    </header>
  );
}
