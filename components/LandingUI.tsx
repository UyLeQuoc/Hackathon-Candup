import { Badge, Col, Row, Skeleton } from "antd"
import Image from "next/image"
import Product from "./Product/Product"
import { FieldTimeOutlined } from '@ant-design/icons';
import Hero from '../public/main/hero.png'
import { TypeAnimation } from "react-type-animation";
function LandingUI({products} : any) : JSX.Element {
  return (
    <Row className="landing-ui mt-18">
      <Col span={14} className="slogan">
        <div className="badge font-semibold mb-1">Delivery <FieldTimeOutlined className="ml-1"/></div>
        {/* The Best */}
        <TypeAnimation
          className=" font-bold"
          sequence={[
            'The Fastest', 
            3000, 
            'The Best', 
            3000, 
            'The Cheapest',
            3000,
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '36px', marginTop: '8px' }}
        />
        <div className="text-[72px] font-bold">Delivery in</div>
        <div className="text-[72px] font-bold text-[#FF4206]">Your University</div>
      </Col>
      <Col span={10} className="hero">
        {
          products ? (
            <div className="hero-product">
              <div>
                <Product product={products[0]}/>
                <Product product={products[1]}/>
              </div>
              <div>
                <Product product={products[2]}/>
                <Product product={products[3]}/>
              </div>
          </div>
          ) : (
            <Skeleton />
          )
        }
        <Image src={Hero} className="hero-image" alt="hero" width={400} height={600}/>
      </Col>
    </Row>
  )
}

export default LandingUI