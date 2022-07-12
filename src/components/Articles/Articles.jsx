import React from "react";
import axios from "axios";
import styles from "./Articles.module.scss";
import { Link } from "react-router-dom";

const Articles = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.articles}>
      <h1>Articles from our clients</h1>
      {loading && "Loading..."}

      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <h4>{post.email}</h4>
            <p>{post.body}</p>
            <Link to="/">Read now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
