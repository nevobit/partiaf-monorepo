import { ReactNode, useState, useEffect } from 'react'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'  
import styles from './Input.module.css'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  variant?: 'normal' | 'checkbox' | 'password';
  icon?: ReactNode
  className?: string
  children?: React.ReactNode
  type?: 'text' | 'checkbox' | 'password';

}

const Input = ({icon, type, children, variant = 'normal', className, ...rest}: InputProps) => {
  
  const [showPss, setshowPss] = useState(eyeOff)
  const [typePss, setTypePss] = useState('text')

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
  if(variant === 'password'){
    setTypePss('password')
  }
 },[])

  
  return (
    <div className={`${ variant == 'checkbox' ? styles.checkbox : styles.input}`}>
      {icon && icon }
      <input type={typePss} {...rest} className={`${variant == 'checkbox' ? styles.input_checkbox : styles.input_element} `} > 
      </input>
      {variant == "password" && <span className={styles.eye_icon} onClick={hangleShow}><Icon icon={showPss} size={25}/></span>}
      {variant == "checkbox" && <p>Recuerdame</p>}
    </div>
  )
}

export default Input



// ${className == 'none' && styles.input_none}