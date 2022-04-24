import React from "react";
import styles from "app/components/App/App.module.scss";
import Table from "app/components/Table/Table";
import TopRow from "app/components/TopRow/TopRow";
import { useState } from "react";
import { useCallback } from "react";
import { IUser } from "app/interfaces/IUser";
import { useEffect } from "react";

function App() {
  const [selectedUsers, setSelectedUsers] = useState({
    total: 0,
    selected: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredResult, setFilteredResult] = useState("");

  // const debounce = (fn: Function, delay = 500) => {
  //   console.log("Hello");

  //   let timer: any;
  //   return function (this: any, ...args: any[]) {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //     timer = setTimeout(() => fn.apply(this, args), delay);
  //   };
  // };

  // const debouncedSearch = useCallback(
  //   () =>
  //     debounce((query: string) => {
  //       setSearchQuery(query);
  //       console.log(query);
  //     }, 1000),
  //   []
  // );
  console.log(searchQuery);

  // useEffect(() => {
  //   debounce(() => setFilteredResult(searchQuery), 1000);
  // }, [searchQuery]);

  return (
    <div className={styles.App}>
      <TopRow
        userInfo={selectedUsers}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Table setSelectedUsers={setSelectedUsers} />
    </div>
  );
}

export default App;
