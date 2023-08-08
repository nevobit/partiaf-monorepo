import React, {useEffect} from 'react'
import styles from "./nav.module.css"
import NavOptions from '@/components/Shared/NavOptions'
import icon_dashboard from '../../../../public/icons/icon_dashboard.svg'
import icon_tickets from '../../../../public/icons/icon_tickets.svg'
import icon_reservation from '../../../../public/icons/icon_reservation.svg'
import icon_collaborators from '../../../../public/icons/icon_collaborators.svg'
import icon_settings  from '../../../../public/icons/icon_settings.svg'
import icon_messages from '../../../../public/icons/icon_messages.svg'
import icon_signoff  from '../../../../public/icons/icon_signoff.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '@/components/Shared/Button'
import { PrivateRoutes, PublicRoutes } from '../../../constant-definitions/Routes/index';
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/auth/users/thunks'

interface Props {
    tittle?: string
  }


const Nav = ({tittle}:Props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signoutHandler = () => {
        try {
            dispatch(logout() as any)
          navigate(PublicRoutes.SIGNIN, {replace: true});
        } catch (err) {
          console.log(err);
        }
      };
    
  return (
    <div className={styles.body}>
        <div className={styles.opcions}>
            {/* <Link to={PrivateRoutes.DASHBOARD}>
                <NavOptions tittle='dashboard'>
                    <img src={icon_dashboard}/>
                    <h3 className={styles.text}>Dashboard</h3>
                </NavOptions>
            </Link> */}
            <Link to={PrivateRoutes.TICKETS}>
                <NavOptions tittle='tickets'>
                    <img src={icon_tickets}/>
                    <h3 className={styles.text}>Tickets</h3>
                </NavOptions>
            </Link>
            {/* <Link to={PrivateRoutes.RESERVATION}>
                <NavOptions tittle='reservation'>
                    <img src={icon_reservation}/>
                    <h3 className={styles.text}>Reservas</h3>
                </NavOptions>
            </Link> */}
            {/* <Link to={PrivateRoutes.COLLABORATORS}>
                <NavOptions tittle='collaborators'>
                    <img src={icon_collaborators}/>
                    <h3 className={styles.text}>Colaboradores</h3>
                </NavOptions>
            </Link> */}
            {/* <Link to={PrivateRoutes.SETTINGS}>
                <NavOptions tittle='settings'>
                    <img src={icon_settings}/>
                    <h3 className={styles.text}>Configuracion</h3>
                </NavOptions>
            </Link> */}
            {/* <Link to={PrivateRoutes.MESSAGES}>
                <NavOptions tittle='messages'>
                    <img src={icon_messages}/>
                    <h3 className={styles.text}> Mensajes</h3>
                </NavOptions>
            </Link> */}
        </div>
        <div className={styles.sign_oof}>
        <Button variant="third" onClick={signoutHandler}>
            <p>Cerrar sesion</p>
          </Button>
        </div>
    </div>
  )
}

export default Nav