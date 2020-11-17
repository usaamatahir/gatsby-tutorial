// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method not allowed" };
    }

    let rqObj = JSON.parse(event.body);

    var adminClient = new faunadb.Client({
      secret: process.env.ADMIN_SECRET_KEY,
    });

    var result = await adminClient.query(
      q.Create(q.Collection("posts"), {
        data: { firstName: rqObj.firstName, lastName: rqObj.lastName },
      })
    );
    console.log(result);
    return {
      statusCode: 200,
      body: JSON.stringify({ id: ` ${result.ref.id}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
