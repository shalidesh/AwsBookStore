import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AddBook from './pages/addbook/AddBook';
import AllBooks from './pages/allbooks/AllBooks';
import EditBook from './pages/editbook/EditBook';
import { useContext ,useState} from "react";
import { Context } from "./context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  
  const { currentUser } = useContext(Context);

  const [data, setData] = useState('');
  

  let id;

  const childToParent = (childdata) => {
    
    console.log(childdata);
    setData(childdata)
    

    //window.location.replace("/updatebook")
    
   
  }

  return (
    <Router>
    <Topbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/allbooks" element={<AllBooks childToParent={childToParent} />} />
      <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
      <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
      <Route path="/addbook" element={currentUser ? <Homepage /> : <AddBook />} />
      <Route path="/updatebook/:id" element={ <EditBook data/>} /> 
      
      
      
    </Routes>
  </Router>
  );
}

export default App;
