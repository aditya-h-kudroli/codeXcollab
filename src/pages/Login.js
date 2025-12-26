import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            });
            if (res.data.user) {
                localStorage.setItem('token', res.data.user);
                localStorage.setItem('username', res.data.username);
                toast.success('Login Successful');
                navigate('/');
            } else {
                toast.error('Please check your username and password');
            }
        } catch (err) {
            toast.error('Login Failed');
        }
    };

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <h1 className="logoText">codeXcollab</h1>
                <h4 className="mainLabel">Login to codeXcollab</h4>
                <div className="inputGroup">
                    <input type="email" className="inputBox" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" className="inputBox" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className="btn joinBtn" onClick={handleLogin}>Login</button>
                    <span className="createInfo">
                        Don't have an account? &nbsp;
                        <Link to="/register" className="createNewBtn">Register</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;