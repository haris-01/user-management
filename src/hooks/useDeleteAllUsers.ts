import { useMutation } from "@apollo/client";
import { DELETE_ALL_USERS } from "@mutations/userMutations";
import { GET_USERS } from "@queries/userQuery";

export const useDeleteAllSUsers = () => {
  const [deleteAllUsers] = useMutation(DELETE_ALL_USERS, {
    update(cache) {
      cache.writeQuery({
        query: GET_USERS,
        data: { users: [] },
      });
    },
  });

  return {
    deleteAllUsers,
  };
};
