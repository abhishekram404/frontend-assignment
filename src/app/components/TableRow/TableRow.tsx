import React from "react";
import styles from "app/components/TableRow/TableRow.module.scss";
import TableColumn from "app/components/TableColumn/TableColumn";
import CheckBox from "app/components/CheckBox/CheckBox";
import { ITableRow } from "app/interfaces/ITableRow";

const TableRow = ({ children, head = false, data }: ITableRow) => {
  return (
    <div className={`${styles.tableRow} ${head ? styles.tableHead : ""}`}>
      {head ? (
        children
      ) : (
        <>
          <TableColumn>
            <CheckBox />
          </TableColumn>
          <TableColumn>{data?.name}</TableColumn>
          <TableColumn>{data?.username}</TableColumn>
          <TableColumn>{data?.email}</TableColumn>
          <TableColumn>{data?.phone}</TableColumn>
          <TableColumn>{data?.website}</TableColumn>
          <TableColumn>{data?.address.street}</TableColumn>
        </>
      )}
    </div>
  );
};

export default TableRow;
