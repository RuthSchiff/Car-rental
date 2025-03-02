import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Home = () => {

    const navigate = useNavigate();

    const nevigateToChoose = () => {
        navigate('/Sort');
    };

    const navigateToKeepCreditCard = () => {
        navigate('/CreditCardForm');
    };

    return (
        <div className="home-container">
            <div className="buttons-container">
                <div>
                    <button className="sign-button" onClick={nevigateToChoose}>
                        <span>Rent a Vehicle</span>
                    </button>
                    <div className="sign-post"></div> 
                </div>
                <div>
                    <button className="sign-button" onClick={navigateToKeepCreditCard}>
                        <span>enter card Details</span>
                    </button>
                    <div className="sign-post"></div>
                </div>
            </div>
        </div>
    );
};












