import { Col, Divider, Row, Space, Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import Image from 'next/image';
import Logo from '../public/main/logo.png';
import Link from 'next/link';

function MainFooter() : JSX.Element {
  return (
    <div className='bg-white'>
      <Divider />
      <Row justify='space-between' align='top' className='px-[60px] pb-5' gutter={[20,20]}>
        <Col span={8} offset={2}>
          <Link href='/' className='logo'>
            <Image src={Logo} alt='logo' width={33} height={41} />
            <div className='title'>Foodie</div>
          </Link>
          <div className='mt-2'>
          The Foodie app connects college students as both buyers and shippers to order and deliver food from 711, Laha and Passio.
          </div>
        </Col>
        <Col span={6} offset={2}>
          <Space direction='vertical' size='middle'>
            <Typography.Text className='font-bold text-xl'>INFORMATION</Typography.Text>
            <Typography>Về Foodie</Typography>
            <Typography>Trợ giúp</Typography>
          </Space>
        </Col>
        <Col span={6} >
          <Space direction='vertical' size='middle'>
            <Typography.Text className='font-bold text-xl'>CONTACT</Typography.Text>
            <Typography><FacebookOutlined className='mr-2' />Facebook</Typography>
            <Typography><InstagramOutlined className='mr-2' />Instagram</Typography>
            <Typography><InstagramOutlined className='mr-2' />Instagram</Typography>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24} className='text-center bg-[#FF4206] text-white p-6'>
          <div>Copyright 	&copy; 2022 Foodie Co., Ltd. All Right Reserved</div>
        </Col>
      </Row>
    </div>
  )
}

export default MainFooter