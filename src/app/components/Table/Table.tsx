import React from "react";
import styles from "app/components/Table/Table.module.scss";
import TableRow from "app/components/TableRow/TableRow";
type Props = {};

const Table = (props: Props) => {
  return (
    <main className={styles.table}>
      <TableRow head>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
      </TableRow>
      <TableRow>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
      </TableRow>
      <TableRow>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
        <div className={styles.table}>C</div>
      </TableRow>
    </main>
  );
};

export default Table;
