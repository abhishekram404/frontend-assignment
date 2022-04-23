import React from "react";
import styles from "app/components/CheckBox/CheckBox.module.scss";

type Props = {
  isChecked?: boolean;
  setChecked: Function;
};

const CheckBox = ({ isChecked, setChecked }: Props) => {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={isChecked}
      onChange={() => setChecked()}
    />
  );
};

export default CheckBox;
