import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import PostDetails from './pages/PostDetails';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/posts/:id" element={<PostDetails />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
