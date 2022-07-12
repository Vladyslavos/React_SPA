import React from "react";
import { menu } from "./menu";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function NavContent(props) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        {menu.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.link}
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.buttons}>
        <button className={styles.loginButton}>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#ffff" }}
            className={styles.Link}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Login
          </Link>
        </button>
        <button className={styles.signupButton}>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#ffff" }}
            className={styles.Link}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Sign up
          </Link>
        </button>
      </div>
    </div>
  );
}
