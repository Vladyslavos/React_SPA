import React from "react";
import styles from "./Header.module.scss";
import NavContent from "./NavContent";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavContent />
    </nav>
  );
}
