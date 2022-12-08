import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
          <div className="col mb-5 mr-5 ml-5 mt-5">
              <div className="card h-100">
                  
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  
                  <div className="card-body p-4">
                      <div className="text-center">
                          
                          <h5 className="fw-bolder">{post.book_title}</h5>
                          
                          {post.cost}
                      </div>
                  </div>
                  
                  <div clasclassNames="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                  </div>
              </div>
            </div>
  );
}
