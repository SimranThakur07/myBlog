import { Link, NavLink } from "react-router-dom"
import '../../styles/Navbar.css'
import { BsJustify } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectedSidebarState, toggleSidebar } from "../../reducer/Reducer";
const Navbar = () => {
const dispatch = useDispatch()
const sidebar = useSelector(selectedSidebarState)
const handletoggleSidebar = () => {
  console.log(sidebar);
  dispatch(toggleSidebar())
}

  return (
    <>
    <header>
        <nav>
            <div className="logo">
                <NavLink to="/"><h1>Logo</h1></NavLink>
            </div>
            <div className="list">
                <ul className={!sidebar.isSidebarOpen ? "list-items" : "list-items open"}>
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
                    <NavLink className="nav-links">Profile</NavLink>
                    </li>
                  
                </ul>
                <div className="list">
                  <div className="items">
                    <Link className="nav-links">Logout</Link>
                    </div>
                    <div>
                    <span className="toggle-btn" onClick={handletoggleSidebar}><BsJustify/></span>
                    </div>
                    </div>
            </div> 
        </nav>
    </header>
    </>
  )
}


export default Navbar