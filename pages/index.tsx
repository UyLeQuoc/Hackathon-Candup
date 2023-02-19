// Components import
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import { Layout, message } from 'antd';
import HomeContainer from '../container/HomeContainer';
import { useEffect, useState } from 'react';
import { auth, getAllProductsFromFirebase, getUserFromFirebase } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [loggedInUser, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState<any>([]);
  const [loadingProduct, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>({
    email: '',
    displayName: '',
    photoURL: '',
    lastSeen: '',
    cart: [],
    phoneNumber: '',
  });

  useEffect(() => {
    if (loggedInUser) {
      getUserFromFirebase(loggedInUser.uid)
        .then((res) => {
          console.log(res);
          
          if (!res) {
            message.error('Get user failed')
            return;
          }
          setUser(res)
        }
        )


    }
    (async () => {
      const products = await getAllProductsFromFirebase()
      setProducts(products);
      setLoading(loadingProduct);

    })();
  }, [])

  return <>
    <Layout>
      <MainNavigation user={user} />
      <HomeContainer loading={loadingProduct} products={products} user={user} setUser={setUser} />
      <MainFooter />
    </Layout>
  </>;
}

export default App;
