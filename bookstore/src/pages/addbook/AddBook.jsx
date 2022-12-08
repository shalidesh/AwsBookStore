import "./addbook.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function AddBook() {

  const [book_title, setTitle] = useState("");
  const [author_name, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      book_title,
      author_name,
      cost
    };
    try {
      
      const res = await axios.post("/post", newPost);
       window.location.replace("/");
      
    } catch (err) {

    }
  };

  return (
    // <div classNameName="write">
    //   <img
    //     className="writeImg"
    //     src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //     alt=""
    //   />
    //   <form className="writeForm" onSubmit={handleSubmit}>
    //     <div className="writeFormGroup_1">
    //       <label htmlFor="fileInput">
    //         <i className="writeIcon fas fa-plus"></i>
    //       </label>
    //       <input id="fileInput" type="file" style={{ display: "none" }} />
    //       <input
    //         className="writeInput"
    //         placeholder="Book Name"
    //         type="text"
    //         autoFocus={true}
    //         onChange={e=>setTitle(e.target.value)}
    //       />
    //     </div>
    //     <div className="writeFormGroup">
    //     <input
    //         className="writeInput writeTextInput"
    //         placeholder="Author Name"
    //         type="text"
    //         autoFocus={true}
    //         onChange={e=>setAuthor(e.target.value)}
    //       />
    //       <input
    //         className="writeInput writeTextInput"
    //         placeholder="Book Cost"
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
    //     <button className="writeSubmit" type="submit">
    //       Publish
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
                            <input type="text" name="txtName" className="form-control" placeholder="Book Name *"  onChange={e=>setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group mb-5">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Author Name *"  onChange={e=>setAuthor(e.target.value)}/>
                        </div>
                        <div className="form-group mb-5">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Book Cost *"  onChange={e=>setCost(e.target.value)}/>
                        </div>
                        <div className="form-group mb-5">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Publish" />
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
        
  );
}
