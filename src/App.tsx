import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Heroes from './pages/Heroes';
import Weapon from './pages/Weapon';
import HeroDetails from './pages/HeroDetails';
import { NavBar, TabBar } from './components/common/index'


const App: React.FC = (props) => (
  <div className="App">
    {/* header */}
    <NavBar />

    <div
      className="App-Content"
      style={{
        paddingBottom: "60px",
        paddingTop: "45px"
      }}
    >
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/search" element={Home()} />
        <Route path="/heroes" element={Heroes()} />
        <Route path="/Weapons" element={Weapon()} />
        <Route path="/detail" element={HeroDetails()} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>


    {/* footer navigation */}
    <TabBar />
  </div>
);

export default App;