import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo Partiaf" height={50} width={150} />
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/">Ubicaciones</Link>
          <Link href="/">FAQs</Link>
          <Link href="/">Sobre nosotros</Link>
        </nav>
        <Link href="/soonorofest">Soonoro Fest</Link>

      </div>
    </header>
  );
};

export default Header;
