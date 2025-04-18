import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginHandler = () =>{
        if(username === "ADMIN" && password === "Admin@123"){
            alert('Login Successful')
            navigate('/show')
        }else{
            alert('Wrong Username or Password')
        }
    }
    return (
        <div style={{height : "450px"}}>
            <div className='bg-dark w-50 mx-auto p-4 text-center mt-5 mb-5 rounded-3'>
                <h1 className='text-light'>Admin Login</h1>
                <div className='mb-3'>
                    <input
                        type='text'
                        placeholder='Enter Username'
                        className='form-control'
                        value={username}
                        onChange={(event)=>setUsername(event.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <input
                        type="password"
                        placeholder='Enter Password'
                        className='form-control'
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button className='btn btn-outline-success w-100' onClick={loginHandler}>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Admin