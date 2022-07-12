import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className={styles.login} style={{ marginTop: "20px" }}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h2>Login</h2>
          <input type="text" placeholder="Username" required />
          <input
            type="password"
            placeholder="Password"
            required
            minLength={8}
            className={styles.colorInput}
          />
          <button>Login</button>
          <p>
            Not a member?
            <Link to="/signup">
              <span> Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
