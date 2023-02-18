// in src/admin/App.jsx
import { Admin, Resource } from 'react-admin';
import { FirebaseDataProvider } from "react-admin-firebase";
import { firebaseConfig } from "../../utils/firebase";
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "./product";
import { UserEdit, UserList } from "./user";
import { defaultTheme } from 'react-admin';
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
const AdminPage = () => (
  <Admin theme={theme} dataProvider={dataProvider}>
    <Resource name="users" list={<UserList />} edit={<UserEdit />}/>
    <Resource name="Products" list={<ProductList />} show={<ProductShow />} create={<ProductCreate />} edit={<ProductEdit />}/>
  </Admin>
);

export default AdminPage;
