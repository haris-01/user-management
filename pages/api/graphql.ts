const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../../server/schema/UserSchema");
const connectDB = require("../../server/config/db");

const app = express();

connectDB();

app.use(
  "/api/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, // set to false in production
  })
);

export default app;
