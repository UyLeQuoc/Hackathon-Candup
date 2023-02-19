import { Button, Col, ConfigProvider, message, Modal, notification, Row, Tooltip, Typography } from "antd"
import Image from "next/image"
import ProductImage from '../../public/resource/product/product.png'
import { PlusOutlined } from '@ant-design/icons';
import convertToDongString from "../../utils/convert";
import { store } from "../../store";
import { useState } from "react";

type IProps = {
  product: any,
}
function Product({product}: IProps) : JSX.Element {
  const { dispatch } = store;

  const handleAddProduct = () => {
    dispatch.user.addProductCart(product);
    notification.success({
      message: 'Thêm sản phẩm thành công',
      description: 'Bạn đã thêm sản phẩm ' + product.name + ' vào giỏ hàng',
      duration: 2,
    });
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {
        product && (<div className="product-card">
          <Tooltip title="Xem chi tiết">
            <Image src={product.image.src} width={150} height={150} alt={"product"} onClick={showModal}/>
          </Tooltip>
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
      </div>)
      }
    {
      product && (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={false} footer={false}>
        <Row>
          <Col span={12}>
            <Image src={product.image.src} width={150} height={150} alt={"product"} onClick={showModal}/>
          </Col>
          <Col span={12}>
            <Typography.Title level={5}>Tên sản phẩm: {product.name}</Typography.Title>
            <Typography.Title level={5}>Số lượng: {product.quantity}</Typography.Title>
            <Typography.Title level={5}>Nhà cung cấp: {product.shop}</Typography.Title>
            <Typography.Title level={5}>Đơn giá: {convertToDongString(product.price)}</Typography.Title>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#FF4206',
                },
              }}
              >
            <Button type="primary"icon={<PlusOutlined />} onClick={handleAddProduct}>Thêm vào giỏ hàng</Button>
              </ConfigProvider>
            
          </Col>
        </Row>
      </Modal>
      )
    }
    </>
  )
}

export default Product