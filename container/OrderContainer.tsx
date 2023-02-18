import { Typography } from 'antd'
import React from 'react'
import OrderDetailsComponent from '../components/Order/OrderDetailsComponent'
import OrderItemListComponent from '../components/Order/OrderItemListComponent'
function OrderContainer() : JSX.Element{

  const deliveryInfo = {
    section: "Thông tin giao hàng",
    option: "Sửa đổi",
    sub: ["Room No.", "Thời gian giao hàng"], 
    data: ["202", "9:15-9:30"]
    
  }

  const recipientInfo = {
    section: "Thông tin người nhận",
    option: "Sửa đổi",
    sub: ["Tên người nhận", "SĐT người nhận"],
    data: ["John Cena", "0123456789"]
  }



  return (
<div className='flex flex-col bg-slate-400 m-0 p-0' >
    <Typography.Title className='text-center'>THÔNG TIN ĐƠN HÀNG</Typography.Title>
    <OrderDetailsComponent data={deliveryInfo} ></OrderDetailsComponent>
    <OrderDetailsComponent data={recipientInfo} ></OrderDetailsComponent>
    <OrderItemListComponent></OrderItemListComponent>
</div>
  )
}

export default OrderContainer