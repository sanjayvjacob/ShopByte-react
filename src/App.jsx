import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopContextProvider from './context/shop-context'
import Shop from "./pages/Shop/Shop"
import Cart from "./pages/Cart/Cart"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import LoginSignup from './pages/LoginSignup/LoginSignup'

function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
      <Router basename="/ShopByte-react">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Shop/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
          <Route path='/login' exact element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
