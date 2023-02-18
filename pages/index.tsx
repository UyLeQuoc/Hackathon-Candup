// Components import
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import { Layout, message } from 'antd';
import HomeContainer from '../container/HomeContainer';
import { useEffect, useState } from 'react';
import { getAllProductsFromFirebase } from '../utils/firebase';

function App() {
  return <>
    <Layout>
      <MainNavigation />
      <HomeContainer />
      <MainFooter />
    </Layout>
  </>;
}

export default App;
