export type IProduct = {
  id: String,
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  shop: String,
  category: String,
  isAvailable: Boolean,
  createdate: {
    second: Number,
    nanosecond: Number,
  },
  lastupdate: {
    second: Number,
    nanosecond: Number,
  },
  createdby: String,
  updatedby: String,
}

export type ICart = {
  product: IProduct,
  quantity: number,
}
export type IUser = {
  email: String,
  displayName: String,
  photoURL: String,
  lastSeen: any,
  cart: ICart[],
  phoneNumber: String,
}