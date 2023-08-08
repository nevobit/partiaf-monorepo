import Field from '@/components/Shared/Field'
import Input from '@/components/Shared/Input'
import React, { useState } from 'react'
import styles from './Create.module.css'
import Button from '@/components/Shared/Button'
import { Upload } from 'react-feather'
import Loader from '@/components/Shared/Loader'
import { useUploadImage } from '@/hooks/useUploadImage'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTicket } from '@/services/tickets'

const CreateTicket = ({setOpen}: any) => {
    const store = JSON.parse(localStorage.getItem('store') || "") 
    const {isLoading, urls, uploadImage} = useUploadImage();
    const [cover, setCover] = useState({
        name: "",
        type: "General",
        date: "",
        limit: 0,
        initial_limit: 0,
        hour: "",
        description: "",
        image: "",
        store: store.id,
        percentage: 0,
        status: "active",
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
    const {isLoading: isCreating, mutate} = useMutation({
      mutationFn: () => createTicket(cover),
      onSuccess: () => {
        alert("Creado correctamente")
        // Trae la data actualizada de la base da datos con el nuevo elemento
        queryClient.invalidateQueries({
          queryKey: ['tickets']
        });
        setOpen(false)
      },
      onError: (err) => {
        alert(JSON.stringify(err))
      }
    })
  return (
    <div className={styles.overlay}>
        <div className={styles.container}>
        <div className={styles.header}>
            <h2>Crear Ticket</h2>
        </div>
        <div className={styles.main}>
        <div>

        <Field label='Nombre'>
            <Input name='name' />
        </Field>
        <Field label="Cupo total">
                    <Input
                      name="limit"
                      value={cover.limit}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Tipo">
                    <select name="type" onChange={handleChange}>
                      <option value="General">General</option>
                      <option value="VIP">VIP</option>
                    </select>
                  </Field>
                  <Field label="Fecha">
                    <Input type="date" name="date" onChange={handleChange} />
                  </Field>
                  <Field label="Hora">
                    <Input
                      name="hour"
                      value={cover.hour}
                      onChange={handleChange}
                    />
                  </Field>

                  <Field label="Precio">
                    <Input
                      type="text"
                    />
                  </Field>
        </div>
        <div className={styles.ima}>

        <h3>Imagen del producto</h3>
                <p>
                  Sube una imagen de tu producto. Podrás utilizarla en documentos
                  y el el catálogo de Helebba.
                </p>

                <div className={styles.file_input}>
                  <input
                    type="file"
                    name="image" 
                    id="image" 
                    accept=".png,.jpg,.jpeg,.svg"
                    onChange={uploadHandler}
                  />
                  {isLoading  && urls.length < 1 && ( <div className={styles.loader_container}><Loader small /></div>) }
                  {urls.length < 1 && !isLoading? (
                    
                  <label htmlFor="image">
                    <div className={styles.input_box}>
                      <Upload size={20} />
                      <span>Selecciona o arrastra aquí tus archivos</span>
                    </div>
                    <div className={styles.file_types}>
                      <span>
                        Archivos permitidos: .png, .jpg, .jpeg
                      </span>
                    </div>
                  </label>
                  ): ( 
                    <img className={styles.main_image} src={urls[0]} alt=""  />
                  )}
                </div>
                <div className={styles.other_images}>
                {urls.slice(1).map((photo: string) => (
                    <img key={photo} className={styles.second_image} src={photo} style={{
                      objectFit: 'contain'
                    }} />
                ) )} 
                {urls.length >= 1 && (
                        <label htmlFor="image">
                        <div className={styles.input_box_mini}>
                           {isLoading ? <Loader small /> : (
                           <Upload size={20} />
                            
                           )}
                        </div>
                      </label>
                    )}    
                </div>
        </div>

        </div>

        <div className={styles.footer}>
            <Button onClick={() => mutate()}>Crear</Button>
        </div>
        </div>

    </div>
  )
}

export default CreateTicket