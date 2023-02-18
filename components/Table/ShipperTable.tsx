import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  product: {
    name: string;
    image: string;
  };
  price: number;
  quantity: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Sản phẩm",
    dataIndex: "product",
    key: "product",
    render: (product) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={product.image} width={200} height={200}  />

          <h2 style={{ margin: "24px 24px" }}>{product.name}</h2>
        </div>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => {
      return <h2>{price}</h2>;
    },
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (quantity) => {
      return <h2>{quantity}</h2>;
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    product: {
      image: "dsa",
      name: "dasdas",
    },
    price: 32,
    quantity: 33,
  },
  {
    key: "2",
    product: {
      image: "dsa",
      name: "dasdas",
    },
    price: 42,
    quantity: 232,
  },
  {
    key: "3",
    product: {
      image: "dsa",
      name: "dasdas",
    },
    price: 12,
    quantity: 23,
  },
];

const ShipperTable: React.FC = () => (
  <Table
    style={{ background: "red" }}
    pagination={false}
    columns={columns}
    dataSource={data}
  />
);

export default ShipperTable;
