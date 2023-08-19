export type User = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  linkedIn: string | null;
  __typename: "User";
};

export type UserTypeData = {
  __typename: "Users";
  users: User[];
};
