import React, {useState, useEffect} from 'react'
import styles from "./tableInfoTr.module.css"
import Button from '../Button';
import eye from "../../../../public/icons/icon_eye.svg"
import { Link , useLocation} from 'react-router-dom';

interface Table  {
  
    buttonClick?: any
    seeDetail?: (e: React.MouseEvent)=> void;
    setDetail?: (e: React.MouseEvent)=> void;
    detail?: boolean;
    data: Data;
    action?: string;
  }

  interface Data{
    name?:  string;
    user?:  string;
    date?: string;
    hour?: string;
    ticket?: string;
    ticketValue?: number;
    ticketState?: string;
    user_picture: string; 
    id: string;
  }

const TableInfoTr = ({action, detail, seeDetail,setDetail, data:{id, user_picture, name, user, date, hour, ticket, ticketValue, ticketState}, ...rest }: Table) => {
  

  const location = useLocation()
   const [activate, setActivate]= useState(false)
   const [actualLocation, setctualLocation]= useState(location.pathname)


    return (
    <tr key={id} className={`${styles.tr}  ${activate ? styles.activate : ""}`}>
      <td className={`${styles.td_picture}`}>
        <img src={user_picture} className={styles.picture}/>
        <div className={styles.picture_details}>
        <h2 className={styles.h2}>{name}</h2>
        <p className={styles.p}>{user}</p>
        </div>
      </td>
      <td className={styles.td}>
        <h2 className={styles.h2}>{date}</h2>
        <p className={styles.p}>Fecha de la reserva</p>
      </td>
      <td className={styles.td}>
        <h2 className={styles.h2}>{hour}</h2>
        <p className={styles.p}>Hora de la reserva</p>
      </td>
      {ticketValue &&
      <td className={styles.td}>
      <h2 className={styles.h2}>{`$${ticketValue}`}</h2>
      <p className={styles.p}>Valor total del ticket</p>
    </td>}
      {ticket &&
      <td className={styles.td}>
      <h2 className={styles.h2}>{ticket}</h2>
      <p className={styles.p}>Ticket</p>
    </td>}
    {ticket &&
      <td className={styles.td}>
      <h2 className={styles.h2}>{ticketState}</h2>
      <p className={styles.p}>Estado del ticket</p>
    </td>}
      <td className={styles.td} onClick={()=>{setActivate(!activate)}}>
        {/* <Link to={`${actualLocation}/${id}`}> */}
      <Button onClick={seeDetail} variant='dark'>{action} <img src={eye}/></Button>
      {/* </Link> */}
      </td>
    </tr>
  )
}

export default TableInfoTr