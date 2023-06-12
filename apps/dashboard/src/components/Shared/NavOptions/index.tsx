import Loader from '../Loader';
import React from 'react'
import styles from "./navOptions.module.css"
import { Link } from 'react-router-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'cancel' | 'third' | 'danger' | 'gray' | 'dark'| 'facebook'| 'google';
    className?: string;
    children?: any;
    loading?: boolean;
  }


const NavOptions = ({children, loading, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
    {loading ? <Loader small={true} /> :
      <>
        {children}
      </>
    }
  </button>
  )
}

export default NavOptions