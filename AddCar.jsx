import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, addModal } from "./redux/Action";
import "./AddCar.css";

export const AddCar = () => {
    const [vehicle, setVehicle] = useState({});
    const [error, setErrors] = useState({});
    const [imagePreview, setImagePreview] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const modals = useSelector((state) => state.modal);
    const movementSorts = useSelector((state) => state.movementSort);

    const validate = () => {
        const newErrors = {};
        if (!vehicle.number || vehicle.number === '1018') {
            newErrors.number = "Invalid vehicle number, please change.";
        }
        if (!vehicle.company) newErrors.company = "Company is required.";
        if (!vehicle.seats || vehicle.seats <= 0) newErrors.seats = "Seats must be a positive number.";
        if (!vehicle.year || vehicle.year < 1900 || vehicle.year > new Date().getFullYear()) newErrors.year = "Year must be a valid year.";
        if (!vehicle.movementSortId) newErrors.movementSortId = "Movement sort is required.";
        if (!vehicle.pricePerHour || vehicle.pricePerHour <= 0) newErrors.pricePerHour = "Price per hour must be a positive number.";
        if (!vehicle.last || vehicle.last < 0) newErrors.last = "Last value must be a non-negative number.";
        if (!vehicle.street) newErrors.street = "Street is required.";
        if (!vehicle.city) newErrors.city = "City is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setVehicle({
                ...vehicle,
                [name]: checked
            });
        } else if (name === 'available') {
            setVehicle({
                ...vehicle,
                is: value === 'true'
            });
        } else {
            setVehicle({
                ...vehicle,
                [name]: value
            });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVehicle({ ...vehicle, Image: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        if (validate()) {
            const companyName = vehicle.company;
            const existingModal = modals.find(modal => modal.company === companyName);

            if (!existingModal) {
                const newModalId = Math.max(...modals.map(modal => modal.id)) + 1;
                dispatch(addModal(companyName, newModalId));}
            const updatedVehicle = {
                ...vehicle,
                Image: imagePreview ? URL.createObjectURL(vehicle.Image) : vehicle.Image
            };

            dispatch(addVehicle(updatedVehicle));
            swal("Success!", "Vehicle added successfully!", 'success');
            navigate('/ManagerCars');
        } else {
            swal("Error!", "Please correct the errors before submitting.", 'error');
        }
    };

    return (
        <div className="add-car-page form-container">
            <h2>Add New Vehicle</h2>

            <label>Number:</label>
            <input 
                name="number"
                placeholder="Input number" 
                onChange={handleChange}
            />
            {error.number && <p className="error">{error.number}</p>}

            <label>Company:</label>
            <input 
                type="text" 
                name="company"
                placeholder="Input company" 
                onChange={handleChange}
            />
            {error.company && <p className="error">{error.company}</p>}

            <label>Seats:</label>
            <input 
                name="seats"
                type="number" 
                placeholder="Input seats" 
                onChange={handleChange}
            />
            {error.seats && <p className="error">{error.seats}</p>}

            <label>Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
                <img 
                    src={imagePreview} 
                    alt="Uploaded Vehicle" 
                    className="vehicle-image" 
                />
            )}

            <label>Year:</label>
            <input 
                name="year"
                type="number" 
                placeholder="Input year" 
                onChange={handleChange}
            />
            {error.year && <p className="error">{error.year}</p>}

            <label>Movement Sort:</label>
            <select 
                name="movementSortId"
                onChange={handleChange}
            >
                <option value="">Select Movement Sort</option>
                {movementSorts.map((movementSort) => (
                    <option key={movementSort.id} value={movementSort.id}>
                        {movementSort.sortM}
                    </option>
                ))}
            </select>
            {error.movementSortId && <p className="error">{error.movementSortId}</p>}

            <label>Price Per Hour:</label>
            <input 
                name="pricePerHour"
                type="number" 
                placeholder="Input price per hour" 
                onChange={handleChange}
            />
            {error.pricePerHour && <p className="error">{error.pricePerHour}</p>}

            <label>Last:</label>
            <input 
                name="last"
                type="number" 
                placeholder="Input last" 
                onChange={handleChange}
            />
            {error.last && <p className="error">{error.last}</p>}

            <label>Street:</label>
            <input 
                name="street"
                placeholder="Input street" 
                onChange={handleChange}
            />
            {error.street && <p className="error">{error.street}</p>}

            <label>City:</label>
            <input 
                name="city"
                placeholder="Input city" 
                onChange={handleChange}
            />
            {error.city && <p className="error">{error.city}</p>}

            <label>Available:</label>
            <select 
                name="available"
                onChange={handleChange}
            >
                <option value="">Select Availability</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
            </select>

            <button onClick={handleSubmit}>Add Vehicle</button>
        </div>
    );
};
