import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div>
        <h2>Uniendo a la gente, una fiesta a la vez</h2>
        <p>
          Una nueva forma de salir a divertirte y hacer cada noche inolvidable
        </p>
        <div className={styles.stores}>
        <Link href='https://apps.apple.com/co/app/partiaf/id6450636147?l=en-GB'>
              <Image
                src="/app-store-logo.png"
                width={150}
                height={40}
                alt="App Store logo"
              />
            </Link>
          <Link href='https://play.google.com/store/apps/details?id=com.nevobit.partiaf'>

              <Image
                src="/playstore-logo.png"
                width={165}
                height={40}
                alt="App Store logo"
              />
          </Link>
        </div>
      </div>
      <div className={styles.picture}>
        <Image
          src="/banner_ph.png"
          width={390}
          height={390}
          alt="Partiaf Banner"
        />
      </div>
    </section>
  );
};

export default Banner;
