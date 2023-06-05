import { ReactNode } from 'react'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  variant?: 'normal' | 'checkbox' ;
  icon?: ReactNode
  className?: string

}

const Input = ({icon, variant = 'normal', className, ...rest}: InputProps) => {
  return (
    <div className={`${ variant != 'checkbox' ? styles.input : ""}`}>
      {icon && icon }
      <input {...rest} className={`${styles.input_element} ${className == 'none' && styles.input_none}`}  />
    </div>
  )
}

export default Input