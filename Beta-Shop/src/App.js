import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import About from "./components/Home/About/About";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Login from "./components/Login/Login";
import Sign from './components/Login/Sign up/Sign'
import AppContext from "./utils/context";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign up" element={<Sign/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />}></Route>
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
