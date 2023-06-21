import React, { useEffect } from 'react'
import styles from "./tableInfo.module.css"
import TableInfoTr from '../TableInfoTr';

interface Table  {
    data?:Data[];
    seeDetail?: (e: React.MouseEvent)=> void;
    detail?: boolean;
    action?: string;
}

interface Data{
    user_picture: string; 
    id: string; 
    name: string; 
    user: string; 
    date: string; 
    hour: string; 
    ticketValue?: number; 
    ticket?: string; 
    ticketState?: string;
}

const TableInfo = ({action, detail,seeDetail,data, ...rest }: Table) => {
  
  
    return (

    <table className={styles.table} {...rest}>
        <tbody className={styles.tbody}>
        {data && data.map((tr)=>{
            return (<TableInfoTr detail={detail} data={tr} seeDetail={seeDetail} key={tr.id} action={action}/>)
        })}

        </tbody>
      
    </table>
  )
}

export default TableInfo