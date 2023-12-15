import { Product } from './Product'

// Get
export interface Category {
  id: number
  name: string
  available: boolean
}
export interface SubCategory {
  id: number
  name: string
  available: boolean
}
export interface Qualifications {
  id: number
  score: number
  product: string
}

export interface IProduct extends Product {
  qualifications?: Qualifications
}

export interface OrderDetail {
  id: number
  order?: string
  product: IProduct
  quantity: number
  subtotal: number
}

export interface User {
  id: number
  name: string
  email: string
  password: string
  lastName: string
  state: boolean
  startDate: string
}
export interface TableEntity {
  id: number
  number: number
  capacity: number
  state: boolean
  user: User | null
}

export interface Order {
  id: number
  tableEntity: TableEntity
  date: Date
  updated?: string
  detail: OrderDetail[]
  paymentMethod: string
  total: number
  state: string
}


// Post 

export interface IOrderDetail {
  product: {
    id: number;
  };
  quantity: number;
}
export interface ITableEntity {
  id: number
}
export interface IOrder {
  id?: number
  tableEntity: ITableEntity
  detail: IOrderDetail[]
  paymentMethod : string
}