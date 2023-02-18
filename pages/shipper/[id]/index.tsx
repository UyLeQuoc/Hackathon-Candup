import React, { useEffect, useState } from "react";
import ShipperOrderDetailHeader from "../../../components/Header/ShipperOrderDetail.header";
import ShipperTable from "../../../components/Table/ShipperTable";
import { Button } from "antd";
import { useRouter } from "next/router";
import {
  getOrders,
  getUserFromFirebase,
  setOrderStatus,
} from "../../../utils/firebase";
import { Shipper } from "../../../types/shipper.types";
import { Users } from "../../../types/user.types";

type Props = {};

const orange = "#FF4206";

export default function ShipperOrderDetailPage({}: Props) {
  const newRouter = useRouter();
  const [order, setOrder] = useState<Shipper>();
  const [user, setUser] = useState<Users>();
  const { id } = newRouter.query;

  useEffect(() => {
    (async () => {
      try {
        const orders = (await getOrders(id)) as Shipper;
        console.log(orders);

        const user = (await getUserFromFirebase({ uid: orders?.user })) as Users;
        console.log(user);

        setUser(user);
        setOrder(orders);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeStatus = async () => {
    try {
      await setOrderStatus(id, "success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ShipperOrderDetailHeader />
      <div className="container mx-auto px-2">
        <h1 style={{ color: orange, fontSize: 48 }}>Order Detail</h1>
        <ShipperTable />
        <div
          style={{
            marginRight: 16,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <div style={{ padding: "16px" }}>
            <h3>Tên người nhận</h3>
            <h1 style={{ color: orange }}>{user?.displayName}</h1>
            <h3>Số điện thoại người nhận</h3>
            <h1 style={{ color: orange }}>{user?.defaultPhoneNumber}</h1>
          </div>
          <div>
            <h3>Tổng đơn</h3>
            <h1 style={{ color: orange }}>{order?.totalPrice} đ</h1>
          </div>
        </div>
        <Button
          style={{ width: "100%", height: 50, margin: "16px 0" }}
          onClick={handleChangeStatus}
        >
          Xác nhập giao thành công
        </Button>
      </div>
    </div>
  );
}
