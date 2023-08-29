import { ReactNode, useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import styles from "./Input.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?:
    | "normal"
    | "checkbox"
    | "password"
    | "text"
    | "date"
    | "datetime"
    | "phoneNumber"
    | "phoneCountry"
    | "number";
  icon?: ReactNode;
  className?: string;
  children?: React.ReactNode;
  type?:
    | "text"
    | "checkbox"
    | "password"
    | "date"
    | "datetime"
    | "phoneNumber"
    | "number";
  label?: string;
  ref?: React.MutableRefObject<boolean>;
}

const Input = ({
  ref,
  label,
  icon,
  type,
  children,
  variant = "normal",
  className,
  ...rest
}: InputProps) => {
  const [showPss, setshowPss] = useState(eyeOff);
  const [typePss, setTypePss] = useState(variant);
  const [country, setCountry] = useState("US");

  const hangleShow = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typePss === "password") {
      setshowPss(eye);
      setTypePss("text");
    } else {
      setshowPss(eyeOff);
      setTypePss("password");
    }
  };

  useEffect(() => {
    if (variant) {
      setTypePss(variant);
      setCountry("US");
    }
  }, []);

  return (
    <>
      <div className={`${variant == "checkbox" ? styles.box : styles.input}`}>
        {icon && icon}
        {variant == "phoneCountry" && (
          <div className={styles.country}>
            <PhoneInput
              placeholder={country}
              value={country}
              onChange={(value: any) => {
                setCountry(value);
              }}
              country={country}
            />
          </div>
        )}

        <input
          type={typePss}
          {...rest}
          className={`${
            variant == "checkbox" ? styles.input_checkbox : styles.input_element
          } `}
        ></input>

        {variant == "password" && (
          <span className={styles.eye_icon} onClick={hangleShow}>
            <Icon icon={showPss} size={20} />
          </span>
        )}
        <div className={styles.label}>{children}</div>
      </div>
    </>
  );
};

export default Input;

// ${className == 'none' && styles.input_none}
