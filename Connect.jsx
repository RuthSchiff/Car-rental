import { useState } from "react";
import swal from "sweetalert";
import './Connect.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/Action";
import { addNewUser } from "./redux/Action";

export const Login = () => {
    const [user, setUser] = useState({});
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const send = () => {
        if(user.password === '138816') {
           
            swal("Login successful");
            navigate('/Manager');
        } else {
            let u = users.filter(x => x.identity == user.identity && x.password == user.password)[0];
            if(u) {
                dispatch(setCurrentUser(u));
                swal(`Hello ${u.username}!`, "Login successful!", 'success');
                dispatch(addNewUser(user));
                navigate('/Home');
            } else {
                swal("Oops!", "User does not exist. Redirecting to registration.", 'warning');
                navigate('/login');
            }
        }
    };

    return (
        <div id="login-page">
            <div id="login-box">
                <h2 id="login-title">Sign In:</h2>
                <div className="input-group">
                    <label htmlFor="identity">Identity:</label>
                    <input 
                        id="identity" 
                        className="login-input" 
                        placeholder="Input identity" 
                        onBlur={(e) => setUser({ ...user, identity: e.target.value })} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        id="phone" 
                        className="login-input" 
                        placeholder="Input Phone" 
                        onBlur={(e) => setUser({ ...user, Phone: e.target.value })} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        id="password" 
                        type="password" 
                        className="login-input" 
                        placeholder="Input password" 
                        onBlur={(e) => setUser({ ...user, password: e.target.value })} 
                    />
                </div>
                <button id="login-button" onClick={send}>Send</button>
            </div>
        </div>
    );
};


