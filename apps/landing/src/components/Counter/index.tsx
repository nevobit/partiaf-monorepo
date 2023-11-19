import React, { useEffect, useState } from 'react';
import styles from "./Counter.module.css"

const Counter: React.FC = () => {
  const [tiempoRestante, setTiempoRestante] = useState<{ dias: number; horas: number; minutos: number; segundos: number } | null>(
    null
  );

  useEffect(() => {
    const hoy = new Date();
    const fechaObjetivo = new Date(hoy.getFullYear(), 11, 16);

    const calcularTiempoRestante = () => {
      const diferenciaEnMilisegundos = fechaObjetivo.getTime() - new Date().getTime();

      const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenciaEnMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenciaEnMilisegundos % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenciaEnMilisegundos % (1000 * 60)) / 1000);

      setTiempoRestante({ dias, horas, minutos, segundos });
    };

    // Calcular el tiempo restante al inicio
    calcularTiempoRestante();

    // Configurar el intervalo para actualizar el tiempo restante cada segundo
    const intervalo = setInterval(calcularTiempoRestante, 1000);

    return () => clearInterval(intervalo);
  }, []);

  

  return (
    <div>
      {tiempoRestante !== null ? (
        <>
        <div className={styles.container}>
            <div>
                <h2>{tiempoRestante.dias}</h2>
                <p>días</p>
            </div>
            <div>
                <h2>{tiempoRestante.horas}</h2>
                <p>horas</p>
            </div>
            <div>
                <h2>{tiempoRestante.minutos}</h2>
                <p>minutos</p>
            </div>
            <div>
                <h2>{tiempoRestante.segundos}</h2>
                <p>segundos</p>
            </div>
        </div>
        
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Counter;
