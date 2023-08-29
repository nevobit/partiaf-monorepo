import React from 'react'
import styles from "./principal.module.css"
import Nav from '../Nav'

const Principal = ({children}:any) => {
  return (
    <div className={styles.body}>
        {/* <Nav/> */}
        {children}
    </div>
  )
}

export default Principal