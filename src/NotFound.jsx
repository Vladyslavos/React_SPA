import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h2>Page not found ⛔</h2>
        <Link to="/arcticles">Back to Home</Link>
      </div>
    </div>
  );
};
