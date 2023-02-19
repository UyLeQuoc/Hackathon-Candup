import React, { useEffect, useState } from "react";
import { Button, message, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Shipper } from "../../types/shipper.types";
import { getAllOrdersFromFirebase, getUserFromFirebase } from "../../utils/firebase";
import { useRouter } from "next/router";
import { Users } from "../../types/user.types";

const columns: ColumnsType<Shipper> = [
    {
      title: "Ngày",
      dataIndex: "create",
      key: "create",
      render: (create) => {
        const day = new Date(create.seconds);
        return (
            <div style={{minWidth: "200px"}}>
              <h2>{day.toDateString()}</h2>
            </div>
        );
      },
    },
    {
        title: "Tổng tiền",
        dataIndex: "totalPrice",
        key: "totalPrice",
        render: (totalPrice) => {
          return <h2>{totalPrice}</h2>;
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
      title: "Time left",
      dataIndex: "expired",
      key: "expired",
      render: (expired) => {
        // const expiredDay = new Date(expired.seconds);
        // const currentDay = new Date();
        // const timeLeft = expiredDay.getMinutes() - currentDay.getMinutes(); 
        // if (expiredDay<currentDay) timeLeft ===0;
        return <h2>min</h2>;
      },
    },
    {
        title:"Action",
        dataIndex:"id",
        key: "id",
        render:(id) =>{
          const router = useRouter();
            const handleOnClick = () => {
                router.push("/shipper/"+id);      
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
  
  const ShipperReciveOrders: React.FC = () => {
    const [data, setOrders] = useState<Shipper[]>([]);
  
    useEffect(() => {
      (async () => {
        try {
          const orders = await getAllOrdersFromFirebase();
          const x = orders.map(order =>( {...order.data, id:order.id}));
          setOrders(x);
        } catch (error) {
          console.log(error); 
        }
      })();
    }, []);
  
    return (
      <div className="container mx-auto">
      <Table
        style={{ minHeight:"600px"}}
        pagination={false}
        columns={columns}
        dataSource={data}    
      />
      </div>
    );
  };
  
  export default ShipperReciveOrders;