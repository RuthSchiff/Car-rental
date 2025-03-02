import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVehicle } from "./redux/Action";
import { useNavigate } from "react-router-dom";
import './ManagerCars.css';

export const ManagerCars = () => {
    const dispatch = useDispatch();
    const vehicles = useSelector(store => store.Vehicles);
    const modals = useSelector(store => store.modal);
    const movementSorts = useSelector(store => store.movementSort);
    const navigate = useNavigate();

    const delCar = (index) => {//פעולה המקבלת index
        dispatch(deleteVehicle(index));//שליחת הפעולה עם index ל redux
    };

    const navigateToUpdate = (vehicle, index) => {
        navigate(`/UpdateTheCar`, { state: { vehicle, index } });
    };

    const handleUpdateClick = (vehicle, index) => {//מקבל רכב ואינדקס
        navigate('/UpdateThePrice', { state: { vehicle, index } });//שליחת הנונים לעמוד הבא
    };
    const getModalCompany = (modalId) => {
        const modal = modals.find(m => m.id === modalId);
        return modal ? modal.company : '';
    };
    return (
        <div className="manager-cars-container">
            <h2>Vehicles List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>year</th>
                        <th>Seats</th>
                        <th>Price Per Hour</th>
                        <th>Last</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>available</th>
                        <th>Image</th>
                         <th>vehicle.modalId</th>

                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={vehicle.number}>
                            <td>{vehicle.number}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.seats}</td>
                            <td>{vehicle.pricePerHour}</td>
                            <td>{vehicle.last}</td>
                            <td>{vehicle.street}</td>
                            <td>{vehicle.city}</td>
                            <td style={{ color: vehicle.is ? 'green' : 'red' }}>
                                {vehicle.is ? 'available' : 'not available'}
                            </td>
                            <td>
                                <img src={vehicle.Image} alt={`Vehicle ${index}`} />
                            </td>
                            {vehicle.modalId} 
                            <td>
                                <button onClick={() => delCar(index)}>Delete</button>
                                <button onClick={() => navigateToUpdate(vehicle, index)}>Update</button>
                                <button onClick={() => handleUpdateClick(vehicle, index)}>Update Price</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
