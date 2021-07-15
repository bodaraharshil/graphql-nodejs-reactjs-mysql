import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USER } from "./Queires/User";
import { CREATE_USER } from "./Mutations/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAlluser: GET_ALL_USER,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
