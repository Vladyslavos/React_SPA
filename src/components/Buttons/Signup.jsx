import React from "react";
import styles from "./Signup.module.scss";

export const Signup = () => {
  return (
    <div className={styles.signup} style={{ marginTop: "20px" }}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <form action="#" method="post">
            <h2>Sign up</h2>
            <section>
              <input
                id="name"
                type="text"
                placeholder="Enter your name.."
              ></input>
            </section>
            <section>
              <input
                id="surname"
                type="text"
                placeholder="Enter your surname.."
              ></input>
            </section>
            <section>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                placeholder="Enter your email"
              ></input>
            </section>
            <section>
              <input
                id="password"
                name="password"
                type="password"
                minLength="8"
                required
                placeholder="Create password"
              ></input>
            </section>

            <section>
              <input
                id="password-confirm"
                name="password"
                type="password"
                minLength="8"
                required
                placeholder="Confirm password"
              ></input>
            </section>
          </form>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};
