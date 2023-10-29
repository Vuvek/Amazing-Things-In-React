import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = () => {
        localStorage.setItem('login',true);
        navigate('/');
    }

    useEffect(() => {
        if (localStorage.getItem('login')) {
            useNavigate('/')
        } else {
            navigate('/login')
        }
    },[localStorage.getItem])

  return (
    <div>
      <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}/>
      <input type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
      <button type='button' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
