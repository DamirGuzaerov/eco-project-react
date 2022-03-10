import React from 'react';
import './App.css';
import Main from "./pages/main/main";
import {Route, Routes} from "react-router-dom";
import {NonAuthLayout} from "./components/layouts/nonAuthLayout";

function App() {
  return (
    <Routes>
        <Route path={''} element={<NonAuthLayout/>}>
            <Route element={<Main/>} index/>
        </Route>
    </Routes>
  );
}

export default App;
