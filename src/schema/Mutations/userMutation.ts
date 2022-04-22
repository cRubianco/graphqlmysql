import { GraphQLString } from "graphql";
import { Users } from "../../entities/users";

export const CREATE_USER = {
  type: GraphQLString,
  args: {
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  async resolve(_: any, args: any) {
    console.log(args);
    const {name, username, password } = args
    
    const result = await Users.insert({
      name: name,
      username: username,
      password: password
    })
    
    console.log(result);
    
    return `hello user ${args.name}`
  }
}