import { createModel } from "@rematch/core";
import { ICart, IProduct, IUser } from "../../interfaces";


const initialState : IUser  = {
  email: "",
  displayName: "",
  photoURL: "",
  lastSeen: null,
  cart: [],
  phoneNumber: "",
};

export const user  = createModel()({
  state: initialState, // initial state
  reducers: {
    // handle state changes with pure functions
    addProductCart(state, payload):IUser {
      console.log("This is current root state", state);
      // Add product to cart
        const newCart : ICart[] = [...state.cart];
        const index = newCart.findIndex((item: ICart) => item.product.id === payload.id);
        if (index !== -1) {
          newCart[index].quantity += 1;
        } else {
          newCart.push({ product: payload, quantity: 1 });
        }

      return {
        ...state,
        cart: newCart

      };
    },
    clearProductCart(state):IUser {
      // Clear product to cart
        // const newCart : ICart[] = [...state.cart];
        // const index = newCart.findIndex((item: ICart) => item.product.id === payload.id);
        // if (index !== -1) {
        //   newCart.splice(index, 1);
        // }

      return {
        ...state,
        cart: []

      };
    },
    setUserInfo(state, payload):IUser {
      console.log("This is current root state", state);
      return {
        ...state,
        ...payload
      };

    }
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    // async incrementAsync(payload, state) {
    //   console.log("This is current root state", state);
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   dispatch.count.increment(payload);
    // },
  }),
});

