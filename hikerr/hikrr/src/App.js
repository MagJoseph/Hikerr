import Posts from './components/Posts';
import Home from './pages/Home';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
