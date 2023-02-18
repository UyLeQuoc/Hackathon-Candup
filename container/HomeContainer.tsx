import React from 'react'
import LandingUI from '../components/LandingUI'
import ProductList from '../components/Product/ProductList'

function HomeContainer() : JSX.Element {
  return (
    <>
      <LandingUI />
      <ProductList />
      <ProductList />
      <ProductList />
    </>
  )
}

export default HomeContainer