import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  date: string;
  userId: string;
  status: string;
  total: number;
}
const columns: ColumnsType<DataType> = [
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        return (
            <div style={{minWidth: "200px"}}>
              <h2>{date}</h2>
            </div>
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "userId",
      key: "userId",
      render: (userId) => {
        return <h2>{userId}</h2>;
      },
    },
    {
        title: "Tổng tiền",
        dataIndex: "total",
        key: "total",
        render: (total) => {
          return <h2>{total}</h2>;
        },
      },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <h2>{status}</h2>;
      },
    },
    {
        title:"Action",
        dataIndex:"key",
        key: "key",
        render:(key) =>{
            const handleOnClick = () => {
                    console.log(key);              
            }
            return (
                <div>
                <Button
                    type="primary"
                    onClick={handleOnClick}
                >Nhận đơn
                </Button>
            </div> 
            )
            
        },
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      date: "day",
      userId: "1",
      status: "pending",
      total: 33,
    },
    {
      key: "2",
      date: "day22222222222222222222222",
      userId: "2",
      status: "pending",
      total: 34,
    },
  ];
  const ShipperReciveOrders: React.FC = () => (
    <Table
      style={{ minHeight:"400px"}}
      pagination={false}
      columns={columns}
      dataSource={data}    
    />
  );
  
  export default ShipperReciveOrders;