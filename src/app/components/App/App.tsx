import React from "react";
import styles from "app/components/App/App.module.scss";
import Table from "app/components/Table/Table";
import TopRow from "app/components/TopRow/TopRow";
import { useState } from "react";
import { IUser } from "app/interfaces/IUser";
import { useEffect } from "react";

function App() {
  const [selectedUsers, setSelectedUsers] = useState({
    total: 0,
    selected: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div className={styles.App}>
      <TopRow userInfo={selectedUsers} setSearchQuery={setSearchQuery} />
      <Table setSelectedUsers={setSelectedUsers} />
    </div>
  );
}

export default App;
