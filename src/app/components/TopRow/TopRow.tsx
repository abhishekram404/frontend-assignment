import React, { useEffect, useRef, useState } from "react";
import styles from "app/components/TopRow/TopRow.module.scss";
import { FiPlus } from "react-icons/fi";
import { useCallback } from "react";
type Props = {
  userInfo: {
    total: number;
    selected: number;
  };
  setSearchQuery: Function;
};

const TopRow = ({ userInfo, setSearchQuery }: Props) => {
  const [searchText, setSearchText] = useState("");

  const debounce = (fn: Function, delay = 500) => {
    let timer: any;
    return function (this: any, ...args: any[]) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  const debouncedSetSearchQuery = useCallback(
    debounce((a: any) => setSearchQuery(a), 500),
    []
  );

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    debouncedSetSearchQuery(searchText);
  }, [searchText]);

  const listener = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "/") {
      searchBoxRef.current.focus();
    }
  };

  const searchBoxRef = useRef(document.createElement("input"));
  useEffect(() => {
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  });

  return (
    <div className={styles.topRow}>
      <h2>
        Users &nbsp;
        <small>
          ({userInfo.selected} out of {userInfo.total} selected)
        </small>
      </h2>
      <div className={styles.rightColumn}>
        <input
          ref={searchBoxRef}
          type="search"
          className={styles.searchBar}
          placeholder="CTRL + / "
          value={searchText}
          onChange={handleSearchQueryChange}
        />

        <button className={styles.addNewUserBtn}>
          <FiPlus /> New User
        </button>
      </div>
    </div>
  );
};

export default TopRow;
