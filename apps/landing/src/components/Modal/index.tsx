import React, { useState } from 'react';
import styles from './FormularioModal.module.css';
import axios from "axios";
import * as uuid from "uuid";

interface FormData {
  nombre: string;
  apellido: string;
  edad: string;
  telefono: string;
  correo: string;
}

const FormularioModal: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    correo: '',
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos o hacer lo que desees
    console.log('Datos enviados:', formData);
    // Cierra el modal después de enviar el formulario
    closeModal();
  };

  const createOrder = async (e: any) => {
    e.preventDefault()
    try{
      const { data } = await axios.post('https://partiaf-api.xyz/api/v3/create-order', {
        price: 50000,
        userId: uuid.v4()
      });
      const paymentUrl = data.init_point;

      // Abre el enlace en una nueva ventana o pestaña
      window.open(paymentUrl, '_blank');
    }catch(err:any){
      console.log(err)
      alert(`Ocurrio un error al intentar hacer el pago, ${err}`)
    }


  }

  return (
    <div>
      <h1></h1>
      <button className={styles.btn} onClick={openModal}>COMPRAR ENTRADA</button>

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2 className={styles.title}>Comprar ticket</h2>
            <form onSubmit={createOrder}>
              <label>
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </label>
              <label>
                Apellido:
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </label>
              <label>
                Edad:
                <input
                  type="number"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                />
              </label>
              <label>
                Teléfono:
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </label>
              <label>
                Correo:
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </label>
              <label>
                Ticket:
               <select name="" id="">
                <option value="">Palco</option>
                <option value="">General</option>
               </select>
              </label>
              <button className={styles.btn} type="submit">Continuar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioModal;
