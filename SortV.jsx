import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Car } from "./Car";
import './Sort.css';

export const Sort = () => {
  const Vehicles = useSelector(store => store.Vehicles);
  const carType = useSelector(store => store.carType);
  const modal = useSelector(store => store.modal);
  const cityC = useSelector(store => store.cityC);
  const seatsC = useSelector(store => store.seatsC);

  const [city, setCity] = useState();
  const [seats, setSeats] = useState();
  const [sortC, setSortC] = useState();
  const [companyC, setCompany] = useState();

  const isMatch = (c) => {
    const m = (
      (!city || city ==='All cities' || c.city === city) &&
      (!seats || seats === 'All sizes' || c.seats == seats) &&
      (!sortC || sortC === 'All sorts' || c.carTypeId == sortC) &&
      (!companyC || companyC === 'All companies' || c.company == companyC)
    );
    return m ? <Car key={c.id} props={c} /> : null;
  };

  return (
    <>
      <h2 className="choose-car-heading">Choose Car</h2>
      <br />
      <select className="styled-select" id="seats" defaultValue={'All sizes'} onChange={x => setSeats(x.target.value)}>
        <option key={0}>All sizes</option>
        {seatsC && seatsC.map((u, i) => <option key={u.id}>{`${u.seats}`}</option>)}
      </select>

      <br />
      <select className="styled-select" id="city" defaultValue={'All cities'} onChange={x => setCity(x.target.value)}>
        <option key={0}>All cities</option>
        {cityC && cityC.map((u, i) => <option key={u.id}>{u.city}</option>)}
      </select>

      <br />
      <select className="styled-select" id="sortC" defaultValue={'All sorts'} onChange={x => setSortC(x.target.value)}>
        <option key={0}>All sorts</option>
        {carType && carType.map((u, i) => <option key={u.id} value={u.id}>{`${u.sortC}`}</option>)}
      </select>

      <br />
      <select className="styled-select" id="sort" defaultValue={'All companies'} onChange={x => setCompany(x.target.value)}>
        <option key={0}>All companies</option>
        {modal && modal.map((u, i) => <option key={u.id} value={u.company}>{`${u.company}`}</option>)}
      </select>

      <br />

      <div className="car-grid">
        {Vehicles && Vehicles.map((item) => isMatch(item))}
      </div>
    </>
  );
};









