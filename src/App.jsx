import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProdInfor from './pages/ProdInfor'
import CartPage from './pages/CartPage'
import Purchases from './pages/Purchases'
import Navbar from './components/shared/Navbar'
import ProtectedRoutes from './pages/protectedRoutes'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:id' element={<ProdInfor/>}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/purchases' element={<Purchases/>}/>
        </Route>
        <Route path='*' element={<h2>This route does not exist</h2>}/>
      </Routes>
    </div>
  )
}

export default App
