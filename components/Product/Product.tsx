import { Button, ConfigProvider, Tooltip, Typography } from "antd"
import Image from "next/image"
import ProductImage from '../../public/resource/product/product.png'
import { PlusOutlined } from '@ant-design/icons';
import convertToDongString from "../../utils/convert";
import { store } from "../../store";

type IProps = {
  product: any,
}
function Product({product}: IProps) : JSX.Element {
  const { dispatch } = store;

  const handleAddProduct = () => {
    dispatch.user.addProductCart(product);
  }
  return (
    product && <div className="product-card">
    <Image src={product.image.src} width={150} height={150} alt={"product"} />
    <div className="w-full">
      <Typography.Title level={5}>{product.name}</Typography.Title>
      <div className="info w-full">
        <Typography.Title level={5}>{convertToDongString(product.price)}</Typography.Title>
        <Tooltip title="Mua ngay">
          <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#FF4206',
            },
          }}
          >
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={handleAddProduct}/>
          </ConfigProvider>
        </Tooltip>
      </div>
    </div>
  </div>
  )
}

export default Product