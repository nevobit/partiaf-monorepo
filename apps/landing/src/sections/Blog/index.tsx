import React from 'react';
import styles from './Blog.module.css';
import Image from 'next/image';

const Blog = () => {
  return (
    <section className={styles.commitment}>
      <div className={styles.container}>
        <h2>Nuestro Blog</h2>
        <p className={styles.copy}>
          Explora nuestro blog y descubre contenido inspirador, consejos útiles
          y las últimas tendencias para que puedas mantenerte al día y
          aprovechar al máximo tus experiencias
        </p>

        <div className={styles.options}>
          <div>
            <Image
              src="/img1.png"
              width={300}
              height={250}
              style={{
                objectFit: 'cover',
                borderRadius: 10,
              }}
              alt="Partiaf Party"
            />
            <h3>Experiencias Inmersivas</h3>
            <p>
              Mantente al tanto de las actividades de tus amigos y descubre los
              planes más emocionantes de la ciudad. Con nuestra aplicación,
              estarás siempre en el centro de la acción
            </p>
          </div>
          <div>
            <Image
              src="/img2.jpg"
              width={300}
              height={250}
              alt="Partiaf Party"
              style={{
                objectFit: 'cover',
                borderRadius: 10,
              }}
            />

            <h3>Debuta com un grande en las mejores fiestas de Colombia</h3>
            <p>
              Disfruta de acceso privilegiado a promociones especiales y
              aprovecha la comodidad de realizar tus compras en los lugares más
              destacados. Nuestra aplicación te brinda beneficios únicos y
              experiencias de compra inigualables
            </p>
          </div>
          <div>
            <Image
              src="/img3.jpg"
              width={300}
              height={250}
              alt="Partiaf Party"
              style={{
                objectFit: 'cover',
                borderRadius: 10,
              }}
            />

            <h3>Evento sin ninguna duda</h3>
            <p>
              Obtén beneficios exclusivos en los lugares aliados a Partiaf.
              Disfruta de descuentos, regalos y experiencias especiales en cada
              visita. Con nuestra aplicación, tus salidas serán aún más
              gratificantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
