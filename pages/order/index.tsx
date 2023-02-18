import React from 'react'
import MainFooter from '../../components/MainFooter'
import MainNavigation from '../../components/MainNavigation'
import OrderContainer from '../../container/OrderContainer'

function OrderPage() : JSX.Element {
  return (
    <>
    <MainNavigation />
    <OrderContainer />
    <MainFooter />
    </>
  )
}

export default OrderPage