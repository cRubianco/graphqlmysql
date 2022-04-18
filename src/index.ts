import express  from "express";
import { CONFIG } from './Constants/Config';
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

const app = express();

const port = process.env.PORT || CONFIG.PORT;

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,

}))

app.listen(port);
console.log( `Server on port ${port}` );
