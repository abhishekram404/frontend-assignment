import React from "react";
import styles from "app/components/App/App.module.scss";
import Table from "app/components/Table/Table";
import TopRow from "app/components/TopRow/TopRow";

function App() {
  return (
    <div className={styles.App}>
      <TopRow />
      <Table />
    </div>
  );
}

export default App;
