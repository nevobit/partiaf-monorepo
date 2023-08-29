import Loader from '../Loader';
import styles from './Button.module.css';
import google from "../../../../public/icons/icon-google.svg"
import facebook from "../../../../public/icons/icon-facebook.svg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cancel' | 'third' | 'danger' | 'gray' | 'dark'| 'facebook'| 'google';
  className?: string;
  children?: React.ReactNode
  loading?: boolean;
}

const Button = ({ children, variant = 'primary', className = '', loading, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...rest}

>   {variant == "facebook" && <img className={styles.icon} src={facebook}/>}
    {variant == "google" && <img className={styles.icon} src={google}/>}
    {loading ? <Loader small={true} /> :
      <>
        {children}
      </>
    }
    </button>
  );
};

export default Button;