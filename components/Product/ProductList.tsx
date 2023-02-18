import { Typography } from "antd"
import Product from "./Product"

function ProductList() : JSX.Element {

  const products = [
    {
      id: 1,
      name: 'Combo 2 Nem Nướng Xiên Que Giảm 4,000',
      price: 24000,
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/1c/1c/1c/0e6b4b1b1b2b1b1b1b1b1b1b1b1b1b1b.jpg'
    },
    {
      id: 2,
      name: 'Combo Cơm Trộn Poke , Tàu Hũ Singapore & 1 Chai Nuớc',
      price: 65000,
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/1c/1c/1c/0e6b4b1b1b2b1b1b1b1b1b1b1b1b1b1b.jpg'
    },
    {
      id: 3,
      name: 'Combo Cơm Trộn Poke , Tàu Hũ Singapore & 1 Chai Nuớc',
      price: 65000,
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/1c/1c/1c/0e6b4b1b1b2b1b1b1b1b1b1b1b1b1b1b.jpg'
    },
    {
      id: 4,
      name: 'Combo Cơm Trộn Poke , Tàu Hũ Singapore & 1 Chai Nuớc',
      price: 65000,
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/1c/1c/1c/0e6b4b1b1b2b1b1b1b1b1b1b1b1b1b1b.jpg'
    },
  ]

  return (
    <div className="product-list bg-white">
      <div className="product-list-title">Ưu Đãi Hấp Dẫn<div></div></div>
      <div className="product-list-content">
      {
        products.map((product) => {
          return (
            <Product key={product.id} product={product} />
          )
        })
      }
      </div>
    </div>
  )
}

export default ProductList