var faundb = require("faunadb");

var q = faundb.query;

require("dotenv").config();

(async () => {
  if (process.env.ADMIN_SECRET_KEY) {
    var adminClient = new faundb.Client({
      secret: process.env.ADMIN_SECRET_KEY,
    });

    try {
      var response = await adminClient.query(
        q.CreateKey({
          database: q.Database("tempData"),
          role: "admin",
        })
      );
      console.log("Save the database admin Key : ", response.secret);
    } catch (error) {
      console.log("Error : ", error);
    }
  } else {
    console.log("No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup");
  }
})();
