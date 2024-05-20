import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllPosts from "./pages/AllPosts";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/viewPost";
import EditPost from "./pages/EditPost";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import AuthContext from "./context/AuthContext";
import {Navigate} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

const MainRouter = () => {
    const {user} = useContext(AuthContext)

    return (
        <>
            {user ?
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} exact/>
                      <Route path="/posts" element={<AllPosts/>} exact/>
                      <Route path="/create-post" element={<CreatePost/>} exact/>
                      <Route path="/post/:post_id" element={<ViewPost/>} exact/>
                      <Route path="/edit-post/:post_id" element={<EditPost/>} exact/>
                      <Route path="*" element={<Navigate to="/" replace />} exact/>
                  </Routes>
                </Layout>
                :
                <Routes>
                  <Route path="/login" element={<LoginPage/>} exact/>
                  <Route path="/register" element={<RegisterPage/>} exact/>
                </Routes>
            }
        </>
    );
};

export default MainRouter;