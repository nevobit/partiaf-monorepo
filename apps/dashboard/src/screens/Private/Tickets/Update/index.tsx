import Field from "@/components/Shared/Field";
import Input from "@/components/Shared/Input";
import React, { useEffect } from "react";
import styles from "./Update.module.css";
import Button from "@/components/Shared/Button";
import { Upload } from "react-feather";
import Loader from "@/components/Shared/Loader";
import { useUploadImage } from "@/hooks/useUploadImage";
import Textarea from "@/components/Shared/Textarea";
import { useUpdateTicket } from "@/hooks/tickets";
import { useForm } from "@/hooks/form/useForm";
import { Ticket } from "@partiaf/entities";

interface Props {
  setOpen: Function;
  cover: Ticket;
}

const UpdateTicket = ({ setOpen, cover }: Props) => {
  const { isLoading, urls, url, uploadImage } = useUploadImage();
  const { isUpdating, updateTicket, isSuccess } = useUpdateTicket();

  const { formState, handleChange } = useForm({
    name: cover.name,
    type: cover.type,
    price: cover.price,
    date: cover.date,
    limit: cover.limit,
    initial_limit: cover.initial_limit,
    hour: cover.hour,
    description: cover.description,
    image: cover.image,
    store: cover.store,
    percentage: cover.percentage,
    location: cover.location,
  });

  const uploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      uploadImage(file);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Actualizar Ticket</h2>
          <Button onClick={() => setOpen(!open)} variant="dark">
            Cerrar
          </Button>
        </div>
        <div className={styles.main}>
          <div>
            <div className={styles.div_items}>
              <Field label="Nombre">
                <Input
                  name="name"
                  value={formState.name}
                  onChange={({target}) => handleChange('name', target.value)}
                />
              </Field>
              <Field label="Tipo">
                <select name="type" onChange={({target}) => handleChange('type', target.value)}>
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
                  value={formState.price}
                  onChange={({target}) => handleChange('price', target.value)}
                  required
                />
              </Field>
              <Field label="Cupo total">
                <Input
                  name="limit"
                  value={formState.limit}
                  onChange={({target}) => handleChange('limit', target.value)}
                  required
                />
              </Field>
            </div>

            <div className={styles.div_items}>
              <Field label="Fecha">
                <Input
                  type="date"
                  name="date"
                  onChange={({target}) => handleChange('date', target.value)}
                  required
                />
              </Field>
              <Field label="Hora">
                <Input
                  name="hour"
                  type="time"
                  value={formState.hour}
                  onChange={({target}) => handleChange('hour', target.value)}
                  required
                />
              </Field>
            </div>
            <Field label="Descripcion">
              <Textarea
                name="description"
                value={formState.description}
                onChange={({target}) => handleChange('description', target.value)}
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

        <div className={styles.footer}>
          <Button
            loading={isUpdating}
            onClick={() =>
              updateTicket({
                ...formState,
                image: url === "" ? cover.image : url,
                id: cover.id,
              })
            }
          >
            Actualizar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTicket;
