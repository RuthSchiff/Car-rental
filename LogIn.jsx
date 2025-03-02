import { useState } from "react";
import swal from "sweetalert";
import './logIn.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, addUser } from "./redux/Action";
import { addNewUser } from "./redux/Action";

export const Register = () => {
    const [user, setUser] = useState({});//מערך שיכיל את כל פרטי המשתמש 
    const [error, setErrors] = useState({});//מערך שיכיל את כל השגיאות
    const dispatch = useDispatch();//שימוש ב dispatch לצורך פעולות 
    const navigate = useNavigate();


    //בדיקות תקינות
    const checkPhone = (value) => {
        return value.length === 10 && value[0] === '0' && !isNaN(value);
    };

    const isValidIsraeliID = (id) => {
        id = String(id).trim();
        if (id.length !== 9 || isNaN(id)) {
            return { isValid: false, message: "Identity number must be 9 digits." };
        }

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            let num = Number(id[i]) * ((i % 2) + 1);
            if (num > 9) num -= 9;
            sum += num;
        }

        if (sum % 10 !== 0) {
            return { isValid: false, message: "Invalid identity number." };
        }

        return { isValid: true, message: "" };
    };

    const validate = () => {
        const newErrors = {};//מכיל את השגיאות של תקינות
        if (!user.username || user.username.length < 2) {
            newErrors.username = "Name must be at least 2 characters long.";
        }
        if (!user.identity) {
            newErrors.identity = "Identity is required.";
        } else {
            const identityCheck = isValidIsraeliID(user.identity);
            if (!identityCheck.isValid) {
                newErrors.identity = identityCheck.message;
            }
        }
        if (!user.Phone || !checkPhone(user.Phone)) {
            newErrors.Phone = "Phone number must be 10 digits.";
        }
        if (!user.password ) {
            newErrors.password = "Password must be between 4 and 16 characters.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const register = () => {
        if (validate()) {
            dispatch(addUser(user));//הוספת משתמש נוסף למערך המשתמשים
            dispatch(setCurrentUser(user));//עידכון פרטי המשתמש החדש
            debugger
            dispatch(addNewUser(user));//משתנה לשמירת פרטי המשתמש החדש
            
            
            swal("Success!", "User registered successfully!", 'success');
            navigate('/Home');
           
        } else {
            swal("Error!", "Please correct the errors before submitting.", 'error');
        }
    };

    return (
        <div id="login-page">
            <div id="login-box">
                <h2 id="login-title">Welcome:</h2>
                <div className="input-group">
                    <label>Name:</label>
                    <input 
                        className="login-input" 
                        placeholder="Input name" 
                        onBlur={(e) => setUser({ ...user, username: e.target.value })} 
                    />
                    {error.username && <p className="error-message">{error.username}</p>}
                </div>
                <div className="input-group">
                    <label>Identity:</label>
                    <input 
                        className="login-input" 
                        placeholder="Input identity" 
                        onBlur={(e) => setUser({ ...user, identity: e.target.value })} 
                    />
                    {error.identity && <p className="error-message">{error.identity}</p>}
                </div>
                <div className="input-group">
                    <label>Phone:</label>
                    <input 
                        className="login-input" 
                        placeholder="Input phone" 
                        onBlur={(e) => setUser({ ...user, Phone: e.target.value })} 
                    />
                    {error.Phone && <p className="error-message">{error.Phone}</p>}
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input 
                        className="login-input" 
                        placeholder="Input password" 
                        onBlur={(e) => setUser({ ...user, password: e.target.value })} 
                    />
                    {error.password && <p className="error-message">{error.password}</p>}
                </div>
                <button id="login-button" onClick={register}>Connect</button>
            </div>
        </div>
    );
};
