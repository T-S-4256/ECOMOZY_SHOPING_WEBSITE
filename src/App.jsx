import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [searchItem,setSearchItem]=useState("");
  return (<div>
    <div>
      <Navbar setSearchItem={setSearchItem} searchItem={searchItem} />
    </div>
    <Routes>
      <Route path="/" element={<Home searchItem={searchItem}/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

  </div>)
};

export default App;
