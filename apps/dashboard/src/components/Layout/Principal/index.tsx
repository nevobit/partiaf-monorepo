import styles from "./principal.module.css"

const Principal = ({children}:any) => {
  return (
    <div className={styles.body}>
        {/* <Nav/> */}
        {children}
    </div>
  )
}

export default Principal