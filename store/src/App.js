import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import img from "./pages/images/no-profile.jpg";
// localhost:3000 -> Home
// localhost:3000/success -> Success
import { Navbar } from 'react-bootstrap';
const steps = [
  {
      id: '0',
      message: 'Hey!',

      trigger: '1',
  }, {
      id: '1',

      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',


      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  },{
    id: '4',
    options: [
         

        { value: 1, label: 'Order Status' },
        { value: 2, label: 'Contact' },

    ],
    end: true
}
];
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: img,
  floating: true,
};


function App() {
  return (
    <>
    <CartProvider>
      <Container>
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
        <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Contuso Bot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
      </Container>

    </CartProvider>
    
                </>
  );
}

export default App;
