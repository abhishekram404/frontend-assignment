import React from "react";
import styles from "app/components/Table/Table.module.scss";
import TableRow from "app/components/TableRow/TableRow";
import TableColumn from "app/components/TableColumn/TableColumn";
import CheckBox from "app/components/CheckBox/CheckBox";
import { tableColumnsData } from "app/tableColumnsData";
import { fakeData } from "app/fakeData";
import { useState } from "react";
import { IUser } from "app/interfaces/IUser";
import { useEffect } from "react";
import useUsers from "app/hooks/useUsers";
type Props = {
  setSelectedUsers: Function;
  users: IUser[];
  isLoading: boolean;
  isError: boolean;
  filteredResult: IUser[];
};

const Table = ({
  setSelectedUsers,
  users,
  filteredResult,
  isLoading,
  isError,
}: Props) => {
  const [checkedRows, setCheckedRows] = useState([
    ...Array.from(new Set<string>()),
  ]);
  const [isAllChecked, setAllChecked] = useState(false);

  const checkAll = () => {
    const allIds = fakeData.reduce<string[]>(
      (allIdsArray, a: IUser) => [...allIdsArray, a.id],
      []
    );

    if (allIds.sort().toString() === checkedRows.sort().toString()) {
      return setCheckedRows([]);
    } else {
      setCheckedRows(allIds);
    }
  };

  useEffect(() => {
    setSelectedUsers({
      total: fakeData.length,
      selected: checkedRows.length,
    });
    const allIds = fakeData.reduce<string[]>(
      (allIdsArray, a: IUser) => [...allIdsArray, a.id],
      []
    );

    if (allIds.sort().toString() === checkedRows.sort().toString()) {
      return setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkedRows]);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return (
      <>
        <h2>Something went wrong!</h2> <br />
        <h5>We were unable to fetch the data.</h5>
      </>
    );
  }

  return (
    <main className={styles.table}>
      <TableRow head checkedRows={checkedRows} setCheckedRows={setCheckedRows}>
        <TableColumn>
          <CheckBox isChecked={isAllChecked} setChecked={checkAll} />
        </TableColumn>
        {tableColumnsData.map((column) => (
          <TableColumn key={column.title}>{column.title}</TableColumn>
        ))}
      </TableRow>

      {filteredResult.length > 0
        ? filteredResult.map((row: IUser) => (
            <TableRow
              data={row}
              key={row.id}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
            />
          ))
        : users.map((row: IUser) => (
            <TableRow
              data={row}
              key={row.id}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
            />
          ))}

      {}
    </main>
  );
};

export default Table;
