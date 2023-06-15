import React from 'react'
import styles from "./welcomeReservation.module.css"
import happyFace from "../../../../public/img/Happy face_Flatline.png"


const WelcomeReservation = () => {
  return (
    <div className={styles.body}>
               <h3 className={styles.title}>!Bienvenido a reservas!</h3>
            <img src={happyFace}/>
            <h3>Para comenzar debes elegir una reserva.</h3>


    </div>
  )
}

export default WelcomeReservation