import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import { BackToTop } from './components/common/BackTop';
import { Menu } from 'antd';
import Home from './pages/Home'
import Heroes from './pages/Heroes';
import About from './pages/About';
import { PageHeader } from './components/common/PageHeader'


const App: React.FC = (props) => (
  <div className="App">
    {/* header */}
    <PageHeader />


    {/* content */}
    <div
      className="App-Content"
      style={{ paddingBottom: "60px" }}
    >
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/heroes" element={Heroes()} />
        <Route path="/about" element={About()} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      {/* back to top */}
      <BackToTop />
    </div>



    {/* footer navigation */}
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}
      style={{
        position: 'fixed',
        bottom: '0',
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center"
      }}>
      <Menu.Item key="1"><Link to="/heroes">Heros</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
    </Menu>
  </div>
);

export default App;