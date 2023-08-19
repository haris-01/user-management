import { useQuery } from "@apollo/client";
import { GET_USER } from "@queries/userQuery";
import type { singleUserType } from "src/types/userType";

export const useGetAllUsers = () => {
  const { data, ...rest } = useQuery<singleUserType>(GET_USER);
  const user = data?.user || [];

  return {
    user,
    ...rest,
  };
};
