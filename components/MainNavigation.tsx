import { Avatar, Badge, ConfigProvider, Input } from 'antd'
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/main/logo.png'
function MainNavigation() : JSX.Element {
  return (
    <div className='main-navigation'>
      <div className='left'>
        <Link href='/' className='logo'>
          <Image src={Logo} alt='logo' width={33} height={41} />
          <div className='title'>Foodie</div>
        </Link>
        <ConfigProvider
         theme={{
          token: {
            colorPrimary: '#FF4206',
          },
        }}
        >
          <Input className='search-bar' placeholder="Search..." prefix={<SearchOutlined />} />
        </ConfigProvider>
      </div>
      {/* User */}
      <div className='right'>
        <Badge count={5} color="#FF4206">
          <ShoppingCartOutlined className='cart-icon'/>
        </Badge>
        <Avatar size="large" className='avatar' icon={<UserOutlined />} />
      </div>
    </div>
  )
}

export default MainNavigation