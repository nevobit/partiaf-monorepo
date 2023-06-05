import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './ContextMenu.module.css'
 
const ContextMenu = ({isOpen, onClose}: any) => {
 const [position, setPosition] = useState({x: 0, y: 0})
 
 useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
  }
 }, [isOpen, onClose])
 
 useEffect(() => {
  function handleContextMenu(event: MouseEvent) {
   event.preventDefault();
   setPosition({ x: event.clientX, y: event.clientY });
 }

 document.addEventListener('contextmenu', handleContextMenu);
 return () => {
   document.removeEventListener('contextmenu', handleContextMenu);
 };
 }, [])
 
 if(!isOpen){
  return null;
 }
 
 const style = {
  top: position.y,
  left: position.x,
  zIndex: 99
 }
  return ReactDOM.createPortal(
   <ul className={styles.list} style={style}>
    <li>Option 1</li>
    <li>Option 2</li>
    <li>Option 3</li>
   </ul>,
   document.body
  ) 
}

export default ContextMenu
