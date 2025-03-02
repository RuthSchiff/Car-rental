import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Manager.css'; // ייבוא קובץ ה-CSS

export const Manager = () => {
    const navigate = useNavigate();
    const navigateAddcar = () => navigate('/AddCar');
    const navigateLookRent = () => navigate('/LookRent');
    const SeeAllCars = () => navigate('/ManagerCars');
    const ManagerAdvertisment = () => navigate('/ManagerAdvertisment');

    return (
        <div className="manager-container">
            <h1 className="manager-title">Manager</h1>
            <div className="manager-buttons">
                
                <button onClick={navigateLookRent}>The cars'rent</button>
                <button onClick={navigateAddcar}>Add a new car</button>
                <button onClick={SeeAllCars}>ManagerCars</button>
                <button onClick={ManagerAdvertisment}>Advertisment</button>
            </div>
        </div>
    );
}
