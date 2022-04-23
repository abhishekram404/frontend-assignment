import React from "react";
import styles from "app/components/TableRow/TableRow.module.scss";

type Props = {
  children: React.ReactNode;
  head?: boolean;
};

const TableRow = ({ children, head }: Props) => {
  return (
    <div className={`${styles.tableRow} ${head && styles.tableHead}`}>
      {children}
    </div>
  );
};

export default TableRow;
