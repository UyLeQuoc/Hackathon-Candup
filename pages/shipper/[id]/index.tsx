import React from "react";
import ShipperOrderDetailHeader from "../../../components/Header/ShipperOrderDetail.header";
import ShipperTable from "../../../components/Table/ShipperTable";
import { Button } from "antd";
import { useRouter } from "next/router";

type Props = {};
const orange = "#FF4206";

export default function ShipperOrderDetailPage({}: Props) {
  const newRouter = useRouter()
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
            <h1 style={{ color: orange }}>Le van viet</h1>
            <h3>Số điện thoại người nhận</h3>
            <h1 style={{ color: orange }}>31231</h1>
          </div>
          <div>
            <h3>Tổng đơn</h3>
            <h1 style={{ color: orange }}>00000 đ</h1>
          </div>
        </div>
        <Button style={{ width: "100%", height: 50, margin: "16px 0" }} onClick={() => newRouter.push('/shipper/management')}>
          Xác nhập giao thành công
        </Button>
      </div>
    </div>
  );
}
