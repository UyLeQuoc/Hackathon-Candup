// in src/admin/App.jsx
import { Admin, Resource } from 'react-admin';
import { FirebaseDataProvider } from "react-admin-firebase";
import { auth, firebaseConfig } from "../../utils/firebase";
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "./product";
import { UserEdit, UserList } from "./user";
import { defaultTheme } from 'react-admin';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
  const { loggedInUser } = useAuthState(auth);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserFromFirebase(loggedInUser).then((user) => {
      if(user?.role !== "admin"){
        router.push("/");
      }
    } );
  }, [])
  return (
  <Admin theme={theme} dataProvider={dataProvider}>
    <Resource name="users" list={<UserList />} edit={<UserEdit />}/>
    <Resource name="Products" list={<ProductList />} show={<ProductShow />} create={<ProductCreate />} edit={<ProductEdit />}/>
  </Admin>
);
  }
export default AdminPage;
