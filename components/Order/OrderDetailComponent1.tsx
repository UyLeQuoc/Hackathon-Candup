import { Typography } from "antd";
import { Col, Row } from "antd";
import { HighlightOutlined } from "@ant-design/icons";
import {Select} from "antd";
import React from "react";
import { Value } from "sass";

function OrderDetailsComponent(props: {
  headings: { section: string; sub: string[] };
  data: { info: string; handler: (value: string) => void }[];
}) {
  const headings = props.headings;
  const data = props.data;

  const ifDisabled = (time: string) => {
    const now = new Date()
    const hour = parseInt(time.split(":")[0])
    const minute = parseInt(time.split(":")[1])
    if (now.getHours() >= hour && now.getMinutes() >=minute ){
        return true
    }
    return false
  }

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
          >
            {data[0].info}
          </Typography.Paragraph>
        </Col>
        <Col span={12}>
          <Select
            value= {data[1].info}
            style={{ width: 120 }}
            onChange={data[1].handler}
            options={[
              { value: "9:15-9:30", label: "9:15-9:30" , disabled: ifDisabled("9:15")},
              { value: "11:45-12:30", label: "11:45-12:30", disabled: ifDisabled("11:45")},
              { value: "15:00-17:15", label: "15:00-17:15", disabled: ifDisabled("15:00")},
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default OrderDetailsComponent;
