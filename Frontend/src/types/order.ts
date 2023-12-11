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

export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: Category;
  subcategory: SubCategory;
  description: string;
  state: boolean;
  qualifications?: Qualifications
}

export interface OrderDetail {
  id: number;
  order: string;
  product: Product;
  quantity: number;
  price: number;
}
export interface User {
  id: 0,
  name:  string;
  email:  string;
  password: string;
  lastName:  string;
  state: true,
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
  updated:  string;
  detail:OrderDetail;

}