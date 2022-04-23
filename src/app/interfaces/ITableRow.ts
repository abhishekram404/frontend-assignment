import { IUser } from "./IUser";

export interface ITableRow {
  children?: React.ReactNode;
  head?: boolean;
  data?: IUser;
  checkedRows: string[];
  setCheckedRows: Function;
}
