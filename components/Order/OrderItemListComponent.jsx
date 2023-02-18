import { Typography } from "antd";
import React, { useState } from "react";
import OrderItemComponent from "./OrderItemComponent";

function OrderItemListComponent() {
  const Product = {
    photoURL: "",
    name: "Banh mi thit",
    // seller: "711",
    // description: "This is banh mi thit",
    amount: 1,
    price: 15000,
  };

  let ProductListMock = [Product, Product, Product];
  

  const [ProductList, setProductList] = useState(ProductListMock);

  console.log(ProductList);
  return (
    <div>
      <Typography.Title level={3}>Thông tin giỏ hàng</Typography.Title>
      {ProductList.map((p) => (
        <OrderItemComponent data={p}></OrderItemComponent>
      ))}
      <OrderItemComponent data={Product}></OrderItemComponent>
    </div>
  );
}

export default OrderItemListComponent;
