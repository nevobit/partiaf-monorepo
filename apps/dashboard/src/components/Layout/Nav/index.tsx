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
import { Link } from 'react-router-dom'
import Button from '@/components/Shared/Button'
import { PrivateRoutes } from '../../../constant-definitions/Routes/index';

const Nav = () => {


 
  return (
    <div className={styles.body}>
        <div className={styles.opcions}>
            <Link to={PrivateRoutes.HOME}>
                <NavOptions>
                    <img src={icon_dashboard}/>
                    <h3 className={styles.text}>Dashboard</h3>
                </NavOptions>
            </Link>
            <Link to={PrivateRoutes.TICKETS}>
                <NavOptions>
                    <img src={icon_tickets}/>
                    <h3 className={styles.text}>Tickets</h3>
                </NavOptions>
            </Link>
            <Link to={PrivateRoutes.RESERVATION}>
                <NavOptions>
                    <img src={icon_reservation}/>
                    <h3 className={styles.text}>Reservas</h3>
                </NavOptions>
            </Link>
            <Link to={PrivateRoutes.COLLABORATORS}>
                <NavOptions>
                    <img src={icon_collaborators}/>
                    <h3 className={styles.text}>Colaboradores</h3>
                </NavOptions>
            </Link>
            <Link to={PrivateRoutes.SETTINGS}>
                <NavOptions>
                    <img src={icon_settings}/>
                    <h3 className={styles.text}>Configuracion</h3>
                </NavOptions>
            </Link>
            <Link to={PrivateRoutes.MESSAGES}>
                <NavOptions>
                    <img src={icon_settings}/>
                    <h3 className={styles.text}>Configuracion</h3>
                </NavOptions>
            </Link>
            <NavOptions>
                <img src={icon_messages}/>
                <h3 className={styles.text}> Mensajes</h3>
            </NavOptions>
        </div>
        <div className={styles.sign_oof}>
            <NavOptions>
                <img src={icon_signoff}/>
                <h3 className={styles.text}>Cerrar Sesion</h3>
            </NavOptions>
        </div>
    </div>
  )
}

export default Nav