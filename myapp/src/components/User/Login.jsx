import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
    // login, 
    userExist } from '../../redux/reducer/AuthSlice';
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../redux/api/UserApi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const { isSuccess, isError, isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const [login , {isError , isLoading , isSuccess}] = useLoginMutation();
   
    useEffect(() => {
        console.log('is', isSuccess)
        if (isSuccess) {
            
            
            console.log(isSuccess);
            navigate('/')
        }
    }, [isSuccess, navigate])
    // const loginSubmit = (e) =>{
    //     e.preventDefault();

    //   const params = {
    //     username : email,
    //     password : password
    //   }
    //   console.log('params in login page', params)
    //   dispatch(login(params))
    // }
    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = {
                username: email,
                password: password
            }
            const res = await login(params);
            console.log('res: ', res)
            dispatch(userExist(res?.data))
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <form className='loginForm' onSubmit={loginSubmit}>
                <input
                    type='text'
                    value={email}
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='text'
                    value={password}
                    placeholder='Enter Email'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type='submit'
                    title='login'
                />

            </form>
        </div>
    )
}

export default Login