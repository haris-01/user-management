import { useQuery } from "@apollo/client";
import { GET_USERS } from "@queries/userQuery";
import type { UserTypeData } from "src/types/userType";

export const useGetAllUsers = () => {
  const { data, ...rest } = useQuery<UserTypeData>(GET_USERS);
  const users = data?.Users || [];

  return {
    users,
    ...rest,
  };
};
