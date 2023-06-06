import { ReactNode, useState, useEffect } from 'react'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'  
import styles from './input.module.css'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  variant?: 'normal' | 'checkbox' | 'password' |'text' | 'date' | 'datetime';
  icon?: ReactNode
  className?: string
  children?: React.ReactNode
  type?: 'text' | 'checkbox' | 'password' | 'date' | 'datetime';
  label?: string

}

const Input = ({label,icon, type, children, variant = 'normal', className, ...rest}: InputProps) => {
  
  const [showPss, setshowPss] = useState(eyeOff)
  const [typePss, setTypePss] = useState(variant)

  const hangleShow = (event: React.MouseEvent<HTMLButtonElement>)=>{
if (typePss === 'password'){
  setshowPss(eye)
  setTypePss('text')
} else{
  setshowPss(eyeOff)
  setTypePss('password')
}
  }


 useEffect(()=>{
  if(variant){
    setTypePss(variant)
  }
 },[])

  
  return (
    <div className={`${variant == "checkbox" ? styles.box : styles.input}`}>
      {icon && icon }
      <input type={typePss} {...rest} className={`${variant == 'checkbox' ? styles.input_checkbox : styles.input_element} `} > 
      </input>
      {variant == "password" && <span className={styles.eye_icon} onClick={hangleShow}><Icon icon={showPss} size={20}/></span>}
      <div className={styles.label}>{children}</div>
    </div>
  )
}

export default Input



// ${className == 'none' && styles.input_none}