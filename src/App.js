import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes, Route} from 'react-router-dom'; 
import Footer from './components/Footer';
import Products from './components/Products';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
// import Product from './components/Product';
import PrivateComponent from './components/PrivateComponent';
import AddProduct from './components/AddProduct';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route   element={<PrivateComponent/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/updateProduct" element={<h1>This is updateProduct page</h1>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/product" element={<Products/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
