import React, { useState, useEffect } from 'react'; // מייבא את React יחד עם שני hooks: useState לניהול state מקומי ו-useEffect לניהול side effects כמו טעינת נתונים
import { useSelector, useDispatch } from 'react-redux'; // מייבא שני hooks מ-react-redux: useSelector לגישה ל-state מה-store של Redux ו-useDispatch לשליחת actions ל-store
import { updateCarPrice } from './redux/Action'; // מייבא את הפעולה updateCarPrice מקובץ הפעולות (Action) שנמצא בתיקיית redux, פעולה שמיועדת לעדכן את מחיר הרכב
import { useLocation, useNavigate } from 'react-router-dom'; // מייבא את useLocation מהספרייה react-router-dom, שמספק גישה לפרטי המיקום הנוכחי (URL) של הרכיב בדפדפן


export const UpdateThePrice = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
   

    const [VicheleIndex, setVicheleIndex] = useState();
    const [newPrice, setNewPrice] = useState();
    //כאשר יש לוחצים על הכפתור להעברה לדף עידכון
    useEffect(() => {
        if (location.state) {
            //העברת המידע של הרכב לדף הבא במקום של האינדקס שנבחר - בו המנהל ליץ על עידכון רכב 
            const { vehicle, index } = location.state;
            setVicheleIndex(index)//VicheleIndex - שמים את הערכים של הרכב הנבחר במשתנה
            setNewPrice(vehicle.pricePerHour)//newPrice - שמים את הערך של המחיר לשעה של הרכב הנבחר במשתנה 
            //setVicheleIndex(index,pricePerHour)
        }
    }, [location.state])

    const handleUpdateThePrice = () => {
        dispatch(updateCarPrice(VicheleIndex, newPrice))// שינוי המחיר של הרכב על ידי שליחת הרכב והמחיר החדש לredux
        navigate(-1)//חזרה לעמוד קודם
    }

    return (
        <div>
            <h2>enter the new price</h2>
            <input
                type='number'
                value={newPrice}
                // placeholder='enter price'
               onChange={(e) => setNewPrice(e.target.value)} 
            >
            </input>
            <button onClick={handleUpdateThePrice}> change </button>
        </div>
    );
};