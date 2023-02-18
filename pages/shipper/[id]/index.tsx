import React from "react";
import ShipperOrderDetailHeader from "../../../components/Header/ShipperOrderDetail.header";
import ShipperTable from "../../../components/Table/ShipperTable";

type Props = {};

export default function ShipperOrderDetailPage({}: Props) {
  return (
    <div>
      <ShipperOrderDetailHeader />
      <div className="container mx-auto">
        <ShipperTable />
        <div
          style={{
            marginRight: 16,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <div style={{padding: '16px'}}>
            <h3>Tên người nhận</h3>
            <h1>Le van viet</h1>
            <h3>Số điện thoại người nhận</h3>
            <h1>31231</h1>
          </div>
          <div>
            <h3>Tổng đơn</h3>
            <h1>00000 đ</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
