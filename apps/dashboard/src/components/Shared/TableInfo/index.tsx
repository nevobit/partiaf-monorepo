import React, { useEffect } from 'react'
import styles from "./tableInfo.module.css"
import TableInfoTr from '../TableInfoTr';

interface Table  {
    data?:Data[];
    seeDetail?: (e: React.MouseEvent)=> void;
    detail?: boolean;
}

interface Data{
    user_picture: string; 
    id: string; 
    name: string; 
    user: string; 
    date: string; 
    hour: string; 
    value: number; 
    ticket: string; 
    ticketState: string;
}

const TableInfo = ({detail,seeDetail,data, ...rest }: Table) => {
  
  
    return (

    <table className={styles.table} {...rest}>
        <tbody className={styles.tbody}>
        {data && data.map((tr)=>{
            return (<TableInfoTr detail={detail} data={tr} seeDetail={seeDetail} key={tr.id}/>)
        })}

        </tbody>
      
    </table>
  )
}

export default TableInfo