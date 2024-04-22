import React from 'react';
import Input from "../components/ui/input/Input";
import Button from "../components/ui/button/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        title: undefined,
        content: undefined
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        let formdata = new FormData()

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        formdata.append(JSON.stringify(formdata))

        axios.post(baseUrl + '/posts/', formdata, config).then(
            function (response) {
                return navigate('/posts')
            }
        )
        console.log(formData)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'form-row'}>
                    <Input type='text' required data={data} setData={setData} value={data.title} name='Заголовок'/>
                    <Input type='text' required data={data} setData={setData} value={data.content} name='Текст'/>
                    <Button type="submit" name='Отправить'/>
                </div>

            </form>
        </div>
    );
};

export default CreatePost;