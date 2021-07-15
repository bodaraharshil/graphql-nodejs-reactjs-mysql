import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../entits/Users";
import { MessageType } from "../TypeDefs/Message";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({
      name,
      username,
      password,
    });
    return args;
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: {
      type: GraphQLString,
    },
    oldpassword: {
      type: GraphQLString,
    },
    newpassword: {
      type: GraphQLString,
    },
  },
  async resolve(parent: any, args: any) {
    const { name, username, oldpassword, newpassword } = args;
    const user = await Users.findOne({ username: username });
    const userPassword = user?.password;
    if (oldpassword === userPassword) {
      const data = await Users.update(
        { username: username },
        { password: newpassword }
      );
      if (data) {
        return {
          success: true,
          message: "Password updated successfully",
        };
      }
    } else {
      throw new Error("Password does't match");
    }
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Users.delete(id);
    return {
      success: true,
      message: "User deleted successfully",
    };
  },
};
