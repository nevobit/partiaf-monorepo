import React, {useState, useEffect} from 'react'
import styles from "./tableInfoTr.module.css"
import Button from '../Button';
import eye from "../../../../public/icons/icon_eye.svg"

interface Table  {
  
    buttonClick?: any
    seeDetail?: (e: React.MouseEvent)=> void;
    setDetail?: (e: React.MouseEvent)=> void;
    detail?: boolean;
    data: Data;
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

const TableInfoTr = ({detail, seeDetail,setDetail, data:{id, user_picture, name, user, date, hour, ticket, ticketValue, ticketState}, ...rest }: Table) => {
  
   const [activate, setActivate]= useState(false)


  //  useEffect(()=>{
  //   console.log(detail)
  //   setActivate(!activate)
  //  },[detail])

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
      <td className={styles.td} onClick={()=>{setActivate(!activate)}}>
      <Button onClick={seeDetail} variant='dark'>ver reserva <img src={eye}/></Button>
      </td>
    </tr>
  )
}

export default TableInfoTr