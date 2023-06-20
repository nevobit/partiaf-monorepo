import React from 'react'
import styles from "./header.module.css"
import logo from "../../../../public/logo-partiaf-neg.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.body}>
        <div className={styles.logo_section}>
            <img src={logo} className={styles.logo}/>
        </div>
        <div className={styles.options}>

        </div>
    </div>
  )
}

export default Header
