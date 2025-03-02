// import { CreditCard, Phone } from '@mui/icons-material';
import { produce } from 'immer';
import { createStore } from 'redux';

//מערך משתמשים
const initialState = {
    users: [
        { username: 'Ruty', phone: '0533138816', identity: '214323131', password: '138816' },
        { username: 'Elky', phone: '0548500878', identity: '214323131', password: '8500878' },
        { username: 'Avigail', phone: '0583232684', identity: '214936080', password: '3232684' }

    ],

    currentUser: {},//הפרטים על המשתמש החדש שנוסף למערכת או התחבר נשמרים במערך הזה
    currentRent: {},//
    currentVehicle: {},//הפרטים על הרכב החדש שנוספת למערך הרכבים
    newUser: {},//מערך לשמירת הפרטים של המשתמש החדש
    currentCardDetails: {},
    creditCardDetails: {},

    carType: [
        { id: 101, sortC: 'famely' },
        { id: 102, sortC: 'private' },
        
        { id: 104, sortC: 'bus' },
        { id: 105, sortC: 'track' },
       
    ],
    modal: [{ id: 1011, company: 'toyota' }, { id: 1012, company: 'volvo' }, { id: 1013, company: 'luxus' }, { id: 1014, company: 'ford' }, { id: 1015, company: 'fiat' }, { id: 1016, company: 'mercedes' }, { id: 1017, company: 'tesla' }],

    movementSort: [
        { id: 10001, sortM: 'fuel', price: 10 },
        { id: 10002, sortM: 'Hybrid', price: 20 },
        { id: 10003, sortM: 'diesel fuel', price: 30 },
        { id: 10004, sortM: 'gas', price: 40 },
        { id: 10005, sortM: 'electric', price: 50 },
    ],
    seatsC: [{ id: 12, seats: 2 }, { id: 14, seats: 5 }, { id: 15, seats: 7 }, { id: 18, seats: 40 }, { id: 18, seats: 48 }, { id: 18, seats: 30 }],
    cityC: [{ id: 2, city: 'בני ברק' }, { id: 1, city: 'ירושלים' }, { id: 4, city: 'הרצליה' }, { id: 3, city: 'קרית ספר' }, { id: 4, city: 'קיסריה' },],
    Vehicles: [
        { id: 1, number: 12345, seats: 7, Image: `${process.env.PUBLIC_URL}/pictures/1.jpg`, year: 2024, movementSortId: 10002, pricePerHour: 15, last: 8, street: "בצרי", city: "ירושלים", is: true, seatsCId: 5, carTypeId: 101, company: 'toyota' },

        { id: 3, number: 82349, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/c10.jpg`, year: 2011, movementSortId: 10001, pricePerHour: 20, last: 15, street: "גולדה", city: "ירושלים", is: false,  carTypeId: 101, company: 'tesla' },
        { id: 4, number: 17645, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/c11.jpg`, year: 2024, movementSortId: 10002, pricePerHour: 15, last: 10, street: "בר אילן", city: "ירושלים", is: true,  carTypeId: 101, company: 'ford' },
        { id: 5, number: 99345, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/2097.jpg`, year: 2024, movementSortId: 10005, pricePerHour: 15, last: 3, street: "רבי עקיבא", city: "בני ברק", is: false,  carTypeId: 101, company: 'toyota' },
        { id: 6, Number: 12387, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/68.jpg`, year: 2023, movementSortId: 10005, pricePerHour: 10, last: 8, street: "ולנשטין", city: "ירושלים", is: true,  carTypeId: 101, company: 'mercedes' },
        { id: 2, number: 15346, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/4.jpg`, year: 2022, movementSortId: 10002, pricePerHour: 12, last: 5, street: "נתיבות המשפט", city: "קרית ספר", is: true,  carTypeId: 102, company: 'nisan' },
        { id: 25, number: 12666, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/Toyota-Prius_Prime-2017-1600-04-970px.jpg`, year: 2024, movementSortId: 10002, pricePerHour: 15, last: 8, street: "הר נוף", city: "ירושלים", is: true,  seatsCId: 5, carTypeId: 101, company: 'toyota' },

        { id: 7, number: 82347, seats: 2, Image: `${process.env.PUBLIC_URL}/pictures/cc2.jpg`, year: 2011, movementSortId: 10001, pricePerHour: 20, last: 15, street: "הזית", city: "בת ים", is: false, carTypeId: 101, company: 'nisan' },
        { id: 8, number: 17649, seats: 40, Image: `${process.env.PUBLIC_URL}/pictures/db1.jpg`, year: 2024, movementSortId: 10002, pricePerHour: 100, last: 10, street: "נוף ים", city: "הרצליה", is: true,  carTypeId: 104, company: 'volvo' },
        { id: 9, number: 99348, seats: 48, Image: `${process.env.PUBLIC_URL}/pictures/db2.jpg`, year: 2024, movementSortId: 10005, pricePerHour: 110, last: 3, street: "הביכורים", city: "קיסריה", is: false,  carTypeId: 104, company: 'volvo' },
        { id: 10, Number: 12389, seats: 30, Image: `${process.env.PUBLIC_URL}/pictures/rb1.png`, year: 2023, movementSortId: 10005, pricePerHour: 50, last: 8, street: "בית הכרם", city: "ירושלים", is: true,  carTypeId: 104, company: 'volvo' },
        { id: 11, number: 15347, seats: 2, Image: `${process.env.PUBLIC_URL}/pictures/cc4.jpg`, year: 2022, movementSortId: 10002, pricePerHour: 12, last: 5, street: "נוה יעקב", city: "ירושלים", is: true,  carTypeId: 102, company: 'luxus' },

        { id: 12, number: 82332, seats: 2, Image: `${process.env.PUBLIC_URL}/pictures/t1.jpg`, year: 2000, movementSortId: 10001, pricePerHour: 40, last: 15, street: "בית וגן", city: " ירושלים", is: false,  carTypeId: 105, company: 'nisan' },
        { id: 13, number: 18888, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/mercedes-amg-gt-2015.jpg`, year: 2024, movementSortId: 10002, pricePerHour: 100, last: 10, street: "הרצליה פיתוח", city: "הרצליה", is: true, carTypeId: 102, company: 'mercedes' },
        { id: 14, number: 99621, seats: 7, Image: `${process.env.PUBLIC_URL}/pictures/c4.jpg`, year: 2024, movementSortId: 10005, pricePerHour: 20, last: 3, street: "הרקיע", city: "קיסריה", is: false,  carTypeId: 101, company: 'tesla' },
        { id: 15, number: 15555, seats: 7, Image: `${process.env.PUBLIC_URL}/pictures/c5.jpg`, year: 2023, movementSortId: 10005, pricePerHour: 30, last: 8, street: "תלפיות", city: "ירושלים", is: true,  carTypeId: 101, company: 'fiat' },
        { id: 17, number: 15122, seats: 7, Image: `${process.env.PUBLIC_URL}/pictures/c7.jpg`, year: 2022, movementSortId: 10002, pricePerHour: 12, last: 5, street: "רמות", city: "ירושלים", is: true,  carTypeId: 102, company: 'luxus' },
        { id: 16, number: 15111, seats: 5, Image: `${process.env.PUBLIC_URL}/pictures/mercedes-e-class-cabriolet-new.jpg`, year: 2022, movementSortId: 10002, pricePerHour: 12, last: 5, street: "הפרחים", city: "קיסריה", is: true,  carTypeId: 102, company: 'mercedes' },
    ],



    rent: [
        { userName: "sara", rentalCode: 111111, rentalDate: "04/09/2024", last: 5, Image: `${process.env.PUBLIC_URL}/pictures/c5.jpg`, hour: "09:30", pricePerHour: 50, is: false },
        { userName: "rachel", rentalCode: 111114, rentalDate: "05/09/2024", last: 15, Image: `${process.env.PUBLIC_URL}/pictures/c2.jpg`, hour: "08:30", pricePerHour: 58, is: false },
        { userName: "David", rentalCode: 111115, rentalDate: "06/09/2024", last: 7, Image: `${process.env.PUBLIC_URL}/pictures/c7.jpg`, hour: "14:30", pricePerHour: 89, is: false },
        { userName: "yosf", rentalCode: 111116, rentalDate: "04/07/2024", last: 5, Image: `${process.env.PUBLIC_URL}/pictures/c4.jpg`, hour: "11", pricePerHour: 80, is: false },

        { userName: "rachel", rentalCode: 111114, rentalDate: "05/09/2024", last: 15, Image: `${process.env.PUBLIC_URL}/pictures/c8.jpg`, hour: "08:30", pricePerHour: 58, is: false },
        { userName: "David", rentalCode: 111115, rentalDate: "06/09/2024", last: 7, Image: `${process.env.PUBLIC_URL}/pictures/c10.jpg`, hour: "14:30", pricePerHour: 89, is: false },
        { userName: "yosf", rentalCode: 111116, rentalDate: "04/07/2024", last: 5, Image: `${process.env.PUBLIC_URL}/pictures/c11.jpg`, hour: "11", pricePerHour: 80, is: false },


    ],
    back:
        [
            { id: 10, userId: 0, IdCar: 1, Date: "04/09/2024", hour: "16:30", last: 10, isPayed: true },
            { id: 11, userId: 0, IdCar: 2, Date: "13/10/2024", hour: "02:00", last: 8, isPayed: true },
            { id: 11, userId: 0, IdCar: 2, Date: "13/10/2024", hour: "02:00", last: 8, isPayed: true },
            { id: 12, userId: 0, IdCar: 2, Date: "10/01/2025", hour: "01:45", last: 6, isPayed: true },
            { id: 13, userId: 0, IdCar: 1, Date: "03/04/2022", hour: "14:35", last: 8, isPayed: true },
            { id: 14, userId: 0, IdCar: 2, Date: "01/12/2024", hour: "22:15", last: 7, isPayed: true },
            { id: 15, userId: 0, IdCar: 4, Date: "28/04/2000", hour: "22:00", last: 3, isPayed: true },
            { id: 16, userId: 0, IdCar: 4, Date: "19/03/2008", hour: "02:10", last: 1, isPayed: true },
            { id: 17, userId: 0, IdCar: 5, Date: "07/07/2022", hour: "16:20", last: 9, isPayed: true },
            { id: 18, userId: 0, IdCar: 5, Date: "12/12/2012", hour: "20:30", last: 5, isPayed: true },
            { id: 19, userId: 0, IdCar: 3, Date: "22/03/2018", hour: "14:30", last: 4, isPayed: true }
        ],
    videos: [
        { id: 1, title: "welcome to BestCar", video: `${process.env.PUBLIC_URL}/pictures/video/car.mp4`, },
        { id: 2, title: "on sale", video: `${process.env.PUBLIC_URL}/pictures/video/car1.mp4`, },
        { id: 3, title: "on sale", video: `${process.env.PUBLIC_URL}/pictures/video/car3.mp4`, }
        , { id: 4, title: "on sale", video: `${process.env.PUBLIC_URL}/pictures/video/car2.mp4`, },

    ],

};



const reducer = produce((state, action) => {

    // const initialState = [];

    switch (action.type) {
        case 'SET_CURRENT_USER':// עידכון פרטי המשתמש שיתחבר למערכת
            state.currentUser = action.payload;
            break;

        case 'SET_CURRENT_RENT':
            state.currentRent = action.payload;
            break;

        case 'SET_CURRENT_Vehicle'://עריכת פרטי הרכב
            state.currentVehicle = action.payload;
            break;

        case 'ADD_USER':
            state.users.push(action.payload);//הוספת משתמש חדש ךמערך משתמשים 
            break;

        case 'ADD_NEW_USER'://newUser עידכון המשתנה 
            return {
                ...state,
                newUser: action.payload,
            };

        case 'ADD_RENT': {
            state.rent.push(action.payload);
            break;
        }

        case 'ADD_Vehicle': {//הוספת רכב
            state.Vehicles.push(action.payload);
            break;
        }
        case 'ADD_ADVERTISMENT': {//הוספת פרסומת
            state.videos.push(action.payload);
            break;
        }

        case 'UPDATE_ADVERTISMENT': {//עידכון פרסומת
            state.videos[action.payload.index] = action.payload.video;
            break;
        }

        case 'UPDATE_VEHICLE': {//עידכון הרכב
            state.Vehicles[action.payload.index] = action.payload.Vehicle;
            break;
        }

        case 'DELETE_Vehicle': {
            state.Vehicles.splice(action.payload, 1); //  פקודת מחיקה splice ,1 כמות הפרטים למחיקה הוא action.payload - הוא מקבל את האינדקס שנשלל אליו ב - 
            break;
        }
        case 'DELETE_ADVERTISMENT': {


            console.log(action.payload);
            //  console.log(index);
            state.videos.splice(action.payload, 1);
            break;
        }
        case 'UPDATE_VEHICLE_IS': {//עידכון זמינות הרכב
            const { index, is } = action.payload;
            state.Vehicles[index].is = is;
            break;
        }
        case 'UPDATE_CAR_PRICE': {//עידכון המחיר החדש לשעה שנשלח ברכב שנשלח
            const { index, newPrice } = action.payload;
            state.Vehicles[index].pricePerHour = newPrice;
            break;
        }
        case 'ADD_CREDITCARD_DETAILS':
            return {
                ...state,
                creditCardDetails: action.payload,
            };
        case 'ADD_MODAL': {
            const modalIdArray = Array.isArray(state.modal) ? state.modal : [];
            const newModalId = [...modalIdArray, action.payload];
            return { ...state, modal: newModalId };
        }

        case 'UPDATE_CREDITCARD_DETAILS':
            return {
                ...state,
                creditCardDetails: {
                    ...state.creditCardDetails,
                    [action.payload.key]: action.payload.value
                }
            };


        default:
            break;
    }
}, initialState);



const myStore = createStore(reducer);
window.store = myStore;
export default myStore;

