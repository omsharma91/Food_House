import Navbarr from './components/navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Register from './components/register/Register'
import Login from './components/login/login'
import { createContext, useState } from 'react'
import Menu from './components/MenuPage/Menu'

export const myContext = createContext();
function App() {
  const [loginData,setLoginData] = useState({})
  return (
    <myContext.Provider value={{loginData,setLoginData}}>
    <Router>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </Router>
    </myContext.Provider>
  )
}

export default App
