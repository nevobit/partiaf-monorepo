import styles from './Table.module.css'

const Table = ({ handler, elements }: any) => {
  return (
   <div className={styles.table_wrapper}>
    <table className={styles.table}>
      <thead>
       <tr>
        {/* <th><input type="checkbox" name="" id="" /></th> */}
        <th> Nombre</th>
        <th>Correo electronico</th>
        <th>Telefono</th>
        <th>Movil</th>
        <th>Direccion</th>
        <th>Ciudad</th>
        <th>Tipo</th>
       </tr>
      </thead>
      <tbody>
       {elements.map((element: any) => (
        
       <tr
        onClick={() => handler(element.uuid)}
        key={element.uuid}
       >
         <td>{element.name}</td>
        <td>{element.email}</td>
        <td>{element.telephone}</td>
        <td>{element.phone}</td>
        <td>{element.address}</td>
        <td>{element.city}</td>
        <td>{element.type}</td>
        </tr>
       ))}
      </tbody>
    </table>
   </div>
    
  )
}

export default Table
