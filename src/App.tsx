import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import { Home, Favourites } from "./routes";
import {Navigation} from "./components";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favourites/>}/>
      </Routes>
    </>
  );
}

export default App;
