import React from 'react'
import styles from "./copyright.module.css"

interface props {
    variant?: 'normal' | 'secundary' ;
  }

const Copyright = ({variant = 'normal'}: props) => {
  return (
    <div className={`${styles.body} ${styles[variant]}`}
    >© Todos los derechos reservados</div>
  )
}

export default Copyright