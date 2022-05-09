import express  from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

// import dotenv from "dotenv";

// // configurar dotenv
// dotenv.config();

const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,

}));

export default app;
