import { Trello } from 'react-feather'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '@/constant-definitions'

const BottomMenu = () => {
  return (
    <div className={styles.container}>
        <Link to={PrivateRoutes.TICKETS} className={styles.option}>
            <Trello />
            <p>Tickets</p>
        </Link>
    </div>
  )
}

export default BottomMenu