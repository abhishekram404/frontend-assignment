import React from "react";
import styles from "app/components/App/App.module.scss";
import Table from "app/components/Table/Table";
import TopRow from "app/components/TopRow/TopRow";
import { useState } from "react";
import { fakeData } from "app/fakeData";

function App() {
  const [selectedUsers, setSelectedUsers] = useState({
    total: 0,
    selected: 0,
  });

  console.log(selectedUsers.total, selectedUsers.selected);
  return (
    <div className={styles.App}>
      <TopRow userInfo={selectedUsers} />
      <Table setSelectedUsers={setSelectedUsers} />
    </div>
  );
}

export default App;
