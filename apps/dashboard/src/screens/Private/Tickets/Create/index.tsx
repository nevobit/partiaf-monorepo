import Field from "@/components/Shared/Field";
import Input from "@/components/Shared/Input";
import React, { useState } from "react";
import styles from "./Create.module.css";
import Button from "@/components/Shared/Button";
import { Upload } from "react-feather";
import Loader from "@/components/Shared/Loader";
import { useUploadImage } from "@/hooks/useUploadImage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket } from "@/services/tickets";
import Textarea from "@/components/Shared/Textarea";
import AlertCpt from "@/components/Alert";
import { useValidationHook } from "@/hooks/useValidationHook";

const CreateTicket = ({ setOpen }: any) => {
  const store = JSON.parse(localStorage.getItem("store") || "");
  const { isLoading, urls, url, uploadImage } = useUploadImage();
  const { showAlert, alertMessage, validateForm, setShowAlert } =
    useValidationHook();

  const [cover, setCover] = useState({
    name: "",
    type: "General",
    price: 0,
    date: "",
    limit: 0,
    initial_limit: 0,
    hour: "",
    description: "",
    image: "",
    store: store.id,
    percentage: 0,
    location: { lat: 0, lng: 0 },
  });

  const uploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    uploadImage(event.target.files![0]);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCover((prev) => ({ ...prev, [name]: value }));
  };

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: () => createTicket({ ...cover, image: url }),
    onSuccess: () => {
      alert("Creado correctamente");
      // Trae la data actualizada de la base da datos con el nuevo elemento
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
      setOpen(false);
    },
    onError: (err) => {
      alert(JSON.stringify(err));
    },
  });

  const handleSubmit = () => {
    const isFormValid = validateForm(cover, url);
    if (isFormValid) {
      mutate();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Crear Ticket</h2>
          <Button onClick={() => setOpen(!open)} variant="dark">
            Cerrar
          </Button>
        </div>
        <div className={styles.main}>
          <div>
            <div className={styles.div_items}>
              <Field label="Nombre" error="el campo nombre es requerido">
                <Input name="name" value={cover.name} onChange={handleChange} />
              </Field>
              <Field label="Tipo">
                <select name="type" onChange={handleChange}>
                  <option value="General">General</option>
                  <option value="VIP">VIP</option>
                </select>
              </Field>
            </div>

            <div className={styles.div_items}>
              <Field label="Precio">
                <Input
                  type="number"
                  name="price"
                  value={cover.price}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Cupo total">
                <Input
                  name="limit"
                  value={cover.limit}
                  onChange={handleChange}
                  required
                />
              </Field>
            </div>

            <div className={styles.div_items}>
              <Field label="Fecha">
                <Input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Hora">
                <Input
                  name="hour"
                  type="datetime"
                  value={cover.hour}
                  onChange={handleChange}
                  required
                />
              </Field>
            </div>
            <Field label="Descripcion">
              <Textarea
                name="description"
                value={cover.description}
                onChange={handleChange}
              />
            </Field>
          </div>
          <div className={styles.ima}>
            <h3>Imagen del producto</h3>
            <p>
              Sube una imagen de tu producto. Podrás utilizarla en documentos y
              el el catálogo de Helebba.
            </p>

            <div className={styles.file_input}>
              <input
                type="file"
                name="image"
                id="image"
                accept=".png,.jpg,.jpeg,.svg"
                onChange={uploadHandler}
              />
              {isLoading && urls.length < 1 && (
                <div className={styles.loader_container}>
                  <Loader small />
                </div>
              )}
              {urls.length < 1 && !isLoading ? (
                <label htmlFor="image">
                  <div className={styles.input_box}>
                    <Upload size={20} />
                    <span>Selecciona o arrastra aquí tus archivos</span>
                  </div>
                  <div className={styles.file_types}>
                    <span>Archivos permitidos: .png, .jpg, .jpeg</span>
                  </div>
                </label>
              ) : (
                <img className={styles.main_image} src={urls[0]} alt="" />
              )}
            </div>
            <div className={styles.other_images}>
              {urls.slice(1).map((photo: string) => (
                <img
                  key={photo}
                  className={styles.second_image}
                  src={photo}
                  style={{
                    objectFit: "contain",
                  }}
                />
              ))}
              {urls.length >= 1 && (
                <label htmlFor="image">
                  <div className={styles.input_box_mini}>
                    {isLoading ? <Loader small /> : <Upload size={20} />}
                  </div>
                </label>
              )}
            </div>
          </div>
        </div>

        {showAlert && (
          <AlertCpt
            message={alertMessage}
            onClose={() => setShowAlert(false)}
          />
        )}

        <div className={styles.footer}>
          <Button onClick={handleSubmit}>Crear</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
