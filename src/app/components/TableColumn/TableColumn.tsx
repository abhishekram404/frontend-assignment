import React from "react";
import styles from "app/components/TableColumn/TableColumn.module.scss";
import { ITableColumn } from "app/interfaces/ITableColumn";

const TableColumn = ({ children }: ITableColumn) => {
  return <div className={styles.tableColumn}>{children}</div>;
};

export default TableColumn;
