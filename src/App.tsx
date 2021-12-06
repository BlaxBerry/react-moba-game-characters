import React from 'react';
import { BackToTop } from './components/common/BackTop';
import { Menu } from 'antd';
import { PageHeader } from 'antd';

const App: React.FC = () => (
  <div className="App">
    {/* header */}
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />



    {/* content */}
    <div className="App-Content" style={{
      paddingBottom: "60px"
    }}>
      <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
      {/* back to top */}
      <BackToTop />
    </div>



    {/* footer navigation */}
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{
      position: 'fixed',
      bottom: '0',
      width: "100%",
      height: "60px",
      display: "flex",
      justifyContent: "center"
    }}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </div>
);

export default App;