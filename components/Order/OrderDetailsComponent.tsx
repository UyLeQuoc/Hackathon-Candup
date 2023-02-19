import { Typography } from "antd";
import { Col, Row } from "antd";
import { useState } from "react";
import { HighlightOutlined } from "@ant-design/icons";
import React from "react";

function OrderDetailsComponent(props: {
  headings: {section: string, sub: string[]}
  data: {info: string, handler: (value: string) => void}[]
}) {
  const headings = props.headings;
  const data = props.data;

  return (
    <div className="flex flex-col mx-[10vw] my-[3vw]">
      <div className="flex flex-row justify-between">
        <Typography.Title className="m-0 p-0" level={3}>
          {headings.section}
        </Typography.Title>

      </div>
      <Row>
        <Col span={12}>
          <Typography.Title level={5}>{headings.sub[0]}</Typography.Title>
        </Col>
        <Col span={12}>
          <Typography.Title level={5}>{headings.sub[1]}</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Typography.Paragraph
            editable={{
              icon: <HighlightOutlined />,
              tooltip: "click to edit text",
              onChange: data[0].handler,
              enterIcon: null,
            }}
          >{data[0].info}</Typography.Paragraph>
        </Col>
        <Col span={12}>
<Typography.Paragraph
            editable={{
              icon: <HighlightOutlined />,
              tooltip: "Điền số điện thoại người nhận",
              onChange: data[1].handler,
              enterIcon: null,
            }}
          >{data[1].info}</Typography.Paragraph></Col>
      </Row>
    </div>
  );
}

export default OrderDetailsComponent;
