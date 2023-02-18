import { Button, ConfigProvider, Tooltip, Typography } from "antd"
import Image from "next/image"
import ProductImage from '../../public/resource/product/product.png'
import { PlusOutlined } from '@ant-design/icons';
import convertToDongString from "../../utils/convert";

type IProps = {
  product: any
}
function Product({product}: IProps) : JSX.Element {
  

  return (
    <div className="product-card">
      <Image src={ProductImage} width={150} height={150} alt={"product"} />
      <div>
        <Typography.Title level={5}>{product.name}</Typography.Title>
        <div className="info">
          <Typography.Title level={5}>{convertToDongString(product.price)}</Typography.Title>
          <Tooltip title="Mua ngay">
            <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#FF4206',
              },
            }}
            >
              <Button type="primary" shape="circle" icon={<PlusOutlined />} />
            </ConfigProvider>
          </Tooltip>
        </div>
        
      </div>
    </div>
  )
}

export default Product