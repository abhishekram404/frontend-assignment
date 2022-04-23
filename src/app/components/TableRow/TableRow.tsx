import React from "react";
import styles from "app/components/TableRow/TableRow.module.scss";
import TableColumn from "app/components/TableColumn/TableColumn";
import CheckBox from "app/components/CheckBox/CheckBox";
import { ITableRow } from "app/interfaces/ITableRow";

const TableRow = ({
  children,
  head = false,
  data,
  checkedRows,
  setCheckedRows,
}: ITableRow) => {
  const setChecked = () => {
    if (checkedRows.some((item) => item === data?.id)) {
      return setCheckedRows(
        checkedRows.filter((element) => element !== data?.id)
      );
    }
    setCheckedRows([...Array.from(new Set([...checkedRows, data?.id]))]);
  };

  return (
    <div className={`${styles.tableRow} ${head ? styles.tableHead : ""}`}>
      {head ? (
        children
      ) : (
        <>
          <TableColumn>
            <CheckBox
              isChecked={checkedRows?.some((item) => item === data?.id)}
              setChecked={setChecked}
            />
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
