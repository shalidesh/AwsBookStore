import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";


export default function Topbar() {
  const [username, setUsername] = useState("");
  const { user,dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    const fetchPosts = () => {
      if(user){
        setUsername(user.username);
       }else{
        setUsername(" ");
       }
       
      
    };

    fetchPosts();
  },[user]);


  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top">Book Market</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="topListItem">
                        <Link className="link" to="/">
                          Home
                        </Link>
                    </li>
                    <li class="topListItem">
                        <Link className="link" to="/allbooks">
                          Book List
                        </Link>
                    </li>
                    {username==="admin" &&
                    <li className="topListItem">
                        <Link className="link" to="/addbook">
                        Add Books
                      </Link>
                    </li>}
                    {/* <li class="nav-item">
                        <Link className="link" to="/addbook">
                            Add Book
                        </Link>
                    </li> */}
                    {user && <li className="topListItem" onClick={handleLogout}>Logout</li>}
                    
                </ul>
            </div>

        </div>
        <div className="topRight">
           {user ? (
          <Link className="link" to="#">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>

  );
}
