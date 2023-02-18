import { Col, Image, InputNumber, Row, Typography } from "antd";
import React, { useState } from "react";
import { Product } from "../../container/OrderContainer";

interface Props {
  data: Product 
  handler: (id:string, value:number) => void
}

function OrderItemComponent(props:Props) {
    let {data, handler} = props

    let {id, image, amount, name, price} = data

    const itemAmountChangeHandler = (value: any) => {
        console.log(value);
        if (typeof value === 'number')
        handler(id, value)
    }

  return (
    <Row className="my-[2vh]">
      <Col span={6}>
        <Image>{image}</Image>
      </Col>
      <Col span={6}>
        <InputNumber
          min={0}
          max={10}
          onChange={itemAmountChangeHandler}
          defaultValue={amount}
        ></InputNumber>
      </Col>
      <Col span={8}>
        <Typography.Title level={5}>{name}</Typography.Title>
      </Col>
      <Col span={4}>
        <Typography.Text>{price}</Typography.Text>
      </Col>
    </Row>
  );
}

export default OrderItemComponent;
