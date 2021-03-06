import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import Search from './pages/Search'
import Heroes from './pages/Heroes';
import Weapon from './pages/Weapon';
import HeroDetails from './pages/HeroDetails';
import { NavBar, TabBar } from './components/common/index'


const App: React.FC = (props) => (
  <>
    {/* header */}
    <NavBar />


    {/* content */}
    <div id='mian-content'>
      <Routes>
        <Route path="/" element={Heroes()} />
        <Route path="/heroes" element={Heroes()} />
        <Route path="/search" element={Search()} />
        <Route path="/Weapons" element={Weapon()} />
        <Route path="/detail" element={HeroDetails()} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>


    {/* footer navigation */}
    <TabBar />
  </>
);

export default App;