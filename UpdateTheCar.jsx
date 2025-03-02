import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateVehicle } from './redux/Action';
import './UpdateTheCar.css'; 

export const UpdateTheCar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const vichels = useSelector((store) => store.vichels)

    const [vehicleIndex, setVicheleIndex] = useState('');//שמירת ה index 
    const [vehicleDetails, setVichelDetails] = useState ({ id: '', number: '', modalId: '', seats: '', Image: '', year: '', movementSortId: '', pricePerHour: '', last: '', street: '', city: '', is: '', cityCId: '' });//שמירת פרטים

    const idRef = useRef();
    const numberRef = useRef();
    const modalIdRef = useRef();
    const seatsRef = useRef();
    const yearRef = useRef();
    const movementSortIdRef = useRef();
    const pricePerHourRef = useRef();
    const lastRef = useRef();
    const streetRef = useRef();
    const cityRef = useRef();
    const imageRef = useRef();
    const isRef = useRef();

    useEffect(() => {
        if (location.state) {
            const { vehicle, index } = location.state;
            setVicheleIndex(index);
            setVichelDetails({//השמת ערכי הרכב בשדות 
                id: vehicle.id || '',
                number: vehicle.number || '',
                modalId: vehicle.modalId || '',
                seats: vehicle.seats || '',
                Image: vehicle.Image || '',
                year: vehicle.year || '',
                movementSortId: vehicle.movementSortId || '',
                pricePerHour: vehicle.pricePerHour || '',
                last: vehicle.last || '',
                street: vehicle.street || '',
                city: vehicle.city || '',
                is: vehicle.is || '',
                cityCId: vehicle.cityCId || ''
            });
        }
    }, [location.state]);

    const handleUpdateTheCar = (e) => {
        e.preventDefault();
        const updatedDetails = {
            ...vehicleDetails,
            id: idRef.current.value,
            number: numberRef.current.value,
            modalId: modalIdRef.current.value,
            seats: seatsRef.current.value,
            year: yearRef.current.value,
            movementSortId: movementSortIdRef.current.value,
            pricePerHour: pricePerHourRef.current.value,
            last: lastRef.current.value,
            street: streetRef.current.value,
            city: cityRef.current.value,
            Image: imageRef.current.files[0] ? URL.createObjectURL(imageRef.current.files[0]) : vehicleDetails.Image,
            is: isRef.current.value,
            cityCId: vehicleDetails.cityCId
        };

        if (vehicleIndex !== '' && updatedDetails) {
            dispatch(updateVehicle(vehicleIndex, updatedDetails)); 
            navigate(-1); 
        }
    };

    return (
        <div className="update-car-page form-container"> 
            <h1>Update the Car</h1>
            <form onSubmit={handleUpdateTheCar}>
                <input
                    type="text"
                    name="id"
                    defaultValue={vehicleDetails.id}
                    ref={idRef}
                    placeholder="ID"
                />
                <input
                    type="text"
                    name="number"
                    defaultValue={vehicleDetails.number}
                    ref={numberRef}
                    placeholder="Number"
                />
                <input
                    type="text"
                    name="modalId"
                    defaultValue={vehicleDetails.modalId}
                    ref={modalIdRef}
                    placeholder="Modal ID"
                />
                <input
                    type="text"
                    name="seats"
                    defaultValue={vehicleDetails.seats}
                    ref={seatsRef}
                    placeholder="Seats"
                />
                <input
                    type="text"
                    name="year"
                    defaultValue={vehicleDetails.year}
                    ref={yearRef}
                    placeholder="Year"
                />
                <input
                    type="text"
                    name="movementSortId"
                    defaultValue={vehicleDetails.movementSortId}
                    ref={movementSortIdRef}
                    placeholder="Movement Sort ID"
                />
                <input
                    type="text"
                    name="pricePerHour"
                    defaultValue={vehicleDetails.pricePerHour}
                    ref={pricePerHourRef}
                    placeholder="Price Per Hour"
                />
                <input
                    type="text"
                    name="last"
                    defaultValue={vehicleDetails.last}
                    ref={lastRef}
                    placeholder="Last"
                />
                <input
                    type="text"
                    name="street"
                    defaultValue={vehicleDetails.street}
                    ref={streetRef}
                    placeholder="Street"
                />
                <input
                    type="text"
                    name="city"
                    defaultValue={vehicleDetails.city}
                    ref={cityRef}
                    placeholder="City"
                />
                <select
                    name="is"
                    defaultValue={vehicleDetails.is}
                    ref={isRef}
                >
                    <option value="">Select Availability</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <input
                    type="file"
                    ref={imageRef}
                    accept="image/*"
                />
                <button type="submit">Update Car</button>
            </form>
        </div>
    );
};

