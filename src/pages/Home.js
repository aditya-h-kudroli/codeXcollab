import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        
        if (!token) {
            navigate('/login'); // Redirect if not logged in
        } else if (storedUsername) {
            setUsername(storedUsername); // Auto-fill username
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    }

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }
        navigate(`/editor/${roomId}`, {
            state: { username },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <h1 className="logoText">codeXcollab</h1>
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                
                {/* Logout Button */}
                <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
                    <button onClick={logout} className="btn" style={{backgroundColor: '#ff4d4d', padding: '5px 10px', fontSize: '12px'}}>Logout</button>
                </div>

                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        value={username} // Controlled by logged-in state
                        readOnly // User cannot change username manually here
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="/" className="createNewBtn">new room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>Built with ❤️ by codeXcollab Team</h4>
            </footer>
        </div>
    );
};

export default Home;