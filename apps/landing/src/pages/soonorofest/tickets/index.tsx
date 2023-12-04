import React from 'react'
import styles from "../Soon.module.css"
import Image from 'next/image'
import Link from 'next/link'
import useEventSelection from '@/hooks/useEventSelection'
import { useRouter } from 'next/router'
const Tickets = () => {
  const initialEvent = { eventName: 'Soonoro Fest', attendees: 0, price: 0, type: "" };
  const [selectedEvent, setSelectedEvent] = useEventSelection(initialEvent);
  const router = useRouter();
  const handleIncrementAttendees = (eventName: string, price: number, type: string) => {
    if (eventName !== selectedEvent.eventName) {
      setSelectedEvent({ eventName, attendees: 1, price, type });
    } else {
      setSelectedEvent((prevEvent) => ({
        ...prevEvent,
        
        attendees: prevEvent.attendees + 1,
        price, type
      }));
    }

    localStorage.setItem("event", JSON.stringify(selectedEvent));
  };

  const handleDecrementAttendees = (eventName: string, price: number, type: string) => {
    if (eventName !== selectedEvent.eventName) {
      setSelectedEvent({ eventName, attendees: 0, price, type });
    } else {
      if(selectedEvent.attendees == 0){
        return
      }
      setSelectedEvent((prevEvent) => ({
        ...prevEvent,
        attendees: prevEvent.attendees - 1,
        price, type
      }));

    }
    localStorage.setItem("event", JSON.stringify(selectedEvent));
  };

  const nextLocation = () => {
    localStorage.setItem("event", JSON.stringify(selectedEvent));
    router.push("/soonorofest/tickets/payment")
  }
  return (
    <div className={styles.container_tic}>
        <Link href="/soonotofest" style={{
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
            }}  height={25} alt='Atras' />
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
           justifyContent: 'space-between',
           backgroundColor: "rgba(0,0,0,0.5)",
           border: "none"
          }}>
            <div style={{
              width: '35%',
            }}>

           <Image src="/event.png" width={130} height={220} objectFit='contain' alt='Evento'
            />
            </div>

           <div style={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            height:'100%',
            width:'65%',
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
              marginTop: 30
            }}>
            <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 14
           }}>2023-12-16</p>
           <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 14
           }}>04:00</p>
            <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 14
           }}>1498 Cupos</p>
               
            </div>
            <div style={{
                display: "flex",
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25
            }}>
            <div>
            <p style={{
            color: "rgba(255,255,255,1)",
            fontWeight: '400',
            fontSize: 15,
            textAlign: "left",
            textDecoration: "line-through",
            opacity: .5
           }}>$50,000</p>
            <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 15,
            textAlign: "left",
            marginTop: 5
           }}>$45,000</p>
            </div>

           <div style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius:10,
            gap: 5
           }}>
           <button
           onClick={() => handleDecrementAttendees("Soonoro Fest General", 45000, "General")}
           style={{
            width:50,
            backgroundColor: "rgba(255,255,255,0.2)",
            border: "none",
            borderRadius: 5
           }}>
              <p style={{
                fontSize: 25,
                color: "#fff",
                textAlign: 'center'
              }}>
                -
              </p>
            </button>
            <p style={{
                fontSize: 20,
                color: "#fff",
                textAlign: 'center'
              }}>{selectedEvent.eventName == "Soonoro Fest General"?  selectedEvent.attendees : 0 }</p>
            <button 
                       onClick={() => handleIncrementAttendees("Soonoro Fest General", 45000, "General")}

            style={{
                width:50,
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "none",
                borderRadius: 5
               }}>
              <p style={{
                fontSize: 25,
                color: "#fff",
                textAlign: 'center'
              }}>
                +
              </p>
            </button>
           </div>
               
            </div>
            
           </div>
          </div>

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
           justifyContent: 'space-between',
           backgroundColor: "rgba(0,0,0,0.5)",
           border: "none"
          }}>
            <div style={{
              width: '35%',
            }}>

           <Image src="/event.png" width={130} height={220} objectFit='contain' alt='Evento'
            />
            </div>

           <div style={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            height:'100%',
            width:'65%',
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
           }}>Soonoro Fest Palco</p>
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
              marginTop: 30
            }}>
            <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 14
           }}>2023-12-16</p>
           <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 14
           }}>04:00</p>
            <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 14
           }}>10 Cupos</p>
               
            </div>
            <div style={{
                display: "flex",
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25
            }}>
            <p style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: 15,
            textAlign: "left"
           }}>$1,500,000</p>
           <div style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius:10,
            gap: 5
           }}>
           <button
           onClick={() => handleDecrementAttendees("Soonoro Fest Palco", 1500000, "Palco")}
           style={{
            width:50,
            backgroundColor: "rgba(255,255,255,0.2)",
            border: "none",
            borderRadius: 5
           }}>
              <p style={{
                fontSize: 25,
                color: "#fff",
                textAlign: 'center'
              }}>
                -
              </p>
            </button>
            <p style={{
                fontSize: 20,
                color: "#fff",
                textAlign: 'center'
              }}>{selectedEvent.eventName == "Soonoro Fest Palco"?  selectedEvent.attendees : 0 }</p>
            <button 
            onClick={() => handleIncrementAttendees("Soonoro Fest Palco", 1500000, "Palco")}
            style={{
                width:50,
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "none",
                borderRadius: 5
               }}>
              <p style={{
                fontSize: 25,
                color: "#fff",
                textAlign: 'center'
              }}>
                +
              </p>
            </button>
           </div>
               
            </div>
            
           </div>
          </div>
          <div className={styles.btn_ye}>
        <button onClick={nextLocation}>
          Continuar
        </button>
      </div>
    </div>
  )
}

export default Tickets