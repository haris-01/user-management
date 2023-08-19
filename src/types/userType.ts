export type singleUserType = {
  id: string | number;
  __typename: "User";
  user: string;
};

export type UserTypeData = {
  __typename: "User";
  Users: singleUserType[];
};
