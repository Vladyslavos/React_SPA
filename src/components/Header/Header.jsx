import React from "react";
import logoImage from "../../assets/img/logoTest.svg";
import styles from "./Header.module.scss";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt="logo_eth" height="60" />
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Header;
