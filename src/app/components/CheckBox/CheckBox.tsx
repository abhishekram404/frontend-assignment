import React from "react";
import styles from "app/components/CheckBox/CheckBox.module.scss";

type Props = {};

const CheckBox = (props: Props) => {
  return <input type="checkbox" className={styles.checkbox} />;
};

export default CheckBox;
