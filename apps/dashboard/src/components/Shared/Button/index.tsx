import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cancel';
}

const Button = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
