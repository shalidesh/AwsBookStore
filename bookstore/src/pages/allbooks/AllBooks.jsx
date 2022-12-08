import React from 'react'
import { useLocation,useNavigate } from "react-router";
import { useEffect, useState ,useContext} from "react";
import axios from "axios";
import { Context } from '../../context/Context';


export default function AllBooks({childToParent}) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const navigate=useNavigate();
  const { user } = useContext(Context);
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
      
    };

    fetchPosts();
  });

  async  function deletePosts(id){
    try {
    
      const res = await axios.delete(`/post/${id}`);

      const fetchPosts = async () => {
        const res = await axios.get("/post");
        setPosts(res.data);
        
      };
  
      fetchPosts();
      
    } catch (err) {

    }
  };



  function updatePostsRoot(id){
    navigate(`/updatebook/${id}`);
  };
 


  return (
    <>
    
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Books Collection</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Browse and Learn</p>
                </div>
            </div>
        </header>
    
        <table className="container table table-striped  mt-5">
   <thead>
    <tr>
      <th scope="col">BookID</th>
      <th scope="col">Book Name</th>
      <th scope="col">Author Name</th>
      <th scope="col">Book Cost</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

     {posts.map((p) => (
        
        <tr>
      <th scope="row">{p._id}</th>
      <td>{p.book_title}</td>
      <td>{p.author_name}</td>
      <td>{p.cost}</td>
      <td>
        {user.username==="admin" && 
      <button type="button" className="btn btn-primary mr-5"  onClick={() =>deletePosts(p._id)}>Delete</button>}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {user.username==="admin" && 
      <button type="button" className="btn btn-primary ml-3" onClick={() => updatePostsRoot(p._id)} >Update</button>
      } 
      {user.username!="admin" && 
      <button type="button" className="btn btn-primary mr-5" disabled  >Delete</button>}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {user.username!="admin" && 
      <button type="button" className="btn btn-primary ml-3" disabled  >Update</button>
      } 
      </td>
    </tr>
  ))}
    
    
  </tbody>
</table>
    </>
    
  )
}
