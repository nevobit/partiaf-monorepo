import React, { useEffect, useState } from 'react'
import styles from "./Pay.module.css"
import Image from 'next/image'
import Link from 'next/link'
import useEventSelection from '@/hooks/useEventSelection'
import * as uuid from "uuid";
import { DivisaFormater } from '@/utils/divisaFormater'
import axios from 'axios'

interface Participant {
  id: string;
  name: string;
  phone: string;
}

const Tickets = () => {
  const [participantName, setParticipantName] = useState<string>('');
  const [promoter, setPromoter] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  const [participantPhone, setParticipantPhone] = useState<string>('');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [event, setEvent] = useState<any>();


  console.log(event)


  const handleAddParticipant = () => {
    if (participantName && participantPhone) {
      setParticipants((prevParticipants) => [
        ...prevParticipants,
        { id: uuid.v4(), name: participantName.trim(), phone: participantPhone.trim() },
      ]);

      // Limpiar los campos después de agregar un participante
      setParticipantName('');
      setParticipantPhone('');
    }
  };

  const handleRemoveParticipant = (participantId: string) => {
    setParticipants((prevParticipants) => prevParticipants.filter((p) => p.id !== participantId));
  };

  useEffect(() => {
    let e = localStorage.getItem("event") ? JSON.parse(localStorage.getItem("event")!) : [];
    setEvent(e)
  }, [])

  const createOrder = async () => {
    if (participants.length < event.attendees) {
      alert("Debes ingresar todos los cupos")
      return
    }
    try {
      setLoading(true)
      const { data } = await axios.post('https://partiaf-api.xyz/api/v3/create-order', {
        price: event.price * event.attendees,
        userId: "170f2069-2465-4e08-90d1-a30d5f036be0",
        email: email,
        participants,
        event
      });

      if (data.init_point) {
        // const newWindow = window.open(data.init_point, '_blank');
        window.location.href = data.init_point;

        // if (newWindow) {
        //   newWindow.opener = null; // Evita que la nueva ventana haga referencia a la ventana principal
        // }
      }

      setLoading(false)
    } catch (err: any) {
    }
  }

  console.log(event)
  return (
    <div className={styles.container_tic}>
      <Link href="/soonorofest" style={{
        backgroundColor: "rgba(255,255,255,.2)",
        borderRadius: 100,
        border: "none",
        height: 35,
        width: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
      }}>
        <Image src="/chevron-back-outline.svg" width={25} style={{
          filter: "invert(1)"
        }} height={25} alt='Atras' />
      </Link>
      <div
        style={{
          overflow: 'hidden',
          marginBottom: 20,
          borderRadius: 10,
          width: '100%',
          position: 'relative',
          flexDirection: 'row',
          display: "flex",
          alignItems: 'center',
          justifyContent: 'flex-start',
          border: "none"
        }}>

        <Image src="/event.png" className={styles.img} width={130} height={220} objectFit='contain' alt='Evento'
        />
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.05)',
          height: '100%',
          paddingBlock: 5,
          paddingInline: 10,
        }}>
          <div style={{

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <p style={{
              color: "#fff",
              fontWeight: '600',
              fontSize: 14,
              textAlign: "left"
            }}>Soonoro Fest General</p>
            <p style={{
              color: "#fff",
              fontWeight: '600',
              fontSize: 12
            }}></p>

          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
            <p style={{
              color: "#fff",
              fontWeight: '600',
              fontSize: 14
            }}>2023-12-16</p>


          </div>
        </div>
      </div>


      <div className={styles.info}>
        <div className={styles.type}>
          <h3>Tipo de Ticket</h3>
          <p>{DivisaFormater(event?.price)}</p>
        </div>
        <p>{event?.type}</p>
        <p>Acceso total al evento y poder disfrutar de los diferentes artistas</p>

        <h4 className={styles.amount}>{event?.attendees} personas</h4>

        {participants.map((participant, index) => (
          <div className={styles.list} key={participant.id}>
            <p>{index + 1} - {participant.name}, {participant.phone}</p>
            <button onClick={() => handleRemoveParticipant(participant.id)} > <Image src="/trash-outline.svg" alt="" width={40} height={40} /> </button>
          </div>
        ))}
        {participants.length >= event?.attendees ? (
          <div className={styles.persons}>
          <h4>Cupos completados</h4>
          <p style={{
            marginTop: 5
          }}>Agrega tu correo para enviarte los tickets</p>
          <input placeholder='Correo electrónico' value={email}onChange={(e) => setEmail(e.target.value)} />
          </div>

        ) : (
          <div className={styles.persons}>

            <h5>Agrega todos los cupos</h5>
            <input placeholder='Nombre' value={participantName}
              onChange={(e) => setParticipantName(e.target.value)} />
            <input placeholder='Teléfono' value={participantPhone}
              onChange={(e) => setParticipantPhone(e.target.value)} />
            <button onClick={handleAddParticipant} className={styles.btn}>Agregar</button>
          </div>
        )}

      </div>

      <div className={styles.bottom}>
        <div className={styles.total}>
          <p>Total</p>
          <h5>{DivisaFormater(event?.price * event?.attendees)}</h5>
        </div>
        <div className={styles.promoter}>
          <input onChange={({ target }) => setPromoter(target.value)} placeholder='Codigo del promotor' />
          <button><Image src="/add-outline.svg" alt="" width={40} height={40} /></button>
        </div>
        <div className={styles.btn_ye}>
          <button disabled onClick={createOrder}>
            {loading ? <Image src="/refresh-outline.svg" width={30} height={30} alt='' /> : (
              "Continuar"
            )}
          </button>
        </div>
      </div>

    </div>
  )
}

export default Tickets