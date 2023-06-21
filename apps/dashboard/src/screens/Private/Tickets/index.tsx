import React , {useState} from 'react'
import styles from "./tickets.module.css"
import SearchBar from '@/components/Shared/SearchBar'
import Button from '@/components/Shared/Button'
import ReservationTotals from '@/components/Shared/ReservationTotals'
import WelcomeReservation from '@/components/Shared/WelcomeReservation'
import TableInfo from '@/components/Shared/TableInfo'
import ReservationDetails from '@/components/Shared/ReservationDetails'
import Modal from '@/components/Shared/Modal'



interface Table  {
  user?:  string;
  date?: string;
  hour?: string;
}


const Tickets = ( { user, date, hour, ...rest }: Table) => {

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
      ticketValue: 131.50,
      ticket: "Vip",
      ticketState: "Usado",
      user_picture: "../../../../public/img/user_picture.png" },
      
      {name: "Pedro Gonzales",
      id:"1",
      user: "@Skarlysba",
      date: " May 23, 2023",
      hour: "03:30 PM",
      ticketValue: 131.50,
      ticket: "Normal",
      ticketState: "New",
      user_picture: "../../../../public/img/user_picture.png"},
      
      {name: "Mariano Rivera",
      id:"2",
      user: "@Skarlysba",
      date: " Sep 5, 2023",
      hour: "09:30 AM",
      ticketValue: 220.50,
      ticket: "Normal",
      ticketState: "Usado",
      user_picture: "../../../../public/img/user_picture.png"},
      
      {name: "Ana Medina",
      id:"3",
      user: "@Skarlysba",
      date: " Aug 31, 2023",
      hour: "4:30 PM",
      ticketValue: 500.50,
      ticket: "Vip",
      ticketState: "Usado",
      user_picture: "../../../../public/img/user_picture.png"},
      
      {name: "Yelena Camero",
      id:"4",
      user: "@Skarlysba",
      date: " Jan 1, 2023",
      hour: "11:30 PM",
      ticketValue: 300.50,
      ticket: "Normal",
      ticketState: "New",
      user_picture: "../../../../public/img/user_picture.png"}
  ]

  // example data end
  
const openDetail = ()=>{
  console.log("Click in openDetail")
  setOpen(!open)
}

  return (
    <>
      <div className={styles.body}>
          <div className={styles.header}>
              <h2 className={styles.title}>
                  Tickets
              </h2>
              <div className={styles.header_options}>
                  <SearchBar className={styles.header_buttons}/>
                  <Button 
                  className={styles.header_buttons}
                  variant='secondary'
                  >Crear Tickets</Button>
              </div>
          </div>
          <div className={styles.totals}>
            <ReservationTotals title='Total de tickets creados' totals="05"/>
            <ReservationTotals title='Tickets usados' totals="10"/>
            <ReservationTotals title='Tickets cancelados'totals="10"/>  
          </div>
          <div className={styles.main}>
              <div className={styles.main_top}>
                  <h3 className={styles.main_title}>Espera del ticket</h3>
              </div>
              <TableInfo 
              data={reservations}
              detail={open}
              action='Ver mas'
              seeDetail={(e: React.MouseEvent) =>{setOpen(!open)}}/>
          </div>
      </div>
      {/* <Modal activeModal={(e: React.MouseEvent) =>{setOpen(!open)}}/> */}
    </>

  )
}

export default Tickets