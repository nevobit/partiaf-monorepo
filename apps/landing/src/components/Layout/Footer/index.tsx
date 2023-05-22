import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.header}>
      <div className={styles.container}>
        <div className={styles.middle}>
          <Image src="/logo.svg" width={120} height={30} alt="Logo Partiaf" />
          <div>
            <span>Siguenos:</span>
            <span>
              <i className="bx bxl-facebook"></i>
            </span>
            <span>
              <i className="bx bxl-instagram"></i>
            </span>
            <span>
              <i className="bx bxl-tiktok"></i>
            </span>
          </div>
        </div>
        <div className={styles.last}>
          <nav className={styles.nav}>
            <Link href="/">Contactanos: hello@partiaf.com</Link>
            <Link href="/">Politica de Privacidad</Link>
            <Link href="/">Terminos y Condiciones</Link>
          </nav>
          <p>Copyright &copy; 2023 Partiaf. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
