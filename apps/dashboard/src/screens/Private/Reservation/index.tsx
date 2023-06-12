import React from 'react'
import styles from "./reservation.module.css"
import SearchBar from '@/components/Shared/SearchBar'
import Button from '@/components/Shared/Button'

const Reservation = () => {
  return (
    <div className={styles.body}>
        <div className={styles.header}>
            <h2 className={styles.title}>
                Reserva con nosotros
            </h2>
            <div className={styles.header_options}>
                <SearchBar className={styles.header_buttons}/>
                <Button 
                className={styles.header_buttons}
                variant='secondary'
                >Configuracion de la reserva</Button>
            </div>
        </div>
    </div>
  )
}

export default Reservation