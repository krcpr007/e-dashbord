import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes, Route} from 'react-router-dom'; 
import Footer from './components/Footer';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateComponent from './components/PrivateComponent';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>

      <Route   element={<PrivateComponent/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/addProduct" element={<h1>This is add product </h1>}/>
      <Route path="/updateProduct" element={<h1>This is updateProduct page</h1>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/product" element={<h1>This is product page</h1>}/>
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
