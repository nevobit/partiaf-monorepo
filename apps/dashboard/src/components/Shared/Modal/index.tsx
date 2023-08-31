import React from 'react'
import styles from "./modal.module.css"
import { useParams } from 'react-router-dom';

interface Props  {
  
  activeModal?: (e: React.MouseEvent)=> void;
}

const Modal = ({activeModal}: Props) => {
  const {id} = useParams()
  return (
    <div className={styles.box}>
      <div className={styles.body}>
        <button onClick={activeModal} className={styles.button}>X</button>
        <h1>{id}</h1>
      </div>
      
    </div>
  )
}

export default Modal