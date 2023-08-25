import React, { useEffect, useState } from "react";
import styles from "./Alert.module.css";
import Button from "../Shared/Button";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const AlertCpt: React.FC<AlertProps> = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldFadeOut(true);
      onClose();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  const handleTransitionEnd = () => {
    if (shouldFadeOut) {
      setIsVisible(false);
    }
  };

  return isVisible ? (
    <div
      className={`${styles.alert} ${
        shouldFadeOut ? styles.fadeOut : styles.scale
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles.cnt_alert}>
        <p>{message}</p>
      </div>
    </div>
  ) : null;
};

export default AlertCpt;
