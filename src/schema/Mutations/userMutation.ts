import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../entities/users";
import { UserType } from "../typeDefs/userType";
import bcryptjs from "bcryptjs";

export const CREATE_USER = {
  // type: GraphQLString,
  type: UserType,
  args: {
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  async resolve(_: any, args: any) {
    console.log('Esto es args  -> ',args);
    const {name, username, password } = args
    
    const encryptPassword = await bcryptjs.hash(password, 10);
    
    const result = await Users.insert({
      name: name,
      username: username,
      password: encryptPassword,
    });
    
    console.log('Esto es result ',result);
    
    return {...args, id: result.identifiers[0].id, encryptPassword}
    // return `hello user ${args.name}`
  }
}

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: {type: GraphQLID},
  },
  resolve(_: any, {id}: any) {
    console.log(id);
    return false;
    
  }
}