import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../mutations/userMutations";
import { GET_USERS } from "../queries/userQuery";
import { User, UserTypeData } from "src/types/userType";

export type UserMutationsType = {
  deleteUser: User;
};

export const useDeleteUserById = () => {
  const [deleteUser] = useMutation<UserMutationsType>(DELETE_USER, {
    update(cache, { data }) {
      const deletedUser = data?.deleteUser;
      const userCache = cache.readQuery({
        query: GET_USERS,
      }) as UserTypeData;
      const users = userCache?.users;
      cache.writeQuery({
        query: GET_USERS,
        data: { users: users.filter((user) => user.id !== deletedUser?.id) },
      });
    },
  });

  const remove = (id: string) => {
    deleteUser({ variables: { id } });
  };

  return {
    removeUser: remove,
  };
};
