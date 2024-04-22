import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AllPosts from "./pages/AllPosts";
import './App.css'

const App = () => {
    return (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/posts" element={<AllPosts />}/>
            </Routes>
          </Layout>
        </Router>
    );
};

export default App;