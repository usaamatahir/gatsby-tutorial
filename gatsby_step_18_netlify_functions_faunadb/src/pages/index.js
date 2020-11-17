import React, { useEffect, useState } from "react";

const Home = () => {
  const [temdata, setData] = useState("DEfault");

  useEffect(() => {
    fetch(`.netlify/functions/hello`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
      <h2>FaunaDB : {temdata.message}</h2>
    </div>
  );
};

export default Home;
