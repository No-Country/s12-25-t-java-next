import { User } from "./user";

export interface Table {
  id: number;
  number: number;
  capacity: number;
  state: boolean;
  user: User;
}
