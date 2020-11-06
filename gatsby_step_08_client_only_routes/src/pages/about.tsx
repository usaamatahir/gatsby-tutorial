import React from "react";
import Layout from "../components/Layout";
import styles from "./about.module.css";

const about = () => {
  return (
    <div className={styles.aboutPage}>
      <Layout>
        <h1>About Me</h1>
      </Layout>
    </div>
  );
};

export default about;
