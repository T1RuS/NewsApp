import {createContext, useEffect, useState} from "react";
import {jwtDecode as jwt_decode} from 'jwt-decode';
import {useNavigate} from "react-router";

const AuthContext = createContext()
export const StateContext = createContext();

export default AuthContext;

const baseUrl = 'http://localhost:8000/'

const allowedFiles = ['doc', 'docx', 'DOCX', 'xls', 'xlsx', 'XLSX', 'pdf', 'PDF', 'zip']
export {baseUrl, allowedFiles};

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : '')
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : '')

    const navigate = useNavigate()


    let loginUser = async (inputData)=> {
        let response = await fetch(baseUrl + 'user/token', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username': inputData.username, 'password': inputData.password})
        })

        let data = await response.json()
        if((await response).status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        authTokens:authTokens
    }

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}
