import React from 'react';

const Post = ({title, content}) => {
    return (
        <div className="post">
            <h1>{title}</h1>
            <hr/>
            <p>{content}</p>
        </div>
    );
};

export default Post;
