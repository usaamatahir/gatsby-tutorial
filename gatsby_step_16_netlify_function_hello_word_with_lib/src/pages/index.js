import React, { useEffect, useState } from "react";

const Home = () => {
  const [serverData, setServerData] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch(`/.netlify/functions/hello`);
      const data = await response.json();
      setServerData(data);
    })();
  }, []);
  return (
    <div>
      <h1>Netlify Function With Random Name Lib</h1>
      <h2>{serverData.message}</h2>
    </div>
  );
};

export default Home;
