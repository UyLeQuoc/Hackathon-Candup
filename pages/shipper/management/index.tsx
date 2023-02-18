import React from "react";
import ShipperOrderDetailHeader from "../../../components/Header/ShipperOrderDetail.header";
import MainFooter from "../../../components/MainFooter";
import MainNavigation from "../../../components/MainNavigation";
import ShipperReciveOrders from "../../../components/Table/ShipperReciveOrders";
import OrderContainer from "../../../container/OrderContainer";

function ShipperManagementPage() : JSX.Element {
  return (
    <>
    <ShipperOrderDetailHeader />
    <ShipperReciveOrders />
    <MainFooter />
    </>
  )
}

export default ShipperManagementPage