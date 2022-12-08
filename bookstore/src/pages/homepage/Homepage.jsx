import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
     
      
    };

    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        
        
      </div>
      <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Book Store Website 2022</p></div>
      </footer>
    </>
  );
}
