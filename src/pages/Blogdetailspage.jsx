import Navbar from "../components/Header/Navbar"
import { BsFacebook, BsInstagram, BsYoutube, BsPinterest } from "react-icons/bs";
import '../styles/Maincontext.css'
import '../styles/Blog.css'

const Blogdetailspage = () => {
  return (
    <>
    <Navbar/>
    <div className="main-context text-center blog-page">
  {/* <div className="row  justify-content-center"> */}
    <div className=" col-lg-8 col-md-8 col-sm-12 px-2">
        <div className="blog-details-img">
        <img src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="title d-flex justify-content-between mt-3">
            <h2>Title</h2>
            <span>25-11-2023</span>
        </div>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptates doloremque eum dicta hic, atque eligendi porro aliquam dolor consequuntur aperiam, accusantium, adipisci quis! Deserunt autem provident, nihil, odit eius nemo magni quos quas dolore tempora fuga pariatur repellendus non iure dignissimos. Nulla laboriosam mollitia dolorum animi aut necessitatibus illo exercitationem quos natus enim, culpa repellat quia ea cum reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sequi placeat architecto tempora eos eum ducimus, cupiditate obcaecati assumenda culpa magnam fuga dolor eaque. Iusto quos quod culpa illo reiciendis, aperiam ex asperiores, quasi est, accusantium quo totam distinctio dolores! </p>
        </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12 about-me">
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
      <li className='mx-2'><BsFacebook/></li>
      <li className='mx-2'><BsInstagram/></li>
      <li className='mx-2'><BsYoutube/></li>
      <li className='mx-2'><BsPinterest/></li>
    </ul>
    </div> 
  </div>
  {/* </div> */}
</div> 
    </>
  )
}

export default Blogdetailspage