import { Skeleton, Typography } from "antd"
import { useEffect, useState } from "react"
import { getProductsFromFirebaseBasedOnShop } from "../../utils/firebase"
import Product from "./Product"

function ProductList({category, products, loadingSkeleton=true} : any) : JSX.Element {
  return (
    <>
    {loadingSkeleton && (
        <div className="product-list bg-white">
          <div className="product-list-title">{category}<div></div></div>
            <Skeleton loading={loadingSkeleton}/> 
        </div>
        ) }
    {
      products.length !== 0 && (
        <div className="product-list bg-white">
          <div className="product-list-title">{category}<div></div></div>
          <div className="product-list-content">
          {
            products.length == 0 ? <Skeleton /> : (
              products.map((product : any) => {
                return (
                  <Product key={product.id} product={product} />
                )
              })
            )
          }
          </div>
        </div>
        )
      }
    </>
  )
}

export default ProductList