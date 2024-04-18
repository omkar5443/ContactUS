import React from "react";
import styles from "./Navigation.module.css"

export default function Navbar() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <h2>spidyDeveloper</h2>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
