export type IProduct = {
  id: string,
  name: string,
  price: number,
  quantity: number,
  image: {
    src: string,
    title: string,
  },
  shop: string,
  category: string,
  isAvailable: Boolean,
  createdate: {
    second: number,
    nanosecond: number,
  },
  lastupdate: {
    second: number,
    nanosecond: number,
  },
  createdby: string,
  updatedby: string,
}

export type ICart = {
  product: IProduct,
  quantity: number,
}
export type IUser = {
  email: string,
  displayName: string,
  photoURL: string,
  lastSeen: any,
  cart: ICart[],
  phoneNumber: string,
}