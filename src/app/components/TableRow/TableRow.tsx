import React from "react";
import styles from "app/components/TableRow/TableRow.module.scss";
import TableColumn from "app/components/TableColumn/TableColumn";
import CheckBox from "app/components/CheckBox/CheckBox";
import { IUser } from "app/interfaces/IUser";

type Props = {
  children?: React.ReactNode;
  head?: boolean;
  data?: IUser;
};

const TableRow = ({ children, head = false, data }: Props) => {
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
