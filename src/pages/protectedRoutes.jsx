import { Navigate, Outlet } from "react-router-dom"

const protectedRoutes = () => {
    const token = localStorage.getItem('token')
  
  if (token) {
    return <Outlet/>
  } else {
    return <Navigate to='/login'/>
  }

}

export default protectedRoutes