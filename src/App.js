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
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Register from './pages/Register';
import YourRecordings from './pages/YourRecordings';
import MapContainer from './components/MapContainer'
import WeatherComponent from './components/WeatherComponent';
import UpdatePost from './components/UpdatePost';
import RecordingsGrid from './pages/RecordingsGrid';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState("");

  let navigate = useNavigate();

  //If a token exists, sends token to localStorage to persist logged in user
  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
    navigate("/home");
  };

  // Check if token exists before requesting to validate the token
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Navbar
        authenticated={authenticated}
        handleLogOut={handleLogOut}
        user={user}
      />
      <main>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/postdetail/:id" element={<PostDetails />} />
          <Route
            path="/myhikes"
            element={<MyHikes user={user} authenticated={authenticated} />}
          />
          <Route path="/search" element={<Search />} />
          <Route
            path="/posts/postdetail/:id/createcomment"
            element={<CreateComment />}
          />
          <Route path="/createpost" element={<CreatePost user={user} />} />
          <Route path="/updatepost/:id" element={<UpdatePost />} />
          <Route path="/yourrecordings" element={<YourRecordings />} />
          <Route
            path="/recordingsgrid"
            element={
              <RecordingsGrid user={user} authenticated={authenticated} />
            }
          />
          <Route path="/map" element={<MapContainer />} />
          <Route path="weather" element={<WeatherComponent />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
