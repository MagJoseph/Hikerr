import Posts from './components/Posts';
import Home from './pages/Home';
import './App.css';
import { Routes, Route } from "react-router-dom";
import PostDetails from './components/PostDetails';
import MyHikes from './pages/MyHikes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/postdetail/:id" element={<PostDetails />} />
          <Route path="/myhikes" element={<MyHikes /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
