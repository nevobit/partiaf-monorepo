import { Layout } from '@/components'
import React from 'react'
import styles from './Support.module.css'
import Image from 'next/image'

const Support = () => {
    return (
        <Layout title="Soporte">
            <div>
                <h2 className={styles.title}>Soporte</h2>
                <p className={styles.copy}>Encuentra artículos adicionales de soporte al cliente y preguntas frecuentes</p>
                <div className={styles.picture}>
                    <Image src='/customer-support.avif' width={550} height={350} alt='Imagen soporte' />
                </div>
            </div>

            <div className={styles.container}>
                <div>
                    <h2>Contacto</h2>
                    <a href="https://api.whatsapp.com/send?phone=+573133594742&text=Hola%20Quisiera%20Hablar%20Con%20El%20Soporte" target="_blank">
        <button>Contactar a Soporte por WhatsApp</button>
    </a>

                    <p className={styles.office}>Oficina</p>
                    <h4>Telefono</h4>
                    <p>+57 3133594742</p>

                    <h4>Soporte</h4>
                    <p>+57 3226589914</p>
                    <h5>Horario de atencion al cliente</h5>

                    <p>Lunes - Viernes: 8:00AM - 6:00PM </p>

                    <h4>Calendario de días festivos en Colombia</h4>
                    <ul>
                        <li>Año Nuevo - 01/01</li>
                        <li>Día de los Reyes Magos - 01/06</li>
                        <li>Día de San José - 03/19</li>
                        <li>Jueves Santo - 04/13</li>
                        <li>Viernes Santo - 04/14</li>
                        <li>Domingo de Resurrección - 04/16</li>
                        <li>Día del Trabajo - 05/01</li>
                        <li>Día de la Ascensión - 05/25</li>
                        <li>Corpus Christi - 06/15</li>
                        <li>Sagrado Corazón - 06/23</li>
                        <li>San Pedro y San Pablo - 06/29</li>
                        <li>Día de la Independencia - 07/20</li>
                        <li>Batalla de Boyacá - 08/07</li>
                        <li>Asunción de la Virgen - 08/15</li>
                        <li>Día de la Raza - 10/12</li>
                        <li>Todos los Santos - 11/01</li>
                        <li>Independencia de Cartagena - 11/11</li>
                        <li>Día de la Inmaculada Concepción - 12/08</li>
                        <li>Nochebuena - 12/24</li>
                        <li>Navidad - 12/25</li>
                        <li>Nochevieja - 12/31</li>
                    </ul>


                    <p className={styles.message}>Si está teniendo problemas para comunicarse con nosotros por teléfono, le recomendamos que se ponga en contacto a través de WhatsApp. Nuestro equipo estará encantado de ayudarle y proporcionarle el soporte que necesite para resolver cualquier duda o problema que pueda tener. Agradecemos sinceramente su paciencia y comprensión en este momento. ¡Gracias por elegir nuestra aplicación! 💛</p>
                </div>
                <div className={styles.grid}>
        <div className={styles.column}>
            <h2>ACTITUD DE GANAR-GANAR</h2>
            <p>Ponemos a nuestros clientes en primer lugar. Nuestra misión es proporcionar a nuestros clientes una solución ganadora en respuesta a sus solicitudes de soporte al cliente.</p>

            <h2>¡SERVICIO ASOMBROSO!</h2>
            <p>Creemos que hay un servicio por encima y más allá de lo que existe como norma. Nos esforzamos por ofrecer más y superar las expectativas en la satisfacción del consumidor.</p>

            <h2>TRABAJO EN EQUIPO</h2>
            <p>Nuestro trabajo en equipo inspira a las personas a hacer sus mejores aportes: compartimos lecciones aprendidas, identificamos áreas para mejorar y celebramos nuestros logros compartidos.</p>
        </div>
        <div className={styles.column}>
            <h2>SER HUMILDE</h2>
            <p>Nosotros mismos somos jugadores y respetamos a la comunidad de la que venimos. Esto nos mantiene humildes y nos recuerda seguir mejorando.</p>

            <h2>EFICIENCIA Y CALIDAD</h2>
            <p>Es importante para nosotros que nuestro servicio al cliente sea confiable, receptivo, rápido en el seguimiento y ofrezca herramientas de autoayuda fáciles de usar.</p>
        </div>
    </div>

            </div>

            

        </Layout>
    )
}

export default Support