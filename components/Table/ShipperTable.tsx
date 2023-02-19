import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Product } from "../../types/shipper.types";
import convertToDongString from "../../utils/convert";

const columns: ColumnsType<Product> = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (item) => {
      return (
        <div
          style={{ display: "flex", alignItems: "center", color: "#FF4206" }}
        >
          <img
            className="rounded-lg"
            src={item.image.src}
            width={200}
            height={200}
          />

          <h2 style={{ margin: "24px 24px" }}>{item.name}</h2>
        </div>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "product",
    key: "product",
    align: "right",
    render: (product, state) => {
      return (
        <h2 style={{ margin: 0, color: "#FF4206" }}>
          {convertToDongString(product.price * state.quantity)}
        </h2>
      );
    },
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    align: "right",
    render: (quantity) => {
      return <h2 style={{ margin: 0, color: "#FF4206" }}>{quantity}</h2>;
    },
  },
];

const ShipperTable: React.FC<{ data: Product[] }> = (props) => (
  <Table
    style={{ background: "red" }}
    pagination={false}
    columns={columns}
    dataSource={props.data}
  />
);

export default ShipperTable;
