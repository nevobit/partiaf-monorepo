import BottomMenu from "../BottomMenu"
import styles from "./principal.module.css"

const Principal = ({children}:any) => {
  return (
    <div className={styles.body}>
        {/* <Nav/> */}
        {children}
        <BottomMenu />
    </div>
  )
}

export default Principal