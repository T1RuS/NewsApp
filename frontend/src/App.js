import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AllPosts from "./pages/AllPosts";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import EditPost from "./pages/EditPost";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/posts" element={<AllPosts/>} exact/>
          <Route path="/create-post" element={<CreatePost/>} exact/>
          <Route path="/post/:post_id" element={<ViewPost/>} exact/>
          <Route path="/edit-post/:post_id" element={<EditPost/>} exact/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
