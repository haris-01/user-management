import { useMutation } from "@apollo/client";
import { ADD_USER } from "../mutations/userMutations";
import { GET_USERS } from "../queries/userQuery";
import { User, UserTypeData } from "src/types/userType";
import { AddUserFormType } from "@components/AddUserFormModal";

export type UserMutationsType = {
  addUser: User;
};

export const useAddUser = () => {
  const [addUser] = useMutation<UserMutationsType>(ADD_USER, {
    update(cache, { data }) {
      const addedUser = data?.addUser;
      const userCache = cache.readQuery({
        query: GET_USERS,
      }) as UserTypeData;
      const Users = userCache?.users;
      cache.writeQuery({
        query: GET_USERS,
        data: { users: [...Users, addedUser] },
      });
    },
  });

  const add = (user: AddUserFormType) => {
    addUser({ variables: { ...user } });
  };

  return {
    addUser: add,
  };
};
