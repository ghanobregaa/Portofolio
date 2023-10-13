import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles.logo}>
          <img src="logo512.png" alt="logo" />
        </div>
        <div className={styles.btns}>
          <a href="/entrar">Entrar</a>
          <a className={styles.register}>Criar conta</a>
        </div>
      </nav>
    </div>
  );
}
