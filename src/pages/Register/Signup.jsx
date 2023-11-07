import '../../styles/Register.css'
const Signup = () => {
  return (
    <>
    <div className="sign-up">
    <form className="form">
      <h1>Sign up</h1>
    <div className="flex-column">
      <label>Name </label></div>
      <div className="inputForm">
        <input type="text" className="input" placeholder="Enter your Name"/>
      </div>
    
    <div className="flex-column">
      <label>Email </label></div>
      <div className="inputForm">
        <input type="email" className="input" placeholder="Enter your Email"/>
      </div>
    
    <div className="flex-column">
      <label>Password </label></div>
      <div className="inputForm">
      <input type="password" className="input" placeholder="Enter your Password"/>
      </div>
    
    <button className="button-submit">Sign In</button>
    <p className="p">Already an account? <span className="span">Login</span></p>

</form>
    </div>
    </>
  )
}

export default Signup 