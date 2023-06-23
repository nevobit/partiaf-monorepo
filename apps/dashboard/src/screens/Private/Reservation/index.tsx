import React , {useState} from 'react'
import styles from "./reservation.module.css"
import SearchBar from '@/components/Shared/SearchBar'
import Button from '@/components/Shared/Button'
import ReservationTotals from '@/components/Shared/ReservationTotals'
import WelcomeReservation from '@/components/Shared/WelcomeReservation'
import TableInfo from '@/components/Shared/TableInfo'
import ReservationDetails from '@/components/Shared/ReservationDetails'



interface Table  {
  user?:  string;
  date?: string;
  hour?: string;
}


const Reservation = ( { user, date, hour, ...rest }: Table) => {

  const [open, setOpen] = useState(false)

  // this is only example of data

  const totals = [

  ]

  const reservations = [
    {name: "Skarlys Barreno",
      id:"0",
      user: "@Skarlysba",
      date: " Jun 18, 2023",
      hour: "09:30 PM",
      user_picture: "../../../../public/img/user_picture.png" },
      
      {name: "Pedro Gonzales",
      id:"1",
      user: "@Skarlysba",
      date: " May 23, 2023",
      hour: "03:30 PM",
      user_picture: "../../../../public/img/user_picture.png"},
      
      {name: "Mariano Rivera",
      id:"2",
      user: "@Skarlysba",
      date: " Sep 5, 2023",
      hour: "09:30 AM",
      user_picture: "../../../../public/img/user_picture.png"},
      
      {name: "Ana Medina",
      id:"3",
      user: "@Skarlysba",
      date: " Aug 31, 2023",
      hour: "4:30 PM",
      user_picture: "../../../../public/img/user_picture.png"},
      
      {name: "Yelena Camero",
      id:"4",
      user: "@Skarlysba",
      date: " Jan 1, 2023",
      hour: "11:30 PM",
      user_picture: "../../../../public/img/user_picture.png"}
  ]

  // example data end
  
const openDetail = ()=>{
  console.log("Click in openDetail")
  setOpen(!open)
}

  return (
    <div className={styles.body}>
        <div className={styles.header}>
          <div>

         
          <h2 className={styles.title}>
              Reserva con nosotros
          </h2>
          </div>
          <div className={styles.header_options}>
              <SearchBar className={styles.header_buttons}/>
              <Button 
              className={styles.header_buttons}
              variant='secondary'
              >Configuracion de la reserva</Button>
          </div>
        </div>
        <div className={styles.totals}>
          <ReservationTotals title='Total de reservas' totals="05"/>
          <ReservationTotals title='Sillas disponibles' totals="10"/>
          <ReservationTotals title='Mesas disponibles'totals="10"/>  
        </div>
        <div className={styles.main}>
          <div className={styles.main_principal}>
            <div className={styles.main_top}>
                <h3 className={styles.main_title}>Reservas</h3>
                <Button
                variant='dark'
                >Informacion de la reserva</Button>
            </div>
            <TableInfo 
            action='Ver reserva'
            data={reservations}
            detail={open}
            seeDetail={(e: React.MouseEvent) =>{setOpen(!open)}}/>
          </div>
          <div className={styles.main_aside}>
            {!open ?  <WelcomeReservation/> :
            <ReservationDetails/>}
            
          </div>
        </div>
    </div>
  )
}

export default Reservation