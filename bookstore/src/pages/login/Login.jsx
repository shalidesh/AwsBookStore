import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
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
            <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form onSubmit={handleSubmit}>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputUsername" placeholder="myusername" ref={userRef} required autofocus/>
                <label for="floatingInputUsername">Username</label>
              </div>

            

              <hr/>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={passwordRef}/>
                <label for="floatingPassword">Password</label>
              </div>

    
              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit" disabled={isFetching}>Login</button>
              </div>
              

              <a className="d-block text-center mt-2 small" href="#">Do not have an account? Sign Up</a>

              <hr className="my-4"/>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-google me-2"></i> Sign In with Google
                </button>
              </div>

              <div className="d-grid">
                <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign In with Facebook
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