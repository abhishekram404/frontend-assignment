import React from "react";
import styles from "app/components/TableColumn/TableColumn.module.scss";
type Props = {
  children?: string | React.ReactNode | any;
};

const TableColumn = ({ children }: Props) => {
  return <div className={styles.tableColumn}>{children}</div>;
};

export default TableColumn;
