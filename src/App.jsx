import Navbarr from './components/navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Register from './components/register/Register'
import Login from './components/login/Login'
import { createContext, useState } from 'react'
import Menu from './components/MenuPage/Menu'
import Roll from './components/pages/rollpage/Rolll'
import Pizza from './components/pages/pizzapage/pizza'
import Biryani from './components/pages/biryanipage/briyani'
import Burger from './components/pages/burgerpage/burger'
import Cake from './components/pages/cakepage/cake'
import Northindian from './components/pages/northindianpage/northindian'
import Aboutus from './components/about/Aboutus'
import Cart from './components/AddToCart/cart'
import Profile from './components/profile/profile'
import SearchPage from './components/searchpage/search'
import { Store } from './assets/store/store'
import { Provider } from 'react-redux'

export const myContext = createContext();
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loginData,setLoginData] = useState({})
  return (
    <Provider store={Store}>
    <myContext.Provider value={{loginData,setLoginData,searchTerm,setSearchTerm}}>
    <Router>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/roll' element={<Roll/>}/>
        <Route path='/pizza' element={<Pizza/>}/>
        <Route path='/biryani' element={<Biryani/>}/>
        <Route path='/cake' element={<Cake/>}/>
        <Route path='/burger' element={<Burger/>}/>
        <Route path='/north_indian' element={<Northindian/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </Router>
    </myContext.Provider>
    </Provider>
  )
}

export default App
