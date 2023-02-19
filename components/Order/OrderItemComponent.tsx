import { Col, Image, InputNumber, Row, Typography } from "antd";
import React, { useState } from "react";
import { Product } from "../../container/OrderContainer";
import { ICart } from "../../interfaces";

interface Props {
  product: ICart,
  handler: (id:string, value:number) => void
}

function OrderItemComponent(props:Props) {
    let {product, handler} = props

    // console.log("product", product)

    const itemAmountChangeHandler = (value: any) => {
        console.log(value);
        if (typeof value === 'number')
        handler(product.product.id, value)
    }
  return (
    <Row className="my-[2vh]">
      <Col span={6}>
        <Image src={product.product.image.src} width={100} height={100}/>
      </Col>
      <Col span={6}>
        <InputNumber
          min={0}
          max={10}
          onChange={itemAmountChangeHandler}
          value={product.quantity}
        ></InputNumber>
      </Col>
      <Col span={8}>
        <Typography.Title level={5}>{product.product.name}</Typography.Title>
      </Col>
      <Col span={4}>
        <Typography.Text>{product.product.price}</Typography.Text>
      </Col>
    </Row>
  );
}

export default OrderItemComponent;
