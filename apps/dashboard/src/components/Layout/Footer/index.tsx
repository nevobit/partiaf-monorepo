import React from 'react'
import Copyright from '@/components/Shared/Copyright'
import styles from "./footer.module.css"




const Footer = () => {
  return (
    <div className={styles.body}>
        <Copyright/>
    </div>
  )
}

export default Footer