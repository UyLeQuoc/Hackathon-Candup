import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import OrderItemComponent from "./OrderItemComponent";
import { Product } from "../../container/OrderContainer";

interface Props {
  ProductList: Product[]
  amountChangeHandler: (id:string, value:number) => void
  total: number
}

function OrderItemListComponent(props: Props) {

  const {ProductList, amountChangeHandler, total} = props




  return (
    <div className="flex flex-col mx-[10vw]">
      <Typography.Title level={3}>Thông tin giỏ hàng</Typography.Title>
      {ProductList.map((p) => (
        <OrderItemComponent
          data={p}
          handler={amountChangeHandler}
        ></OrderItemComponent>
      ))}
      <div className="flex flex-row justify-between">
        <Typography.Title level={3}>Tổng tiền:</Typography.Title>
        <Typography.Text className="text-base">{total}</Typography.Text>
      </div>
    </div>
  );
}

export default OrderItemListComponent;

