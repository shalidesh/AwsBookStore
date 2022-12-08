import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/57749/pexels-photo-57749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="#">
              Science
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="#">
              Biology
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="#">
              Technology
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="#">
               Sports
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="#">
              Business
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="#">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
