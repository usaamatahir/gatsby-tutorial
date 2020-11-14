var faunadb = require("faunadb");

var q = faunadb.query;

require("dotenv").config();

(async () => {
  if (process.env.ADMIN_SECRET_KEY) {
    var adminClient = new faunadb.Client({
      secret: process.env.ADMIN_SECRET_KEY,
    });

    try {
      var data = await adminClient.query(
        q.Create(q.Collection("posts"), {
          data: { title: "This is my second Title" },
        })
      );
      console.log("Created Collection : ", data);
    } catch (error) {
      console.log("Error : ", error);
    }
  } else {
    console.log("No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup");
  }
})();
