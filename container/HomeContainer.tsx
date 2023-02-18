import React from 'react'
import LandingUI from '../components/LandingUI'
import ProductList from '../components/Product/ProductList'

import { useEffect, useState } from 'react';
import { getAllProductsFromFirebase } from '../utils/firebase';
import { message } from 'antd';

function HomeContainer() : JSX.Element {
  const [products, setProducts] = useState<any>([]);
  console.log(products);

  useEffect(() => {
    getAllProductsFromFirebase()
    .then((res) => {
      if(!res){
        message.error('Get products failed')
        return;
      }
      setProducts(res)
    })
  },[])

  const filterCategoryProducts = (category: string) => {
    return products.filter((product: any) => product.category === category)
  }

  const CategoryTitle = ["Đồ Ăn", "Đồ Uống", "Khác"];
  return (
    <>
      <LandingUI />
      {
        CategoryTitle.map((category) => {
          console.log("category", category)
          return (
            <ProductList category={category} products={filterCategoryProducts(category)}/>
          )
        })
      }
    </>
  )
}

export default HomeContainer