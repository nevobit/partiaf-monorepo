import { useState } from "react";

export function useValidationHook() {
  const [errors, setErrors] = useState<any>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const validateForm = (cover: any, url: string | null) => {
    if (!cover.name) {
      setShowAlert(true);
      setAlertMessage("El campo 'Nombre' es requerido.");
      return false;
    }

    if (!cover.price) {
      setShowAlert(true);
      setAlertMessage("El campo 'Precio' es requerido.");
      return false;
    }

    if (!url) {
      setShowAlert(true);
      setAlertMessage("Por favor, sube una imagen.");
      return false;
    }

    return true; 
  };

  return {
    errors,
    showAlert,
    alertMessage,
    validateForm,
    setShowAlert,
  };
}
