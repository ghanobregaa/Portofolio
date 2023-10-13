import React from "react";
import styles from "./home.module.css";
import Navbar from "../../components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.home}></div>
    </div>
  );
}
