import { useMutation } from "@apollo/client";
import { ADD_USER } from "@mutations/userMutations";
import { GET_USERS } from "@queries/userQuery";
import { singleUserType, UserTypeData } from "src/types/userType";

export type UserMutationsType = {
  addUser: singleUserType;
};

export const useAddUser = () => {
  const [addUser] = useMutation<UserMutationsType>(ADD_USER, {
    update(cache, { data }) {
      const addedUser = data?.addUser;
      const userCache = cache.readQuery({
        query: GET_USERS,
      }) as UserTypeData;
      const Users = userCache?.Users;
      cache.writeQuery({
        query: GET_USERS,
        data: { Users: [...Users, addedUser] },
      });
    },
  });

  const add = (user: string) => {
    addUser({ variables: { user } });
  };

  return {
    addUser: add,
  };
};
