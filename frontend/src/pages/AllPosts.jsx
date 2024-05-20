import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Post from "../components/Post";

import { baseURL } from "../config";
import AuthContext from "../context/AuthContext";

const AllPosts = () => {
    const {authTokens} = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens),
            }
        }

        axios.get(baseURL + 'posts/', config).then((response) => {
            setPosts(response.data)
        })
    }, [])

    return (
        <div className='all-posts block'>
            {
                posts.map(
                    post => <Post title={post.title}
                                  content={post.content}
                                  key={post.id}
                                  post_id={post.id}
                                  link
                    />
                )
            }
        </div>
    );
};

export default AllPosts;