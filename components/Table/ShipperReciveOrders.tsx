import React, { useEffect, useState } from "react";
import { Button, message, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Product, Shipper } from "../../types/shipper.types";
import { getAllOrdersFromFirebase, getUserFromFirebase } from "../../utils/firebase";
import { useRouter } from "next/router";
import { Users } from "../../types/user.types";
import convertToDongString from "../../utils/convert";
import moment from "moment";

const columns: ColumnsType<Shipper> = [
    {
      title: "Ngày",
      dataIndex: "create",
      key: "create",
      render: (create) => {
        return (
            <div style={{minWidth: "200px"}}>
              <h2>{moment
                    .unix(create.seconds || 0)
                    .locale("vi")
                    .format("LLLL")}{" "}</h2>
            </div>
        );
      },
    },
    {
        title: "Tổng tiền",
        dataIndex: "products",
        key: "products",
        render: (products:Product[], t) => {
       
          
          return <h2>{convertToDongString(t.total) }</h2>;
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
    // {
    //   title: "Time left",
    //   dataIndex: "deliveryTime",
    //   key: "deliveryTime",
    //   render: (deliveryTime) => {
    //     const expiredDay = new Date(deliveryTime.seconds);
    //     const currentDay = new Date();
    //     const timeLeft = expiredDay.getMinutes() - currentDay.getMinutes(); 
    //     if (expiredDay<currentDay) timeLeft ===0;
    //     return <h2>{timeLeft}min</h2>;
    //   },
    // },
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
                >Xem chi tiết
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
          data.forEach(e => {
            e.products.reduce((a,b) => a+b.product.price,0)
          });
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