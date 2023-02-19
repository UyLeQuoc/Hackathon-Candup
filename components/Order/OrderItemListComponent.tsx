import { Button, Row, Col, Typography, Select } from "antd";
import React, { useEffect, useState } from "react";
import OrderItemComponent from "./OrderItemComponent";
import { Product } from "../../container/OrderContainer";
import { ICart } from "../../interfaces";
import convertToDongString from "../../utils/convert";

interface Props {
  ProductList: ICart[]
  quantityChangeHandler: (id:string, value:number) => void
  total: number
  deliveryFee: number
  paymentMethod: string
}

function OrderItemListComponent(props: Props) {

  const {ProductList, quantityChangeHandler, total, deliveryFee, paymentMethod} = props


  return (
    <div className="flex flex-col mx-[10vw]">
      <Typography.Title level={3}>Thông tin giỏ hàng</Typography.Title>
      <Row className="my-[2vh]">
      <Col span={6}>Hình ảnh
      </Col>
      <Col span={8}>Tên sản phẩm
      </Col>
      <Col span={6}>Số lượng
      </Col>
      <Col span={4}> Đơn giá
      </Col>
    </Row>
      {ProductList.map((p) => (
        <OrderItemComponent
          product={p}
          handler={quantityChangeHandler}
        ></OrderItemComponent>
      ))}
      <div className="flex flex-row justify-between">
        <Typography.Title level={3}>Phí ship:</Typography.Title>
        <Typography.Text className="text-base">{convertToDongString(deliveryFee)}</Typography.Text>
      </div>
      <div className="flex flex-row justify-between">
        <Typography.Title level={3}>Tổng tiền:</Typography.Title>
        <Typography.Text className="text-base">{convertToDongString(total)}</Typography.Text>
      </div>
      <div className="flex flex-row justify-between">
        <Typography.Title level={3}>Phương Thức thanh toán:</Typography.Title>
        <Select
      defaultValue={paymentMethod}
      style={{ width: 120 }}
      options={[
        { value: 'Cash', label: 'Cash' },
        { value: 'Banking', label: 'Banking', disabled: true },
      ]}
    />
      </div>

    </div>
  );
}

export default OrderItemListComponent;

