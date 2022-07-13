import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pricing.module.scss";
import data from "./btc.json";

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <h1>
        <span>B</span>itcoin price
      </h1>

      <div className={styles.wrapper}>
        {data.map((price, idx) => (
          <div key={(data, idx)} className={styles.crypto_card}>
            <h2>{price.Date}</h2>
            <p>
              Price: {price.Price} <span>$</span>
            </p>
            <p>Volume: {price.Volume} </p>
          </div>
        ))}
      </div>

      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
};

export default Pricing;
