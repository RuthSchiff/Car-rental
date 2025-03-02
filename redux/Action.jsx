export const setCurrentUser = (user) => {//פעולה לעידכון המשתמש החדש
    return { type: 'SET_CURRENT_USER', payload: user };
};

export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user };//הוספת משתמש למערך משתמשים
};
export const addNewUser = (user) =>{//הוספת משתמש לאובייקט של משתמש 
    return {type : 'ADD_NEW_USER',payload: user};
}
export const setVehicle = (Vehicle) => {//עריכת פרטי הרכב
    return { type: 'SET_CURRENT_VEHICLE', payload: Vehicle };
};
export const addVehicle = (Vehicle) => {//הוספת הרכב
    debugger;
    return { type: 'ADD_Vehicle', payload: Vehicle };
};
export const addAdvertisment = (video) => {//הוספת פרסומת
    debugger;
    return { type: 'ADD_ADVERTISMENT', payload: video };
};
export const setCurrentRent = (rent) => {//עריכת פרטי הזמנה
    return { type: 'SET_CURRENT_RENT', payload: rent };
};

export const setCurrentVehicles = (Vehicle, index) => {//עריכת פרטי רכב
    return { type: 'UPDATE_VEHICLE', payload: { Vehicle, index } };
};
export const updateVehicle = (index, Vehicle) => {//עידכון רכב
    return { type: 'UPDATE_VEHICLE', payload: { Vehicle, index } };
};
export const updateAdvertisment = (index, video) => {//עידכון פרסומת
    return { type: 'UPDATE_ADVERTISMENT', payload: { video, index } };
};
export const CurrentVehicles = (Vehicle, index) => {
    return { type: 'CURRENT_VEHICLE', payload: { Vehicle, index } };
};

export const updateVehicleIs = (index, is) => ({
    type: 'UPDATE_VEHICLE_IS',
    payload: { index, is }
});
export const updateCarPrice = (index, newPrice) => ({//פעולה לעידכון מחיר המקבלת את הפרמטרים של אינדקס הרכב והמחיר החדש לעידכון
    type: 'UPDATE_CAR_PRICE',
    payload: { index, newPrice },
});

export const deleteVehicle = (index) => {//מחיקת רכב
   
    return { type: 'DELETE_Vehicle', payload: index };
};
export const delete_advertisment = (index) => {//מחיקת פרסומת
    debugger;
    
    return {type: 'DELETE_ADVERTISMENT', payload: index};
    
};
export const addRent = (rent) => {
    return { type: 'ADD_RENT', payload: rent }
}

export const addRents = (rent) => {
    debugger;
    return { type: 'ADD_RENT', payload: rent };
};
export const updateCreditCardDetails = (key, value) => {
    return { type: 'UPDATE_CREDITCARD_DETAILS', payload: { key, value } };
};

export const addCreditCardDetails = (creditCardDetails) => {
    return { type: 'ADD_CREDITCARD_DETAILS', payload: creditCardDetails };
};
export const addModal = (company,id) => {//הוספת חברת רכב
    debugger;
    return { type: 'ADD_MODAL', payload: {company,id} };
};
