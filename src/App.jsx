import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopContextProvider from './context/shop-context'
import Shop from "./pages/Shop/Shop"
import Cart from "./pages/Cart/Cart"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
      <Router basename="/ShopByte-react">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Shop/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
