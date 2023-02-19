import React, { useEffect, useState } from "react";
import ShipperOrderDetailHeader from "../../../components/Header/ShipperOrderDetail.header";
import MainFooter from "../../../components/MainFooter";
import MainNavigation from "../../../components/MainNavigation";
import ShipperReciveOrders from "../../../components/Table/ShipperReciveOrders";
import OrderContainer from "../../../container/OrderContainer";
import { Shipper } from "../../../types/shipper.types";
import { getAllOrdersFromFirebase, getUserFromFirebase } from "../../../utils/firebase";

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