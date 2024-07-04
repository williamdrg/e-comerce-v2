import { Link } from "react-router-dom"
import './styles/navBar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="narbar_title"><Link to='/'>E-commerce</Link></h1>
      <ul className="navbar_list">
        <li className="navbar_item"><Link to='/login'>Login</Link></li>
        <li className="navbar_item"><Link to='/purchases'>Purchases</Link></li>
        <li className="navbar_item"><Link to='/cart'>cart</Link></li>
      </ul>
    </div>
  )
}

export default Navbar