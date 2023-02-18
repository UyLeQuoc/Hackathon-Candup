// Components import
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import { Layout } from 'antd';
import HomeContainer from '../container/HomeContainer';

// Ant Design import
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

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
