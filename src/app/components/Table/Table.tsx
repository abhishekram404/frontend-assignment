import React from "react";
import styles from "app/components/Table/Table.module.scss";
import TableRow from "app/components/TableRow/TableRow";
import TableColumn from "app/components/TableColumn/TableColumn";
import CheckBox from "app/components/CheckBox/CheckBox";
import { tableColumnsData } from "app/tableColumnsData";
import { fakeData } from "app/fakeData";
type Props = {};

const Table = (props: Props) => {
  return (
    <main className={styles.table}>
      <TableRow head>
        <TableColumn>
          <CheckBox />
        </TableColumn>
        {tableColumnsData.map((column) => (
          <TableColumn>{column.title}</TableColumn>
        ))}
      </TableRow>

      {fakeData.map((row) => (
        <TableRow data={row} />
      ))}
    </main>
  );
};

export default Table;
