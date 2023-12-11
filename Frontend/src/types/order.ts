import { Product } from "./Product";

export interface Category {
  id: number;
  name: string;
  available: boolean;
}
export interface SubCategory {
  id: number;
  name: string;
  available: boolean;
}
export interface Qualifications {
  id: number;
  score: number;
  product:  string;
}



export interface OrderDetail {
  id: number;
  order: string;
  product: Product;
  quantity: number;
  price: number;
}
export interface User {
  id: number;
  name:  string;
  email:  string;
  password: string;
  lastName:  string;
  state: boolean,
  startDate:  string;
}
export interface TableEntity {
  id: number;
  number: number;
  capacity: number;
  state: boolean;
  user: User;
}
export interface Order {
  id: number;
  tableEntity: TableEntity;
  date:  string;
  updated?:  string;
  detail:OrderDetail[];

}