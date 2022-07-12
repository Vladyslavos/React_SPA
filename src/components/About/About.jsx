import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.scss";
import img from "../../assets/img/blockchain.jpg";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textSide}>
        <h1>About Company</h1>
        <div className={styles.info}>
          <p>
            If you want to reach and engage customers today, you’ll need to
            adapt to the changes in their communication preferences — and we
            have business text messaging examples that prove the impact of
            taking your brand to customers’ fingertips. As an efficient method
            of communication, businesses big and small have adopted business
            text messaging in full force. Traditional communication channels
            such as email, direct calling, and mail just don’t hold up quite as
            strongly. Customers can (and should) still be served by those other
            communication channels, but text messaging is how they want to
            connect with you now more than ever before. In a research study
            conducted by SMS Comparison, 48% of consumers said they prefer text
            messaging over any other communication channel.
          </p>
          <Link
            to="/arcticles"
            className={styles.link}
            style={{ color: "#a8d3c6" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className={styles.imgSide}>
        <img src={img} className={styles.blockchainImg} alt="blockchain_img" />
      </div>
    </div>
  );
};

export default About;
