import Loader from '../Loader';
import React , {useEffect, useState} from 'react'
import styles from "./navOptions.module.css"
import { useLocation } from 'react-router-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'cancel' | 'third' | 'danger' | 'gray' | 'dark'| 'facebook'| 'google';
    className?: string;
    children?: any;
    loading?: boolean;
    tittle?: string
  }


const NavOptions = ({children, tittle, loading, ...rest }: ButtonProps) => {

  const sampleLocation = useLocation();
  const [currentRoute, setCurrentRoute] = useState()
  
  

  useEffect(()=>{
      let ruta = sampleLocation.pathname.slice(1)
      
      console.log(`la ruta es:${sampleLocation.pathname}`)
      console.log(`el componente es:${tittle}`)
  },[sampleLocation])
  
  return (
    <button className={`${styles.button} 
    ${sampleLocation.pathname === `/${tittle}` ? styles.active : ""}`
    
    } {...rest}>
        {children}
  </button>
  )
}

export default NavOptions