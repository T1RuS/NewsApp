import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AllPosts from "./pages/AllPosts";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/posts" element={<AllPosts/>} exact/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
