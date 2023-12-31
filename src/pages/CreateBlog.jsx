import Navbar from "../components/Header/Navbar"
import { BsFacebook, BsInstagram, BsYoutube, BsPinterest, BsPlusLg } from "react-icons/bs";
import "../styles/Profile.css"
const CreateBlog = () => {
  return (
    <>
    <Navbar/>
    <main>
    <div className="profile-page  py-3  blog-page">
    <div className="col-12 col-sm-8 mb-3" >
      <div className="bread-crumb d-flex justify-content-between mb-3 px-2" >
        <h3>Create Blogs</h3>
      </div>
      <div className="mb-3 blog-img">
        <img src="https://images.unsplash.com/photo-1496134732667-ae8d2853a045?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
      </div>
      <form className="col-lg-8 col-sm-12 mb-3 " >
       <div className="mb-3 upload-blog">
    <label htmlFor="blogImg" className="form-label"><BsPlusLg/></label>
   <input type="file" name="blogImg" id="blogImg" />
  </div>
  <div className="mb-3 ">
    <label htmlFor="name" className="form-label">Title</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Description</label>
    <textarea name="" id="" cols="58" rows="8"></textarea>
  </div>
  <button type="submit" className="btn btn-primary mt-4">Publish</button>
        </form>
        </div> 
        <div className="col-lg-4 col-md-4 col-sm-12 about-me text-center blog-list">
    
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
    </main>
    </>
  )
}

export default CreateBlog