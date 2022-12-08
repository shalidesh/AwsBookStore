import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="body_color">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div className="card-img-left d-none d-md-flex">
            
          </div>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
            <form onSubmit={handleSubmit}>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputUsername" placeholder="myusername" onChange={(e) => setUsername(e.target.value)} required autofocus/>
                <label for="floatingInputUsername">Username</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <label for="floatingInputEmail">Email address</label>
              </div>

              <hr/>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <label for="floatingPassword">Password</label>
              </div>

    
              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
              </div>
              {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}

              <a className="d-block text-center mt-2 small" href="#">Have an account? Sign In</a>

              <hr className="my-4"/>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-google me-2"></i> Sign up with Google
                </button>
              </div>

              <div className="d-grid">
                <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign up with Facebook
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}