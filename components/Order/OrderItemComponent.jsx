import { Col, Image, InputNumber, Row, Typography } from "antd";
import React from "react";

function OrderItemComponent({photoURL, amount, name, price}) {

    const itemAmountChangeHandler = () => {
        
    }

  return (
    <Row>
      <Col span={4}>
        <Image>{photoURL}</Image>
      </Col>
      <Col span={6}>
        <InputNumber
          min={1}
          max={10}
          onChange={itemAmountChangeHandler()}
          defaultValue={amount}
        ></InputNumber>
      </Col>
      <Col span={10}>
        <Typography.Title level={5}>{name}</Typography.Title>
      </Col>
      <Col span={4}>
        <Typography.Text>{price}</Typography.Text>
      </Col>
    </Row>
  );
}

export default OrderItemComponent;
