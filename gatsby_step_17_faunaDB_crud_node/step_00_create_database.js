var faunadb = require("faunadb");

var q = faunadb.query;

require("dotenv").config();

(async () => {
  if (process.env.ADMIN_SECRET_KEY) {
    var adminClient = new faunadb.Client({
      secret: process.env.ADMIN_SECRET_KEY,
    });

    try {
      var result = await adminClient.query(
        q.CreateDatabase({ name: "tempData" })
      );
      console.log(result);
    } catch (error) {
      if (
        error.requestResult.statusCode === 400 &&
        error.message === "instance already exists"
      ) {
        console.log("Database with this name already exists");
      } else {
        console.log("Unknow Error: ");
        console.log(error);
      }
    }
  } else {
    console.log("No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup");
  }
})();
