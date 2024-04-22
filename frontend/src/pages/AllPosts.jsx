import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../components/Post";

import { baseURL } from "../config";

const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(baseURL + 'posts/').then((response) => {
            setPosts(response.data)
        })
    }, [])

    return (
        <div className='all-posts'>
            {
                posts.map(post => <Post title={post.title} content={post.content} key={post.id}/>)
            }
        </div>
    );
};

export default AllPosts;