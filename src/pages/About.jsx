import Navbar from "../components/Header/Navbar"
import "../styles/About.css"
import { BsFacebook, BsInstagram, BsYoutube, BsPinterest } from "react-icons/bs";
import video from "../assets/video.mp4"
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page px-4">
    <div className="bread-crumb d-flex justify-content-between ms-3 mb-3  px-2 w-100" >
        <h3>About</h3>
      </div>
    <div className="row col-lg-6 col-md-12 col-sm-12">
    <div className="mb-3 about-img">
        <img src="https://images.unsplash.com/photo-1496134732667-ae8d2853a045?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
      </div>
    </div>
    <div className="row col-lg-6 col-md-12 col-sm-12 blog-para ">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis voluptas pariatur. Asperiores qui labore quae eos laboriosam quaerat ut architecto consequuntur ea! Saepe et officia fugiat nam, libero reiciendis amet dignissimos ad accusamus facere explicabo eveniet laudantium, beatae ab necessitatibus nulla? Iusto ab provident, eius non facilis eos praesentium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus amet ex eos perferendis modi officia maxime voluptates. Excepturi, corrupti aliquid alias eius est quis velit dolorem suscipit, dicta nam porro adipisci? Dicta perspiciatis vitae commodi harum. A excepturi molestias, est, incidunt voluptatum architecto obcaecati aliquid magni quidem sit voluptas?
      </p>
      <div className="text-center">
      <h4>Category</h4>
    <hr />
    <ul className='d-flex justify-content-center mt-3'>
      <li className='mx-4'>Travel</li>
      <li className='mx-4'>Music</li>
      <li className='mx-4'>Food</li>
      <li className='mx-4'>Sport</li>
    </ul>
    <hr />
    <h4 className="mt-3">Follow Us</h4>
    <hr />
    <ul className='d-flex justify-content-center social-media'>
      <li className='mx-4 text-primary'><BsFacebook/></li>
      <li className='mx-4 text-danger-emphasis'><BsInstagram/></li>
      <li className='mx-4 text-danger'><BsYoutube/></li>
      <li className='mx-4 text-danger-emphasis'><BsPinterest/></li>
    </ul>
    </div>
    </div>
    <div className="row col-lg-12 col-md-12 col-sm-12 mt-3">
      <video autoPlay={true} loop={true} controls={true} src={video}></video>
    </div>
    </div>
    </>
  )
}

export default About