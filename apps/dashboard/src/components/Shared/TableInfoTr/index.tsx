import React from 'react'
import styles from "./tableInfoTr.module.css"
import Button from '../Button';
import eye from "../../../../public/icons/icon_eye.svg"

interface Table  {
    data:{
    name?:  string;
    user?:  string;
    date?: string;
    hour?: string;
    ticket?: string;
    ticketValue?: number;
    ticketState?: string;
    },
    buttonClick?: any
  }

const TableInfoTr = ({buttonClick, data:{ name, user, date, hour, ticket, ticketValue, ticketState}, ...rest }: Table) => {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>
        <h2 className={styles.h2}>{name}</h2>
        <p>{user}</p>
      </td>
      <td className={styles.td}>
        <h2 className={styles.h2}>{date}</h2>
        <p>Fecha de la reserva</p>
      </td>
      <td className={styles.td}>
        <h2 className={styles.h2}>{hour}</h2>
        <p>Hora de la reserva</p>
      </td>
      <td className={styles.td}>
      <Button onClick={()=>{buttonClick}} variant='dark'>ver reserva <img src={eye}/></Button>
      </td>
    </tr>
  )
}

export default TableInfoTr