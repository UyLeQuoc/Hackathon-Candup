import { Badge, Col, Row } from "antd"
import Image from "next/image"
import Product from "./Product/Product"
import { FieldTimeOutlined } from '@ant-design/icons';
import Hero from '../public/main/hero.png'
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

function LandingUI() : JSX.Element {
  return (
    <Row className="landing-ui">
      <Col span={14} className="slogan">
        <div className="badge font-semibold mb-1">Delivery <FieldTimeOutlined className="ml-1"/></div>
        {/* The Best */}
        <div className="text-[72px] font-bold">The Fastest</div> 
        <div className="text-[72px] font-bold">Delivery in</div>
        <div className="text-[72px] font-bold text-[#FF4206]">Your University</div>
      </Col>
      <Col span={10} className="hero">
        <div className="hero-product">
            <div>
              <Product product={products[0]}/>
              <Product product={products[0]}/>
            </div>
            <div>
              <Product product={products[0]}/>
              <Product product={products[0]}/>
            </div>
        </div>
        <Image src={Hero} className="hero-image" alt="hero" width={400} height={600}/>
      </Col>
    </Row>
  )
}

export default LandingUI