import { useSelector } from "react-redux";
import { useParams } from 'react-router'

export const Rent = () => {
  const Vehicles = useSelector(store => store.Vehicles);

  const params = useParams();

    const {year, seats ,street,city,pricePerHour,is,last} = params

  return (

    <>
    
      <div className="Vehicle">
        <h3>Cars from year: {year}</h3>
        <br /><br />
        {/* <P></P> */}
        <p>seats:{seats}</p>
        <p>battery:{last}</p>
        <p>available:{is}</p>
        <p>pricePerHour:{pricePerHour}</p>
        <p>city:{city}</p>
        <p>street:{street}</p>
     
        <h1>🚘🚗🚙🏎️</h1>
        {/* <button onClick={}></button> */}
      </div>
    </>
  );
}



