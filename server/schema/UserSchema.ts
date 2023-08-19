import { singleUserType } from "src/types/userType";
const Users = require("../models/UserModel");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    linkedIn: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return Users.find();
      },
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(_: unknown, args: singleUserType["user"]) {
        return Users.findById(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLString },
        linkedIn: { type: GraphQLString },
      },
      resolve(_: any, args: any) {
        const newUser = new Users({
          name: args.name,
          email: args.email,
          phone: args.phone,
          linkedIn: args.linkedIn,
        });
        return newUser.save();
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(_: unknown, args: singleUserType["user"]) {
        const id = args.id;
        return Users.findByIdAndRemove(id);
      },
    },
    deleteAllUsers: {
      type: UserType,

      resolve() {
        return Users.deleteMany({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
