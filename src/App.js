import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes, Route} from 'react-router-dom'; 
// import Footer from './components/Footer';
import Products from './components/Products';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
// import Product from './components/Product';
import PrivateComponent from './components/PrivateComponent';
import AddProduct from './components/AddProduct';
import YoursProduct from './components/YoursProduct';
import WishList from './components/WishList';
import ShopingCart from './components/ShopingCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const auth = localStorage.getItem("user");
  const profileData= JSON.parse(auth)
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/your-product" element={<YoursProduct/>}/>
      <Route path="/updateProduct" element={<h1>This is updateProduct page</h1>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/products" element={<Products/>}/>
      {
        auth? (
          <>
          <Route path={`/${profileData.name}/cart`} element={<ShopingCart/>}/>
          <Route path={`/${profileData.name}/wishList`} element={<WishList/>}/>
          </>
        ):null
      }
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {/* <Footer/> */}
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
