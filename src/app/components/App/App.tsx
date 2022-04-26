import React from "react";
import styles from "app/components/App/App.module.scss";
import Table from "app/components/Table/Table";
import TopRow from "app/components/TopRow/TopRow";
import { useState } from "react";
import { IUser } from "app/interfaces/IUser";
import { useEffect } from "react";
import { QueryClient } from "react-query";
import useUsers from "app/hooks/useUsers";

function App() {
  const { data, isLoading, isError, isSuccess } = useUsers();
  const [selectedUsers, setSelectedUsers] = useState({
    total: 0,
    selected: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setFilteredResult(
        data.users.data.filter((user: IUser) =>
          Object.values(user).some((value) => {
            return typeof value === "object"
              ? value.street.match(new RegExp(searchQuery, "i"))
              : value.match(new RegExp(searchQuery, "i"));
          })
        )
      );
    }
  }, [searchQuery]);

  const tableProps = {
    setSelectedUsers,
    users: data?.users?.data,
    isLoading,
    isError,
    filteredResult,
  };

  const topRowProps = {
    userInfo: selectedUsers,
    setSearchQuery,
  };

  return (
    <div className={styles.App}>
      <TopRow {...topRowProps} />
      {searchQuery && (
        <div className={styles.searchSummary}>
          {filteredResult.length} results found for query "{searchQuery}"{" "}
        </div>
      )}
      <Table {...tableProps} />
    </div>
  );
}

export default App;
