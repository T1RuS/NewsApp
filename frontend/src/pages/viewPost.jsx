import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {baseURL} from "../config";
import Post from "../components/Post";
import Button from "../components/ui/button/Button";
import AuthContext from "../context/AuthContext";

const ViewPost = () => {
    const post_id = useParams().post_id
    const navigate = useNavigate()
    const {authTokens} = useContext(AuthContext)

    const [data, setData] = useState({
        title: undefined,
        content: undefined
    })

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens),
            }
        }

        axios.get(baseURL + 'posts/' + post_id, config).then((response) => {
            setData(response.data)
        })
    }, [])

    const handleSubmit = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.delete(baseURL + 'posts/' + post_id, config).then(
            function (response) {
                return navigate('/posts')
            }
        )
        console.log(data)
    };

    return (
        <div className={'block'}>
            <Post title={data.title} content={data.content}/>
            <Link to={'/edit-post/' + post_id} className={'header-link'}>Редактировать</Link>
            <div onClick={() => handleSubmit()}>
                <Button name={'Удалить'}/>
            </div>
        </div>
    );
};

export default ViewPost;