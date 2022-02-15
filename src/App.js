import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes, Route} from 'react-router-dom'; 
import Footer from './components/Footer';
import Products from './components/Products';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateComponent from './components/PrivateComponent';
import AddProduct from './components/AddProduct';
import YoursProduct from './components/YoursProduct';
import WishList from './components/WishList';
import Error from './components/404'; 
import ViewProject from './components/ViewProject'
import ShopingCart from './components/ShopingCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const auth = localStorage.getItem("user");
  // const profileData= JSON.parse(auth)
  return (
    <BrowserRouter>
    <div className="">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<Error/>}/>
      <Route element={<PrivateComponent/>}>
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/your-product" element={<YoursProduct/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ViewProject/>}/>
      {
        auth? (
          <>
          <Route path={`/shopingCart`} element={<ShopingCart/>}/>
          <Route path={`/wishList`} element={<WishList/>}/>
          </>
        ):null
      }
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
