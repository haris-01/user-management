import React from "react";
import {
  MainContainer,
  MainContentContainer,
  TextInput,
} from "@components/common";
import Table from "@components/Table";
import { useGetAllUsers } from "@hooks/useGetAllUsers";
import type { User } from "src/types/userType";
import type { UserTableData } from "src/types/UserTableDataType";

const mapDataToTable = (users: User[]): UserTableData[] => {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone || "- -",
    linkedIn: user.linkedIn || "- -",
  }));
};

function HomePage() {
  const { users } = useGetAllUsers();
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<
    UserTableData[] | null
  >();

  const mappedData = mapDataToTable(users);

  React.useEffect(() => {
    if (!users.length) {
      setFilteredData(null);
      return;
    }

    setFilteredData(mappedData);
  }, [mappedData, users]);

  React.useEffect(() => {
    if (searchQuery) {
      const filteredData = mappedData.filter((user) =>
        Object.values(user)
          .join(" ")
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      );
      setFilteredData(filteredData);
      return;
    }

    setFilteredData(mappedData);
  }, [mappedData, searchQuery, users]);

  return (
    <MainContainer>
      <MainContentContainer>
        <TextInput
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type to search ..."
        />
        <Table data={filteredData} />
      </MainContentContainer>
    </MainContainer>
  );
}

export default HomePage;
