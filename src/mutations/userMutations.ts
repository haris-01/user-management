import { gql } from "@apollo/client";

const DELETE_ALL_USERS = gql`
  mutation deleteAllUsers {
    deleteAllUsers {
      id
      name
      email
      phone
      linkedIn
    }
  }
`;

const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $phone: String
    $linkedIn: String
  ) {
    addUser(name: $name, email: $email, phone: $phone, linkedIn: $linkedIn) {
      id
      name
      email
      phone
      linkedIn
    }
  }
`;

export { DELETE_ALL_USERS, ADD_USER };
