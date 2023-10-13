import React from "react";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.center}>
        <div className={styles.box}>
          <div className={styles.input}>
            <input type="text" />
          </div>
          <div className={styles.input}>
            <input type="password" />
          </div>
          <button>Iniciar sessão</button>
        </div>
      </div>
    </div>
  );
}
