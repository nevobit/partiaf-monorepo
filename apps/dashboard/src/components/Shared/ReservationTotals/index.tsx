import React from 'react'
import styles from "./reservationTotals.module.css"


interface Props {
  variant?: 'normal' | 'checkbox' | 'password' |'text' | 'date' | 'datetime'|'phoneNumber' |'phoneCountry' |'number';
  className?: string
  title?: string
  totals?: string
  porcent?: number

}

const ReservationTotals = ( { className = '', title, totals, porcent = 12}: Props) => {
  return (
    <div className={`${styles.body} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.data}>
        <h3 className={styles.total}>{totals}</h3>
        {/* <div className={styles.porcents}>
            <h4 className={styles.porcents_text}>{`${porcent}%`}</h4>
        </div> */}
      </div>
    </div>
  )
}

export default ReservationTotals