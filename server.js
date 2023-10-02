const express = require("express");
// const createHandler = require("graphql-http/lib/use/express").createHandler;
const createHandler = require("express-graphql").graphqlHTTP;

const schema = require("./schemas/userSchema");

const app = express();

app.use(
  "/graphql",
  createHandler({
    schema,
    graphiql: true, // development tools to make queries
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
