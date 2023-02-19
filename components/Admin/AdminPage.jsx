// in src/admin/App.jsx
import { Admin, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { FirebaseDataProvider } from "react-admin-firebase";
import { auth, firebaseConfig, getUserFromFirebase } from "../../utils/firebase";
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "./product";
import { UserEdit, UserList } from "./user";
import { defaultTheme } from 'react-admin';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import MainNavigation from '../MainNavigation';
import MainFooter from '../MainFooter';
export const dataProvider = FirebaseDataProvider(firebaseConfig);

const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    secondary: {
      main: '#FF4206',
    },
  },
}
const AdminPage = () => {
  const router = useRouter();
  const [loggedInUser] = useAuthState(auth);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserFromFirebase(loggedInUser).then((user) => {
      if(user?.role !== "admin"){
        router.push("/");
      }
    } );
  }, [])
  return (
    <>
      <MainNavigation />
    <Admin theme={theme} dataProvider={dataProvider}>
      <Resource name="users" list={<UserList />} edit={<UserEdit />}/>
      <Resource name="Products" list={<ProductList />} show={<ProductShow />} create={<ProductCreate />} edit={<ProductEdit />}/>
      <Resource name="Orders" list={ListGuesser} show={ShowGuesser}/>
    </Admin>
    <MainFooter />
    </>
);
  }
export default AdminPage;
