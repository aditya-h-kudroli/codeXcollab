import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/register', {
                username,
                email,
                password,
            });
            if (res.data.status === 'ok') {
                toast.success('Registration Successful');
                navigate('/login');
            } else {
                toast.error(res.data.error);
            }
        } catch (err) {
            toast.error('Registration Failed');
        }
    };

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <h1 className="logoText">codeXcollab</h1>
                <h4 className="mainLabel">Register to codeXcollab</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="USERNAME" onChange={(e) => setUsername(e.target.value)} value={username} />
                    <input type="email" className="inputBox" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" className="inputBox" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className="btn joinBtn" onClick={handleRegister}>Register</button>
                    <span className="createInfo">
                        Already have an account? &nbsp;
                        <Link to="/login" className="createNewBtn">Login</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Register;