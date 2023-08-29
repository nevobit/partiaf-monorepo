import React from 'react'
import styles from "./searchBar.module.css"
import search from "../../../../public/icons/icon_search.svg"


interface Props {
    className?: string;
  }

const SearchBar = ( {className = ''}: Props ) => {
  return (
    <form className={`${styles.body} ${className}` }>
        <input placeholder='Buscar...' type="text" className={styles.input}>
            
        </input>
        <button className={styles.button}>
        <img src={search}/>
        </button>
        
    </form>
  )
}

export default SearchBar