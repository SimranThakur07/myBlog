import Navbar from "../components/Header/Navbar"
import "../styles/About.css"
import { BsFacebook, BsInstagram, BsYoutube, BsPinterest } from "react-icons/bs";
import video from "../assets/video.mp4"
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page px-4">
    <div className="row col-lg-6 col-md-12 col-sm-12">
    <div className="mb-3 about-img">
        <img src="https://images.unsplash.com/photo-1496134732667-ae8d2853a045?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
      </div>
    </div>
    <div className="row col-lg-6 col-md-12 col-sm-12 blog-para">
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
    <ul className='d-flex justify-content-center social-media mt-3'>
      <li className='mx-2'><BsFacebook/></li>
      <li className='mx-2'><BsInstagram/></li>
      <li className='mx-2'><BsYoutube/></li>
      <li className='mx-2'><BsPinterest/></li>
    </ul>
    </div>
    </div>
    <div className="row col-lg-12 col-md-12 col-sm-12 mt-3">
      <video autoPlay="true" loop="true" controls="true" src={video}></video>
    </div>
    </div>
    </>
  )
}

export default About