import Navbarr from './components/navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Register from './components/register/Register'
import Login from './components/login/login'

function App() {
  return (
    <Router>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
