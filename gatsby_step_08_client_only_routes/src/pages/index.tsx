import React from "react";
import Layout from "../components/Layout";
import styles from "./index.module.css";
const index = () => {
  return (
    <div className={styles.indexPage}>
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </div>
  );
};

export default index;
