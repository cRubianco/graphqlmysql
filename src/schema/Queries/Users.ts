import { GraphQLList, GraphQLID } from 'graphql';
import { userInfo } from 'os';
import { Users } from "../../entities/users";
import { UserType } from "../typeDefs/userType";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  // type: GraphQLString,
  async resolve() {
    
    //esto se puede devolver directamente (1)
    // const listUsers = await Users.find()

    // console.log('Lista de users',listUsers);
    
    // return 'Users lists';
    // (1) esto era lo que devolvia  ->  return listUsers; 
    return await Users.find();
  },
};

export const GET_USER = {
  type: UserType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(_: any, args: any) {
    // findUser: (_, { id }) => users.find((u) => u.id === id),
    console.log("argumento ", args.id);
    // const result = await Users.findOne(args.id);
    //  console.log("Estos es result -> ",result);
    const result = await Users.findOneById(args.id); 
    console.log(result);
    console.log(args.id);
    
    return  result;
    // return "algo";
  },
};
