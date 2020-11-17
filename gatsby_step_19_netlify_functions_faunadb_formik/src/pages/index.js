import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const Home = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={(values) => {
          fetch(".netlify/functions/add", {
            method: "post",
            body: JSON.stringify(values),
          })
            .then((response) => response.json())
            .then((tempData) => {
              setData(tempData);
              console.log("Data : ", JSON.stringify(data));
            });
        }}
      >
        <Form>
          <Field name="firstName" placeholder="FirstName" />
          <Field name="lastName" placeholder="LastName" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <h1>{data.id}</h1>
    </div>
  );
};

export default Home;
