import '../../styles/Register.css'

const Login = () => {
  return (
    <>
    <div className="sign-up">
    <form className="form">
      <h1>Login</h1>
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
    
    <div className="flex-row">
      <div>
      <input type="checkbox"/>
      <label>Remember me </label>
      </div>
      <span className="span">Forgot password?</span>
    </div>
    <button className="button-submit">Sign In</button>
    <p className="p">Don&#39;t have an account? <span className="span">Sign Up</span></p>

</form>
    </div>
    </>
  )
}

export default Login