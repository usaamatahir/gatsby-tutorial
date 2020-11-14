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
        q.CreateIndex({
          name: "posts_by_title",
          source: q.Collection("posts"),
          term: [{ field: ["data", "title"] }],
        })
      );
      console.log("Created Index : ", result);
    } catch (error) {
      console.log("Error : ", error);
    }
  } else {
    console.log("No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup");
  }
})();
