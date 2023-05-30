import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Layout } from '@/components';
import { Banner, Blog, Commitment } from '@/sections';

const Home: NextPage = () => {
  return (
    <Layout title="Fiesta">
      <Banner />
      <Commitment />

      <section className={styles.download}>
        <div className={styles.container}>
          <div className={styles.picture}>
            <Image
              src="/capture.png"
              width={240}
              height={470}
              alt="Partiaf App"
            />
          </div>
          <div>
            <h2>Descarga la App Hoy</h2>
            <span>
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
            </span>
          </div>
        </div>
      </section>

      <Blog />
    </Layout>
  );
};

export default Home;
