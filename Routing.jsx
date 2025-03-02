import { Route, Routes } from "react-router";
import { Home } from "./Home";
import { Login } from "./Connect";
import { Register } from "./LogIn";
import { Manager } from "./Manager";
import { Car } from "./Car"
import { AddCar } from "./AddCar"
import { LookRent } from "./LookRent"
import { Sort } from "./SortV";
import { Rent } from "./Rent"
import { ManagerCars } from "./ManagerCars";
import { ReturnCarForm } from "./ReturnCar"
import { SuccessPage } from "./Succsess"
import { CreditCardForm } from "./CreditCardForm"
import { UpdateThePrice } from "./UpdateThePrice"
import { UpdateTheCar } from "./UpdateTheCar"
import { Advertisements } from "./Advertisements"
import { ManagerAdvertisment } from "./ManagerAdvertisment"
import {UpdateAdvertisment} from "./UpdateAdvertisment"
import { AddAdvertisment } from "./AddAdvertisment";

<Route path=" " element={<Advertisements />} />

export const Routing = () => {
    return (
        <>
            <Routes>
                
                <Route path="" element={<Advertisements />} />
                <Route path="AddAdvertisment" element={<AddAdvertisment></AddAdvertisment>}></Route>
                <Route path="UpdateAdvertisment" element={<UpdateAdvertisment></UpdateAdvertisment>}></Route>
                <Route path="ManagerAdvertisment" element={<ManagerAdvertisment></ManagerAdvertisment>}></Route>
                <Route path="UpdateTheCar" element={<UpdateTheCar></UpdateTheCar>}></Route>
                <Route path="UpdateThePrice" element={<UpdateThePrice></UpdateThePrice>}></Route>
                <Route path="CreditCardForm" element={<CreditCardForm></CreditCardForm>}></Route>
                <Route path="Succsess" element={<SuccessPage></SuccessPage>}></Route>
                <Route path="ReturnCar" element={<ReturnCarForm></ReturnCarForm>}></Route>
                <Route path="AddCar/:year/:seats/:street/:city/:pricePerHour/:is/:last/company"></Route>
                <Route path="ManagerCars" element={<ManagerCars></ManagerCars>} ></Route>
                <Route path="Rent/:year/:seats/:street/:city/:pricePerHour/:is/:last" element={<Rent />} />
                <Route path="Sort" element={<Sort></Sort>}></Route>
                <Route path="AddCar" element={<AddCar></AddCar>}></Route>
                <Route path="LookRent" element={<LookRent></LookRent>}></Route>
                <Route path="Car" element={<Car></Car>} ></Route>
                <Route path="home" element={<Home />} />
                <Route path="signIn" element={<Login />} />
                <Route path="Manager" element={<Manager />} />
                <Route path="connect" element={<Register />} />
                <Route path="login" element={<Register />} />
            </Routes>
        </>
    );
};