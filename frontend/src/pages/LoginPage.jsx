import React, {useContext, useState} from 'react';
import Input from "../components/ui/input/Input";
import Button from "../components/ui/button/Button";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    return (
        <div className={'block'}>
            <form onSubmit={(e) => {e.preventDefault();
                                                  loginUser(data)}} className={'form-block'}>
                <div className={'form-column'}>
                    <div>
                        <p className={'p-form'}>Login</p>
                        <Input type='text' required data={data} setData={setData} value={data.username} placeholder={'username'} name='username'/>
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

export default LoginPage;