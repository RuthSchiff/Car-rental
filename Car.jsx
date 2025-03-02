import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRent, updateVehicleIs } from './redux/Action';
import swal from 'sweetalert';
import './Car.css';

export const Car = (props) => {
  const item = props.props;
  const Vehicles = useSelector(store => store.Vehicles);
  const rent = useSelector(store => store.rent);
  const nUser = useSelector(store => store.newUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const makeRent = () => {
    if (item.is === true && Object.keys(nUser).length > 0) {
      const dd = new Date();
      const Newrent = {
        userName: "customer",
        rentalCode: Math.floor(Math.random() * 100000),
        rentalDate: `${dd.getFullYear()}-${dd.getMonth() + 1}-${dd.getDate()}`,
        rentalHour: `${dd.getHours()}`,
        last: item.last,
        pricePerHour: item.pricePerHour,
        is: false,
      };
      swal('Success!', `קוד הזמנה ${Newrent.rentalCode}`, 'הזמנתך התקבלה בהצלחה');
      const vehicleIndex = Vehicles.findIndex(v => v.id === item.id);
      dispatch(updateVehicleIs(vehicleIndex, false));
      dispatch(addRent(Newrent));
    } else {
      if (Object.keys(nUser).length > 0)
        swal('error!', 'לא ניתן להשכיר רכב זה', 'הפעולה נכשלה');
      else
        swal('אינך מחובר ');
    }
  };

  return (
    <div className="car-card">
      <h3>Car: {item.number}</h3>
      <label>Street: <span className="car-street">{item.street}</span></label>
      <br />
      <label>Price per hour: <span className="car-price">{item.pricePerHour}</span></label>
      <br />
      <label className={`car-availability ${item.is ? 'available' : 'not-available'}`}>
        {item.is ? 'Available' : 'Not available'}
      </label>
      <br />
      <img src={item.Image} className="car-image" alt="Car" />
      <br />
      <label className="car-best">Best car</label>
      <button onClick={makeRent} className="rent-button">For Rent</button>
    </div>
  );
};


