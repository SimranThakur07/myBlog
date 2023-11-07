import { Link, NavLink } from "react-router-dom"
import '../../styles/Navbar.css'
import { BsJustify } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
    <header>
        <nav>
            <div className="logo">
                <NavLink to="/"><h1>Logo</h1></NavLink>
            </div>
            <div className="list">
                <ul className="list-items">
                    <li className="items">
                    <NavLink className="nav-links">Home</NavLink>
                    </li>
                    <li className="items">
                    <NavLink className="nav-links">Blogs</NavLink>
                    </li>
                    <li className="items">
                    <NavLink className="nav-links">Create</NavLink>
                    </li>
                    <li className="items">
                    <NavLink className="nav-links">Video</NavLink>
                    </li>
                    <li className="items">
                    <NavLink className="nav-links">Contact</NavLink>
                    </li>
                    <li className="items">
                    <NavLink className="nav-links">Profile</NavLink>
                    </li>
                    <li className="items">
                    <NavLink className="nav-links">Login</NavLink>
                    </li>
                </ul>
                <div className="list">
                  <div className="items">
                    <Link className="nav-links">Logout</Link>
                    </div>
                    <div className="">
                    <span className="toggle-btn"><BsJustify/></span>
                    </div>
                    </div>
            </div> 
        </nav>
    </header>
    </>
  )
}


export default Navbar