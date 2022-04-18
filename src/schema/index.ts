import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GREETING } from "./Queries/Greetings";

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    greeting: GREETING
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: {}
})