import React from "react";
import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export const Dashboard = () => {
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.sampleapis.com/fakebank/accounts"
        );
        setState(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      {loading && "Loading..."}
      <div className={styles.wrapper}>
        {state.map((state) => (
          <div key={state.id} className={styles.card}>
            <h2>{state.transactionDate}</h2>
            <p>{state.description}</p>
            <p>{state.category}</p>
            <p>{state.debit}</p>
          </div>
        ))}
      </div>

      <Link to="/arcticles" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
};
