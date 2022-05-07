import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { Users } from "../../entities/users";
import { UserType } from "../typeDefs/userType";
import bcryptjs, { compare } from "bcryptjs";
import { MessageType } from "../typeDefs/messgaeType";

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
  async resolve(_: any, {id}: any) {
    console.log(id);
    const result = await Users.delete({id});
    console.log(result);
    if (result.affected! > 0) return true;
    return false;
    
  }
};

export const UPDATE_USER = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    oldPassword: {type: GraphQLString},
    newPassword: {type: GraphQLString}
  },
  async resolve(_: any, {id, name, username, oldPassword, newPassword}: any ) {
    console.log(id, name, username, oldPassword);
    
    const userFound = await Users.findOneBy({ id });
    // if (!userFound) throw new Error("User not found");
    if(!userFound) return {
      success: false,
      message: "User not found"
    }

    // Compare old password with the new password
    const isMatch = await compare(oldPassword, userFound?.password);

    // if (!isMatch) throw new Error("Passwords does not match");
    if(!isMatch) return {
      success: false,
      message: "Passwords do not match"
    }
    
    const encryptPassword = await bcryptjs.hash(newPassword, 10)

    console.log("---->   ",userFound, "  isMatch : ", isMatch);
   
    const result = await Users.update({id}, {name, username, password: encryptPassword})
    
    if(result.affected === 0) return false;
    
    return {
      success: true,
      message: "User updated successfully",
    }
  },

};
