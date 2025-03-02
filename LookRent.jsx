import { useSelector } from "react-redux";
import './LookRent.css'; 

export const LookRent = () => {
    const rent = useSelector(store => store.rent);

    return (
        <div className="rent-container">
            {rent && rent.map((item, index) => (
                <div key={index} className="rent-card">
                    <h3>Rental Code: {item.rentalCode}</h3>
                    <h3>Date: {item.rentalDate}</h3>
                    <h3>Rent Hour: {item.hour}</h3>
                    <h3>Price Per Hour: {item.pricePerHour}</h3>
                    <h3>Last: {item.last}</h3>
                    <img src={item.Image} alt="Vehicle" />
                </div>
            ))}
        </div>
    );
};
