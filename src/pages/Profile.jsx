import Navbar from "../components/Header/Navbar"
import "../styles/Profile.css"
import { BsFacebook, BsInstagram, BsYoutube, BsPinterest } from "react-icons/bs";
const Profile = () => {
  return (
    <>
    <Navbar/>
    <main>
      <div className="profile-page  py-3 blog-page">
      <div className="row col-lg-8 col-md-8 col-sm-8">
      <div className="bread-crumb d-flex justify-content-between align-items-center mb-3 px-2" >
        <h3>Profile Settings</h3>
        <button className="delete-profile">Delete Profile</button>
      </div>
      <form className="col-lg-8 col-sm-12 mb-3 " >
        <div className="profile-box">
        <img src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt=""  />
        </div>
      <div className="mb-3 profile-img">
    <label htmlFor="profile" className="form-label">Edit Profile</label>
    <input type="file" className="form-control" id="profile" name="profile" aria-describedby="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Display Name</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="fullName" name="fullName" aria-describedby="name"/>
   
  </div>
  <div className="mb-3">
  <label htmlFor="email1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email1" aria-describedby="email"/>
  </div>
  <div className="mb-3 ">
  <label htmlFor="phone" className="form-label">Phone Number</label>
    <input type="phone" className="form-control" id="phone" name="phone" aria-describedby="phone"/>
  </div>
  <button type="submit" className="btn btn-primary mt-4">Save changes</button>
  <button type="submit" className="btn btn-primary ms-3 cancel-btn px-4 mt-4">Cancel</button>
</form>
</div> 
    
<div className="col-lg-4 col-md-4 col-sm-12 about-me text-center">
    <div className="row col-12 col-sm-12 mb-2 d-flex justify-content-center px-5">
    <hr />
    <h4>About Me</h4>
    <hr />
    <img src="https://images.unsplash.com/photo-1496134732667-ae8d2853a045?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus quia odit autem voluptatibus accusamus quos nobis voluptatem minima debitis asperiores ut natus corrupti, dolorem, atque suscipit fugiat quam aperiam.</p>
    <hr />
    <h4>Category</h4>
    <hr />
    <ul className='d-flex justify-content-center'>
      <li className='mx-2'>Travel</li>
      <li className='mx-2'>Music</li>
      <li className='mx-2'>Food</li>
      <li className='mx-2'>Sport</li>
    </ul>
    <hr />
    <h4>Follow Us</h4>
    <hr />
    <ul className='d-flex justify-content-center social-media'>
      <li className='mx-4 text-primary'><BsFacebook/></li>
      <li className='mx-4 text-danger-emphasis'><BsInstagram/></li>
      <li className='mx-4 text-danger'><BsYoutube/></li>
      <li className='mx-4 text-danger-emphasis'><BsPinterest/></li>
    </ul>
    </div> 
  </div>
  </div>
  
    </main>
    </>
  )
}

export default Profile