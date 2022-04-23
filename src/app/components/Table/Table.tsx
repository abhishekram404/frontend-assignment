import React from "react";
import styles from "app/components/Table/Table.module.scss";
import TableRow from "app/components/TableRow/TableRow";
import TableColumn from "app/components/TableColumn/TableColumn";
import CheckBox from "app/components/CheckBox/CheckBox";
import { tableColumnsData } from "app/tableColumnsData";
import { fakeData } from "app/fakeData";
import { useState } from "react";
type Props = {};

const Table = (props: Props) => {
  const [checkedRows, setCheckedRows] = useState([
    ...Array.from(new Set<string>()),
  ]);

  console.log(checkedRows);
  return (
    <main className={styles.table}>
      <TableRow head checkedRows={checkedRows} setCheckedRows={setCheckedRows}>
        <TableColumn>
          <CheckBox setChecked={setCheckedRows} />
        </TableColumn>
        {tableColumnsData.map((column) => (
          <TableColumn key={column.title}>{column.title}</TableColumn>
        ))}
      </TableRow>

      {fakeData.map((row) => (
        <TableRow
          data={row}
          key={row.id}
          checkedRows={checkedRows}
          setCheckedRows={setCheckedRows}
        />
      ))}
    </main>
  );
};

export default Table;
