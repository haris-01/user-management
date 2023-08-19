import { useDeleteUserById } from "@hooks/useDeleteUserById";
import React from "react";
import type { UserTableData } from "src/types/UserTableDataType";

type TablePropsType = {
  data: UserTableData[] | null | undefined;
};
const Table = ({ data = [] }: TablePropsType) => {
  const { removeUser } = useDeleteUserById();
  const [sortedColumn, setSortedColumn] = React.useState<
    keyof UserTableData | null
  >(null);
  const [sortDirection, setSortDirection] = React.useState("asc");

  const handleSort = React.useCallback(
    (column: keyof UserTableData) => {
      if (column === sortedColumn) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortedColumn(column);
        setSortDirection("asc");
      }

      data?.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];

        if (sortDirection === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
    },
    [data, sortDirection, sortedColumn]
  );
  const columnNames = Object.keys(data?.[0] || {}).map((name) => name) as Array<
    keyof UserTableData
  >;
  if (!data?.length) {
    return null;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            {columnNames.map((name, i) => (
              <th
                key={`${name}-${i}`}
                className="cursor-pointer px-4 py-2"
                onClick={() => handleSort(name)}
              >
                {name}
              </th>
            ))}
            <th className="cursor-pointer px-4 py-2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            const columnItems = Object.values(item);
            return (
              <tr key={index}>
                {columnItems.map((cItem, i) => (
                  <td key={i} className="px-4 py-2">
                    {cItem}
                  </td>
                ))}
                <td
                  onClick={() => removeUser(item.id)}
                  className="cursor-pointer text-blue-300 hover:text-blue-500 px-4 py-2"
                >
                  REMOVE
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
