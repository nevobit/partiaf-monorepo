import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div>
        <h2>Uniendo a la gente, una fiesta a la vez</h2>
        <p>
          Una nueva forma de salir a divertirte y hacer cada noche inolvidable
        </p>
        <div className={styles.stores}>
          <Image
            src="/app-store-logo.png"
            width={150}
            height={40}
            alt="App Store logo"
          />
          <Image
            src="/playstore-logo.png"
            width={150}
            height={30}
            alt="App Store logo"
          />
        </div>
      </div>
      <Image src="/banner.png" width={300} height={300} alt="Partiaf Banner" />
    </section>
  );
};

export default Banner;
