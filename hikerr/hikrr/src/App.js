import Posts from './components/Posts';
import Home from './pages/Home';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckSession } from "./services/Auth";
import PostDetails from './components/PostDetails';
import MyHikes from './pages/MyHikes';
import Navbar from './components/Navbar';
import Search from './components/Search';
import CreateComment from './pages/CreateComment';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState('')

  let navigate = useNavigate();
  
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
}


  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/postdetail/:id" element={<PostDetails />} />
          <Route path="/myhikes" element={<MyHikes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/createcomment" element={<CreateComment />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
