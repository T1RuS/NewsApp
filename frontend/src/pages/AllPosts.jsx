import React from 'react';
import Post from "../components/Post";

const AllPosts = () => {
    const posts = [{title: '1', content: '1'}, {title: '2', content: '2'}]

    return (
        <div className='all-posts'>
            {
                posts.map(post => <Post title={post.title} content={post.content}/>)
            }
        </div>
    );
};

export default AllPosts;