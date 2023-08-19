export type singleUserType = {
  __typename: "User";
  user: {
    id: string | number;
    name: string;
    email: string;
    phone: string | null;
    linkedIn: string | null;
  };
};

export type UserTypeData = {
  __typename: "Users";
  Users: singleUserType[];
};
