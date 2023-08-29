import React from 'react'
import styles from "./reservationDetails.module.css"


interface Props{
  data?:Data;
}

interface Data{
  name?:  string;
  user?:  string;
  date?: string;
  hour?: string;
  ticket?: string;
  ticketValue?: number;
  ticketState?: string;
  user_picture?: string; 
  id?: string;
  phoneNumber?: string;
  table?: number;
  chair?: number;

}

const ReservationDetails = ({data}: Props) => {
  return (
    <div className={styles.body}>
      {data?.id && <div> id: {data?.id}</div>
        }
        
    </div>
  )
}

export default ReservationDetails