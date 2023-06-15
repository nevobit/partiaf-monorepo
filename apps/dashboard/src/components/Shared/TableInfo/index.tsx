import React from 'react'
import styles from "./tableInfo.module.css"
import TableInfoTr from '../TableInfoTr';

interface Table  {
   
    data?:{ name: string; user: string; date: string; hour: string; value: number; ticket: string; ticketState: string; }[];
  }

const TableInfo = ({ data, ...rest }: Table) => {
  
  console.log(data)
  
    return (

    <table className={styles.table}>
        <tbody className={styles.tbody}>
        {data.map((tr)=>{
            return (<TableInfoTr data={tr}/>)
        })}

        </tbody>
      
    </table>
  )
}

export default TableInfo