export interface Users {
  role: string;
  moneyEarn: number;
  displayName: string;
  lastSeen: LastSeen;
  photoURL: string;
  defaultPhoneNumber: string;
  email: string;
  defaultName: string;
  cart: Cart;
}
export interface LastSeen {
  seconds: number;
  nanoseconds: number;
}

export interface Cart {
  total: number;
  products: Product[];
  deliveryFee: number;
  deliveryTime: DeliveryTime;
  state: string;
  location: string;
  name: string;
  note: string;
}

export interface Product {
  itemId: string;
  quantity: number;
}

export interface DeliveryTime {
  seconds: number;
  nanoseconds: number;
}
