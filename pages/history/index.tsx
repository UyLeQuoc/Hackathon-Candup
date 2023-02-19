import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ShipperOrderDetailHeader from '../../components/Header/ShipperOrderDetail.header';
import MainFooter from '../../components/MainFooter';
import { Product, Shipper } from '../../types/shipper.types';
import convertToDongString from '../../utils/convert';
import { getAllOrdersFromFirebase } from '../../utils/firebase';



const ShipperReciveOrders: React.FC = () => {
  const [data, setOrders] = useState<Shipper[]>([]);
  const columns: ColumnsType<Shipper> = [
    {
      title: "Giờ giao hàng",
      dataIndex: "deliveryTime",
      key: "deliveryTime",
      render: (create) => {
        return (
          <div style={{ minWidth: "200px" }}>
            <h2>{create}</h2>

          </div>
        );
      },
    },
    {
      title: "Tổng tiền",
      dataIndex: "products",
      key: "products",
      render: (products: Product[], t) => {


        return <h2>{convertToDongString(t.total)}</h2>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case "pending":
            return (
              <h2 style={{ textTransform: "uppercase", color: "gray" }}>
                {status}
              </h2>
            );
          case "delivered":
            return (
              <h2 style={{ textTransform: "uppercase", color: "green" }}>
                {status}
              </h2>
            );
          case "in transit":
            return (
              <h2 style={{ textTransform: "uppercase", color: "yellow" }}>
                {status}
              </h2>
            );
          case "canceled":
            return (
              <h2 style={{ textTransform: "uppercase", color: "red" }}>
                {status}
              </h2>
            );
          default: <h2>{status}</h2>;
            break;
        }
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
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        const router = useRouter();
        const handleOnClick = () => {
          router.push("/history/" + id);
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
  useEffect(() => {
    (async () => {
      try {
        const orders = await getAllOrdersFromFirebase();
        const x = orders.map(order => ({ ...order.data, id: order.id }));
        setOrders(x)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <Table
        style={{ minHeight: "600px" }}
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

function history(): JSX.Element {
  return <>
    <ShipperOrderDetailHeader />
    <ShipperReciveOrders />
    <MainFooter />
  </>


}

export default history