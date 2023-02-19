// Components import
import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import MainFooter from '../components/MainFooter';
import MainNavigation from '../components/MainNavigation';
import HomeContainer from '../container/HomeContainer';
import { auth, getProductsFromFirebaseBasedOnShop, getUserFromFirebase } from '../utils/firebase';

function App() {
  const [loadingSkeleton, setLoadingSkeleton] = useState<boolean>(true);
  const [loggedInUser, loading, error] = useAuthState(auth);
  const [shopSelect, setShopSelect] = useState<string>('711');
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
  console.log('shopSelect', shopSelect)

  useEffect(() => {
    if (loggedInUser) {
      getUserFromFirebase(loggedInUser.uid)
        .then((res) => {
          console.log(res);
          
          if (!res) {
            return;
          }
          setUser(res)
        }
        )

        // getProductsFromFirebaseBasedOnShop(shopSelect)
        // .then((res) => {
        //   console.log(res);
        //   setProducts(res);
        //   setLoading(false);
        // })
    }
    (async () => {
      const products = await getProductsFromFirebaseBasedOnShop(shopSelect)
      setProducts(products);
      setLoading(loadingProduct);
      setLoadingSkeleton(false);
    })();
  }, [shopSelect])

  return <>
    <Layout>
      <MainNavigation user={user} products={products}/>
      <HomeContainer loading={loadingProduct} products={products} user={user} setUser={setUser} setShopSelect={setShopSelect} loadingSkeleton={loadingSkeleton}/>
      <MainFooter />
    </Layout>
  </>;
}

export default App;
