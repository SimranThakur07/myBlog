import { Link, NavLink } from "react-router-dom"
import '../../styles/Navbar.css'
import { BsJustify } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectedSidebarState, toggleSidebar } from "../../reducer/Reducer";
const Navbar = () => {
const dispatch = useDispatch()
const sidebar = useSelector(selectedSidebarState)
const handletoggleSidebar = () => {
  dispatch(toggleSidebar())
}

const closeSidebar = () => {
  if (sidebar.isSidebarOpen) {
    handletoggleSidebar();
  }
};


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
                    <NavLink to="/" className="nav-links" onClick={closeSidebar}>Home</NavLink>
                    </li>
                    <li className="items">
                    <NavLink to="/blog" className="nav-links"  onClick={closeSidebar}>Blogs</NavLink>
                    </li>
                    <li className="items">
                    <NavLink to="/create-blog" className="nav-links"  onClick={closeSidebar}>Create</NavLink>
                    </li>
                    <li className="items">
                    <NavLink to="/ablout" className="nav-links"  onClick={closeSidebar}>About</NavLink>
                    </li>
                    <li className="items">
                    <NavLink to="/profile" className="nav-links"  onClick={closeSidebar}>Profile</NavLink>
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