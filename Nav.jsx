import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaCar, FaUser ,FaUndoAlt} from 'react-icons/fa'; 
import './style.css';

export const Nav = () => {
    const user = useSelector(state => state.currentUser);

    return (
        <div className="nav">
            {user.username && <p className='username'>{user.username}</p>}

            <NavLink to='/Home' className='link'>
                <FaHome className="icon" /> {/* Home Icon */}
            </NavLink>

            <NavLink to='/Login' className='link'>
                <FaUser className="icon" /> {/* Login Icon */}
            </NavLink>

            <NavLink to='/signIn' className='link'>
                <FaSignInAlt className="icon" /> {/* Sign In Icon */}
            </NavLink>

            <NavLink to='/Sort' className='link'>
                <FaCar className="icon" /> {/* Cars Icon */}
            </NavLink>
            <NavLink to='/ReturnCar' className='link'>
                <FaUndoAlt className='icon' /> 
            </NavLink>
        </div>
    );
};

