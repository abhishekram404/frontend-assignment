import React from "react";
import styles from "app/components/TopRow/TopRow.module.scss";
import { FiPlus } from "react-icons/fi";
type Props = {};

const TopRow = (props: Props) => {
  return (
    <div className={styles.topRow}>
      <h2>Users</h2>
      <div className={styles.rightColumn}>
        <input
          type="search"
          className={styles.searchBar}
          placeholder="Search users"
        />

        <button className={styles.addNewUserBtn}>
          <FiPlus /> New User
        </button>
      </div>
    </div>
  );
};

export default TopRow;
