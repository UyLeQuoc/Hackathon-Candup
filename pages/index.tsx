// Components import
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import { Layout } from 'antd';
import HomeContainer from '../container/HomeContainer';

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
