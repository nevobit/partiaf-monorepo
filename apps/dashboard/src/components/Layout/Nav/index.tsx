import React from 'react'
import styles from "./nav.module.css"
import NavOptions from '@/components/Shared/NavOptions'
import icon_dashboard from '../../../../public/icons/icon_dashboard.svg'
import icon_tickets from '../../../../public/icons/icon_tickets.svg'
import icon_reservation from '../../../../public/icons/icon_reservation.svg'
import icon_collaborators from '../../../../public/icons/icon_collaborators.svg'
import icon_settings  from '../../../../public/icons/icon_settings.svg'
import icon_messages from '../../../../public/icons/icon_messages.svg'
import icon_signoff  from '../../../../public/icons/icon_signoff.svg'
import { Link} from 'react-router-dom'
import Button from '@/components/Shared/Button'

const Nav = () => {


 
  return (
    <div className={styles.body}>
        <div className={styles.opcions}>
            <NavOptions>
                <img src={icon_dashboard}/>
                Dashboard
            </NavOptions>
            <NavOptions>
                <img src={icon_tickets}/>
                Tickets
            </NavOptions>

            <NavOptions>
                <img src={icon_reservation}/>
                    Reservas
            </NavOptions>
            <NavOptions>
                <img src={icon_collaborators}/>
                Colaboradores
            </NavOptions>
            <NavOptions>
                <img src={icon_settings}/>
                Configuracion
            </NavOptions>
            <NavOptions>
                <img src={icon_messages}/>
                Mensajes
            </NavOptions>
        </div>
        <div className={styles.sign_oof}>
            <NavOptions>
                <img src={icon_signoff}/>
                Cerrar Sesion
            </NavOptions>
        </div>
    </div>
  )
}

export default Nav