import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Post = ({title, content, link, post_id}) => {
    const navigate = useNavigate()

    return (
        <div className="post" onClick={() => navigate('/post/' + post_id)}>
            {
                link ?
                    <Link className={'header-link'} to={'/post/' + post_id}>{title}</Link>
                    :
                    <h1>{title}</h1>
            }
            <hr/>
            <p>{content}</p>
        </div>
    );
};

export default Post;
