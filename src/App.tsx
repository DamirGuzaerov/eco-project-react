import React from 'react';
import './App.css';
import Main from "./pages/main/main";
import {Route, Routes} from "react-router-dom";
import {NonAuthLayout} from "./components/layouts/nonAuthLayout";
import Profile from "./pages/profile/profile";
import Market from "./pages/market/market";
import CollectionPoints from "./pages/collectionPoints/collectionPoints";
import About from "./pages/about/about";


function App() {
  return (
    <Routes>
        <Route path={''} element={<NonAuthLayout/>}>
            <Route element={<Main/>} index/>
            <Route element={<Profile/>} path={'/profile'}/>
            <Route element={<Market/>} path={'/ecoMarket'}/>
            <Route element={<CollectionPoints/>} path={'/collectionPoints'}/>
            <Route element={<About/>} path={'/about'}/>
        </Route>
    </Routes>
  );
}

export default App;
