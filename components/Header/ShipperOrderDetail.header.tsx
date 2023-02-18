import { Avatar, Badge, ConfigProvider, Dropdown, Input } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import Image from "next/image";
import Link from "next/link";

import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
function ShipperOrderDetailHeader(): JSX.Element {
  const [loggedInUser, loading, error] = useAuthState(auth);

  return (
    <div className="main-navigation shadow-lg">
      <div className="left">
        <Link href="/" className="logo">
          <Image src={'/main/logo.svg'} alt="logo" width={33} height={41} />
          <div className="title">Candup</div>
        </Link>
      </div>
      {/* User */}
      <div className="right">
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: <div onClick={() => signOut(auth)}>Log out</div>,
                icon: <LogoutOutlined />,
              },
            ],
          }}
        >
          <Avatar
            size="default"
            className="ml-5"
            src={
              loggedInUser != null ? loggedInUser.photoURL : <UserOutlined />
            }
          />
        </Dropdown>
      </div>
    </div>
  );
}

export default ShipperOrderDetailHeader;
