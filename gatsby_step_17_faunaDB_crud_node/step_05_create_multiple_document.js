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
        q.Map(
          [
            "This is my third title",
            "This is my fourth title",
            "This is my third title",
          ],
          q.Lambda(
            "title",
            q.Create(q.Collection("posts"), { data: { title: q.Var("title") } })
          )
        )
      );
      console.log("Created Collection : ", result);
    } catch (error) {
      console.log("Error : ", error);
    }
  } else {
    console.log("No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup");
  }
})();
