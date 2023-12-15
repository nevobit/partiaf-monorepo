import React, { useState } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link desde react-router-dom
import styles from "./header.module.css";
import logo from "../../../../public/logo-partiaf-neg.svg";
import { PublicRoutes } from "@/constant-definitions";
import { LogOut } from "react-feather";

const Header = () => {
  const { name, email } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("store") || "")
    : "";
  const [open, setOpen] = useState(false);

  const HandleExit = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      window.location.href = PublicRoutes.SIGNIN;
    }, 1000);
  };

  return (
    <div className={styles.body}>
      <div className={styles.logo_section}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>
      <div className={styles.options}>
        <Link to="/tickets">Tickets</Link>
      </div>
      <div className={styles.user}>
        <button onClick={() => setOpen(!open)}>
          <p>
            <span className={styles.name_icon}>
              {name.charAt(0).toUpperCase()}
            </span>
            <div className={styles.info_name}>
              <h3 className={styles.name_text}>{name}</h3>
              <span className={styles.bname_text}>{email}</span>
            </div>
          </p>
        </button>
      </div>
      <div className={open ? styles.container_logout : styles.none}>
        <button onClick={HandleExit}>
          <LogOut />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
