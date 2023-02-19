import React from 'react'
import LandingUI from '../components/LandingUI'
import ProductList from '../components/Product/ProductList'

import { useEffect, useState } from 'react';
import { getAllProductsFromFirebase } from '../utils/firebase';
import { Avatar, message, Segmented } from 'antd';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { UserOutlined } from '@ant-design/icons';
function HomeContainer({ user, setUser,products,loading, setShopSelect, loadingSkeleton }: any): JSX.Element {



  const filterCategoryProducts = (category: string) => {
    return products.filter((product: any) => product.category === category)
  }

  
  const randomProducts = products
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .slice(0, 4); // Take the first 4 elements


  const CategoryTitle = ["Đồ Ăn", "Đồ Uống", "Khác"];
  return (
    <div className='bg-white'>
      <LandingUI products={randomProducts} />
      <div className='flex justify-center my-10'>
      <Segmented
      className='bg-white'
      onChange={(value) => setShopSelect(value)}
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://firebasestorage.googleapis.com/v0/b/candup-622d8.appspot.com/o/download%20(1).png?alt=media&token=91ed63fb-6467-4375-9a40-4a7d37af6cd5" />
              <div>711</div>
            </div>
          ),
          value: '711',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://firebasestorage.googleapis.com/v0/b/candup-622d8.appspot.com/o/download.png?alt=media&token=97b3d33f-3e32-4a42-b856-1d1b9dbc53e1"/>
              <div>Laha Coffee</div>
            </div>
          ),
          value: 'Laha Coffee',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://firebasestorage.googleapis.com/v0/b/candup-622d8.appspot.com/o/download.jfif?alt=media&token=26ed692c-7b20-4233-9381-e4f83ee7441a" />
              <div>Passio</div>
            </div>
          ),
          value: 'Passio',
        },
      ]}
    />
      </div>
      {
        CategoryTitle.map((category) => {
          return (
            <ProductList category={category} products={filterCategoryProducts(category)} loading={loading} loadingSkeleton={loadingSkeleton}/>
          )
        })
      }
    </div>
  )
}

export default HomeContainer