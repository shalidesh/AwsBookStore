import "./editbook.css";
import {  useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function EditBook() {

  
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const path = location.pathname.split("/")[2];

  const [book_title, setTitle] = useState("");
  const [author_name, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");
  const [upadteposts, setUpdatePosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post/update",{params: { id:path}});
      setPosts(res.data);
    };
    fetchPosts();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      book_title,
      author_name,
      cost
    };
    try {
      const res = await axios.put(`/post/${path}`,newPost);
      window.location.replace("/");
    } catch (err) {

    }
  };

  // async  function updatePosts(id){
  //   try {
  //     const fetchUpdatePosts = async () => {
  //       const res = await axios.get("/post/update",{params: { id:id}});
  //       setUpdatePosts(res.data);  
  //       console.log(upadteposts);
  //     };
  //     fetchUpdatePosts();
      
  //   } catch (err) {

  //   }
  // };


  return (
    // <div className="write">
    //   <img
    //     className="writeImg"
    //     src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //     alt=""
    //   />
    //   <form className="writeForm" onSubmit={handleSubmit} >
    //     <div className="writeFormGroup_1">
    //       <label htmlFor="fileInput">
    //         <i className="writeIcon fas fa-plus"></i>
    //       </label>
    //       <input id="fileInput" type="file" style={{ display: "none" }} />
    //       <input
    //         className="writeInput"
    //         placeholder={posts.book_title}
    //         type="text"
    //         autoFocus={true}
    //         onChange={e=>setTitle(e.target.value)}
    //       />
    //     </div>
    //     <div className="writeFormGroup">
    //     <input
    //         className="writeInput writeTextInput"
    //         placeholder={posts.author_name}
    //         type="text"
    //         autoFocus={true}
    //         onChange={e=>setAuthor(e.target.value)}
    //       />
    //       <input
    //         className="writeInput writeTextInput"
    //         placeholder={posts.cost}
    //         type="text"
    //         autoFocus={true}
    //         onChange={e=>setCost(e.target.value)}
    //       />
    //       <textarea
    //         className="writeInput writeText"
    //         placeholder="Book Description..."
    //         type="text"
    //         autoFocus={true}
    //         onChange={e=>setDesc(e.target.value)}
    //       />
         
    //     </div>
    //     <button className="writeSubmit" type="submit" >
    //       UPDATE
    //     </button>
    //   </form>
    // </div>
    <div className="container contact-form body_color">
    <div className="contact-image">
        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
    </div>
    <form method="post" onSubmit={handleSubmit}>
        <h3>Add Book Details</h3>
       <div className="row">
            <div className="col-md-6">
                <div className="form-group mb-5">
                    <input type="text" name="txtName" className="form-control" placeholder={posts.book_title}  onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="form-group mb-5">
                    <input type="text" name="txtEmail" className="form-control" placeholder={posts.author_name}  onChange={e=>setAuthor(e.target.value)}/>
                </div>
                <div className="form-group mb-5">
                    <input type="text" name="txtPhone" className="form-control" placeholder={posts.cost}  onChange={e=>setCost(e.target.value)}/>
                </div>
                <div className="form-group mb-5">
                    <input type="submit" name="btnSubmit" className="btnContact" value="Update" />
                </div>
            </div>
            
        </div>
    </form>
</div>
  );
}
