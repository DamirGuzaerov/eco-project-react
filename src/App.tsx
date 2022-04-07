import React from 'react';
import './App.css';
import Main from "./pages/main/main";
import {Route, Routes} from "react-router-dom";
import {NonAuthLayout} from "./components/layouts/nonAuthLayout";
import {Profile} from "./pages/profile/profile";
import Market from "./pages/market/market";
import CollectionPoints from "./pages/collectionPoints/collectionPoints";
import About from "./pages/about/about";
import historyCard from "./components/ui/historyCard/historyCard";
import HistoryCard from "./components/ui/historyCard/historyCard";
import PromoCodeCard from "./components/ui/promoCodeCard/promoCodeCard";

function App() {
  return (
    <Routes>
        <Route path={''} element={<NonAuthLayout/>}>
            <Route element={<Main/>} index/>
            <Route element={<Profile/>} path={'/profile'}>
                <Route element={<HistoryCard/>} path ={'/profile/history'}/>
                <Route element={<PromoCodeCard/>} path ={'/profile/promo_codes'}/>
            </Route>
            <Route element={<Market/>} path={'/ecoMarket'}/>
            <Route element={<CollectionPoints/>} path={'/collectionPoints'}/>
            <Route element={<About/>} path={'/about'}/>
        </Route>
    </Routes>
  );
}

export default App;
