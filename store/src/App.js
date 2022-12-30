import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/custom.css'
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';
import About from './pages/about';
import Home from './pages';
import Profile from './pages/profile';
import Chatbot from './components/ChatBot';
// localhost:3000 -> Home
// localhost:3000/success -> Success


function App() {
  return (


    <CartProvider >
      <div className="cont">
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="market" element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path ="about" index element={<About />} />
            <Route path ="profile" index element={<Profile />} />
          </Routes>
        </BrowserRouter>

      </div>
      <Chatbot/>
    </CartProvider>

  );
}

export default App;
