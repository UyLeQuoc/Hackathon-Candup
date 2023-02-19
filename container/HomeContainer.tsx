import React from 'react'
import LandingUI from '../components/LandingUI'
import ProductList from '../components/Product/ProductList'

import { useEffect, useState } from 'react';
import { getAllProductsFromFirebase } from '../utils/firebase';
import { message } from 'antd';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../utils/firebase';
function HomeContainer({ user, setUser,products,loading }: any): JSX.Element {



  const filterCategoryProducts = (category: string) => {
    return products.filter((product: any) => product.category === category)
  }

  const randomProducts = products
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .slice(0, 4); // Take the first 4 elements


  const CategoryTitle = ["Đồ Ăn", "Đồ Uống", "Khác"];
  return (
    <>
      <LandingUI products={randomProducts} />
      {
        CategoryTitle.map((category) => {
          console.log("category", category)
          return (
            <ProductList category={category} products={filterCategoryProducts(category)} loading={loading} />
          )
        })
      }
    </>
  )
}

export default HomeContainer