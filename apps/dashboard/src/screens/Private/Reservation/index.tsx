import React from 'react'
import styles from "./reservation.module.css"
import SearchBar from '@/components/Shared/SearchBar'
import Button from '@/components/Shared/Button'
import ReservationTotals from '@/components/Shared/ReservationTotals'

const Reservation = () => {

  // this is only example of data

  const totals = [

  ]

  // example data end
 

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
        <div className={styles.totals}>
          <ReservationTotals title='Total de reservas' totals="05"/>
          <ReservationTotals title='Sillas disponibles' totals="10"/>
          <ReservationTotals title='Mesas disponibles'totals="10"/>  
            
        </div>
    </div>
  )
}

export default Reservation