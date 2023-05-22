import React from 'react';
import styles from './Commitment.module.css';
import Image from 'next/image';

const Commitment = () => {
  return (
    <section className={styles.commitment}>
      <div className={styles.container}>
        <h2>
          El <span>Estilo Partiaf</span>
        </h2>
        <p className={styles.copy}>
          Estamos compometidos con brindarte una experiencia inigualable en tus
          fiestas y eventos. ¡Descubre cómo crear fiestas inolvidables y
          disfrutar al máximo con Partiaf.
        </p>

        <div className={styles.options}>
          <div>
            <Image
              src="/party.svg"
              width={200}
              height={200}
              alt="Partiaf Party"
            />
            <h3>Descubre y conecta con tus amigos y la vida nocturna</h3>
            <p>
              Mantente al tanto de las actividades de tus amigos y descubre los
              planes más emocionantes de la ciudad. Con nuestra aplicación,
              estarás siempre en el centro de la acción
            </p>
          </div>
          <div>
            <Image
              src="/offer.svg"
              width={250}
              height={200}
              alt="Partiaf Party"
            />

            <h3>
              Accede a promociones exclusivas y compra en los mejores lugares
            </h3>
            <p>
              Disfruta de acceso privilegiado a promociones especiales y
              aprovecha la comodidad de realizar tus compras en los lugares más
              destacados. Nuestra aplicación te brinda beneficios únicos y
              experiencias de compra inigualables
            </p>
          </div>
          <div>
            <Image
              src="/beer.svg"
              width={200}
              height={200}
              alt="Partiaf Party"
            />

            <h3>Beneficios exclusivos en nuestros lugares aliados</h3>
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

export default Commitment;
