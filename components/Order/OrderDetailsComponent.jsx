import { Typography } from "antd";
import { Col, Row } from "antd";
import React from "react";

function OrderDetailsComponent(props) {
  const deliveryInfo = props.data

  return (
    <div className="flex flex-col mx-[10vw] my-[3vw]">
      <div className="flex flex-row justify-between">
        <Typography.Title className="m-0 p-0" level={3}>
          {deliveryInfo.section}
        </Typography.Title>
        <Typography.Title className="m-0 p-0 text-orange-500" level={5}>
          {deliveryInfo.option}
        </Typography.Title>
      </div>
      <Row>
        <Col span={12}>
          <Typography.Title level={5}>{deliveryInfo.sub[0]}</Typography.Title>
        </Col>
        <Col span={12}>
          <Typography.Title level={5}>{deliveryInfo.sub[1]}</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>{deliveryInfo.data[0]}</Col>
        <Col span={12}>{deliveryInfo.data[1]}</Col>
      </Row>
    </div>
  );
}

export default OrderDetailsComponent;
