import { Button, Typography } from "antd";
import React from "react";
import OrderDetailsComponent from "../components/Order/OrderDetailsComponent";
import OrderItemListComponent from "../components/Order/OrderItemListComponent";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export interface Product {
  price: number;
  name: string;
  amount: number;
  image: string;
  id: string;
}
function OrderContainer(): JSX.Element {

  const [loginUser] = useAuthState(auth)

  
  const deliveryHeading = {
    section: "Thông tin giao hàng",
    sub: ["Room No.", "Thời gian giao hàng"],
  };
  const recipientHeading = {
    section: "Thông tin người nhận",
    sub: ["Tên người nhận", "SĐT người nhận"],
  };

  let product: Product = {
    id: "1",
    image: "",
    name: "Banh mi thit",
    amount: 1,
    price: 15000,
  };

  let ProductListMock: Product[] = [
    {
      id: "1",
      image: "",
      name: "Banh mi thit",
      amount: 1,
      price: 15000,
    },
    {
      id: "2",
      image: "",
      name: "Banh mi thit",
      amount: 1,
      price: 15000,
    },
    {
      id: "3",
      image: "",
      name: "Banh mi thit",
      amount: 1,
      price: 15000,
    },
  ];
  const [cart, setCart] = useState({
    ProductList: ProductListMock,
    Location: "202",
    DeliveryTime: "9:15-9:30",
    RecipientName: "John Cena",
    PhoneNumber: "0123456789",
    Total: 0
  })

  //update productList when amount is changed
  const amountChangeHandler = (id: string, value: number) => {
    const ProductList = cart.ProductList
    const index = ProductList.findIndex((p) => p.id === id);
    
    setCart({
      ...cart,
      ProductList: [
        ...ProductList.slice(0, index),
        { ...ProductList[index], amount: value },
        ...ProductList.slice(index + 1),
      ]
    });
  };

  //update total when productList is changed

  useEffect(() => {
    let temp = 0;
    cart.ProductList.map((p) => {
      temp += p.amount * p.price;
    });
    setCart({
      ...cart,
      Total: temp
    });
  }, [cart.ProductList]);

  const locationChangeHandler = (value: string) => {
    setCart({
      ...cart,
      Location: value
    });
  };

  const deliveryTimeChangeHandler = (value: string) => {
    setCart({
      ...cart,
      DeliveryTime: value
    });
  };

  const recipientNameChangeHandler = (value: string) => {
    setCart({
      ...cart,
      RecipientName: value
    });
  };

  const phoneNumberChangeHandler = (value: string) => {
    setCart({
      ...cart,
      PhoneNumber: value
    });
  };
  return (
    <div className="flex flex-col bg-slate-400 m-0 p-0">
      <Typography.Title className="text-center">
        THÔNG TIN ĐƠN HÀNG
      </Typography.Title>
      <OrderDetailsComponent
        headings={deliveryHeading}
        data={[
          { info: cart.Location, handler: locationChangeHandler },
          { info: cart.DeliveryTime, handler: deliveryTimeChangeHandler },
        ]}
      ></OrderDetailsComponent>
      <OrderDetailsComponent
        headings={recipientHeading}
        data={[
          { info: cart.RecipientName, handler: recipientNameChangeHandler },
          { info: cart.PhoneNumber, handler: phoneNumberChangeHandler },
        ]}
      ></OrderDetailsComponent>
      <OrderItemListComponent
        ProductList={cart.ProductList}
        amountChangeHandler={amountChangeHandler}
        total={cart.Total}
      ></OrderItemListComponent>
      <Button size="large" className="mx-[10vw]" onClick={() => {console.log(cart)} }>Thanh Toán</Button>
    </div>
  );
}

export default OrderContainer;
