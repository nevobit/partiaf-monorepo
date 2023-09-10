import { useState } from 'react';

type FormState<T> = T;

export const useForm = <T extends Record<string, any>>(initialState: T) => {
  const [formState, setFormState] = useState<FormState<T>>(initialState);

  const handleChange = (name: keyof T, value: T[keyof T]) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formState,
    handleChange,
  };
};
