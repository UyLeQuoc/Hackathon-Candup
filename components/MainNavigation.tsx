import { Avatar, Badge, Button, ConfigProvider, Dropdown, Input } from 'antd'
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, LogoutOutlined, HistoryOutlined, CarOutlined } from '@ant-design/icons'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/main/logo.svg'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import CartIcon from './CartIcon'
import { IProduct } from '../interfaces'
import { useState } from 'react'
import ProductList from './Product/ProductList'
import { useRouter } from 'next/router'
function MainNavigation({user, products = []} : any) : JSX.Element {
  const [loggedInUser, loading, error] = useAuthState(auth);

  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (event : any) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product: IProduct) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase())
  });
  console.log(
    "USER", user
  )
  const role = {
    Admin: {
      label: 'Admin',
      url: '/admin'
    },
    Client: {
      label: 'Client',
      url: '/client'
    },
    Shipper: {
      label: 'Shipper',
      url: '/shipper/management'
    }
  }

  return (
    <div className='main-navigation fixed bg-white top-0 left-0 right-0 z-50'>
      <div className='left'>
        <Link href='/' className='logo'>
          <Image src={Logo} alt='logo' width={33} height={41} />
          <div className='title'>Candup</div>
        </Link>
        {
          products.length != 0 && (
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#FF4206',
                },
              }}
              >
                  <Input className='search-bar' placeholder="Search..." prefix={<SearchOutlined />} value={searchTerm} onChange={handleSearch}/>
              </ConfigProvider>
          )
        }
        {
          (searchTerm && products.length != 0) && (
            <div className='search-result'>
              {
                <ProductList products={filteredProducts} category="Search Result"/>
              }
            </div>
          )
        }
      </div>
      {/* User */}
      <div className='right'>
        <CartIcon />
        <Dropdown menu={
          {
            items: [
              {
                key: '1',
                label: (
                  <div onClick={() => router.push("/history")}>
                    History
                  </div>
                ),
                icon: <HistoryOutlined />,
              },
              {
                key: '3',
                label: (
                  <div onClick={() => router.push("/admin")}>
                    Admin
                  </div>
                ),
                icon: <UserOutlined />,
              },
              {
                key: '4',
                label: (
                  <div onClick={() => router.push("/shipper/management")}>
                    Shipper
                  </div>
                ),
                icon: <CarOutlined />,
              },
              {
                key: '2',
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