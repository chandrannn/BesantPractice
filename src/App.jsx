import React, { useState } from "react";
import "./App.css"
import ChandraMouli from "./Component/ChandraMouli";
import NameChange from "./Component/NameChange";
import Listrender from "./Component/Listrender";
import Listrender2 from "./Component/Mydata";
import Mydata from "./Component/Mydata";
import Apicall from "./Component/Apicall";
import Apicallwitheffect from "./Component/Apicallwitheffect";
import Inputcomp from "./Component/Inputcomp";
import BirthdayProject from "./Component/BirthdayProject";
import Extrahooks from "./Component/Extrahooks";
import HomeComp from "./Component/React Router/HomeComp";
import ProductsComp from "./Component/React Router/ProductsComp";
import AboutComp from "./Component/React Router/AboutComp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Grocery from "./Component/GroceryComp";
import GroceryComp from "./Component/GroceryComp";
import Products from "./Component/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';



function App() {
  const [islog, setislog] = useState(false)
  const handlelogout = () => {
    setislog(true)
  }
  return (
    <div>
      {/* <h1> Mouli</h1> */}
      {/* <ChandraMouli/> */}

      {/* <NameChange/> */}

      {/* <Listrender/> */}

      {/* <Mydata/> */}

      {/* <Apicall/> */}
      {/* {islog ? null : <Apicallwitheffect/>} */}



      {/* <Apicallwitheffect/> */}

      {/* <Inputcomp/> */}

      {/* <BirthdayProject/> */}

      {/* <Extrahooks/> */}
      {/* {/* <br /> */}

      {/* <Link to="/">Home</Link>
      <br />
      <Link to="/Product">Product</Link>
      <br />
      <Link to="/About">About</Link>

      <Routes>


        <Route path="/" element={<HomeComp />} />
        <Route path="/Product" element={<ProductsComp />} />
        <Route path="/About" element={<AboutComp />} />


      </Routes>  */}


      {/* <button onClick={handlelogout}>Logout</button> */}

      {/* <GroceryComp/> */}
      {/* <Products/> */}

    </div>
  )
}
export default App