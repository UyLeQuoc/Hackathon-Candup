import { Avatar, Badge, ConfigProvider, Dropdown, Input } from 'antd'
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/main/logo.svg'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
function MainNavigation() : JSX.Element {
  const [loggedInUser, loading, error] = useAuthState(auth);

  return (
    <div className='main-navigation'>
      <div className='left'>
        <Link href='/' className='logo'>
          <Image src={Logo} alt='logo' width={33} height={41} />
          <div className='title'>Candup</div>
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
        <Dropdown menu={
          {
            items: [
              {
                key: '1',
                label: (
                  <div onClick={() => signOut(auth)}>
                    Log out
                  </div>
                ),
                icon: <LogoutOutlined />,
              },
            ]
          }
        }>
          <Avatar size="default" className='ml-5' src={loggedInUser != null ? loggedInUser.photoURL : <UserOutlined />}/>
        </Dropdown>
      </div>
    </div>
  )
}

export default MainNavigation