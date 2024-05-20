import React, {useContext, useState} from 'react';
import AuthContext from "../context/AuthContext";
import Input from "../components/ui/input/Input";
import Button from "../components/ui/button/Button";
import axios from "axios";
import {baseURL} from "../config";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate()

    let {loginUser} = useContext(AuthContext)

    const [data, setData] = useState({
        username: '',
        email: '',
        full_name: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post(baseURL + 'user/register', JSON.stringify(data), config).then(
            function (response) {
                return navigate('/login')
            }
        )
        console.log(data)
    };

    return (
        <div className={'block'}>
            <form onSubmit={handleSubmit} className={'form-block'}>
                <div className={'form-column'}>
                    <div>
                        <p className={'p-form'}>Login</p>
                        <Input type='text' required data={data} setData={setData} value={data.username} placeholder={'username'} name='username'/>
                    </div>

                    <div>
                        <p className={'p-form'}>Email</p>
                        <Input type='text' required data={data} setData={setData} value={data.email} placeholder={'email'} name='email'/>
                    </div>

                    <div>
                        <p className={'p-form'}>FullName</p>
                        <Input type='text' required data={data} setData={setData} value={data.full_name} placeholder={'full_name'} name='full_name'/>
                    </div>

                    <div>
                        <p className={'p-form'}>Password</p>
                        <Input type='password' required data={data} setData={setData} value={data.password} placeholder={'password'} name='password'/>
                    </div>
                    <Button type="submit" name='Отправить'/>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;