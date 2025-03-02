import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './ReturnCarForm.css'; 

export const ReturnCarForm = () => {
    const [rentalCode, setRentalCode] = useState('');
    const [last, setLast] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnHour, setReturnHour] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('otherCard'); // ברירת מחדל
    const navigate = useNavigate();

    // בדיקה אם יש כרטיסים שמורים במערכת
    const creditCards = useSelector((store) => store.creditCardDetails || {}); // בדיקת ריקון כדי למנוע שגיאה
    const rents = useSelector((store) => store.rent);

    const handleSubmit = (e) => {
        e.preventDefault();
        //בדיקה האם קוד ההשכרה קיים
        const rent = rents.find((rent) => rent.rentalCode === parseInt(rentalCode));

        if (!rent) {
            swal('Error!', 'קוד השכרה לא נמצא!', 'error');
            return;
        }

        // חישוב הימים והשעות
        const rentalDateObj = new Date(rent.rentalDate);//תאריך השכרה
        const returnDateObj = new Date(returnDate);//תאריך החזרה
        const timeDiff = returnDateObj.getTime() - rentalDateObj.getTime();//חישוב תאריך החזרה פחות תאריך השאלה
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));//פונקציה לחישוב ימים
        const rentalHour = parseInt(rent.rentalHour);
        const returnHourInt = parseInt(returnHour);
        const hoursUsed = returnHourInt - rentalHour;

        // חישוב עלות התשלום
        const payL = (rent.last - last) * 10;
        const totalPayment = (daysDiff * rent.pricePerHour * 24) + (hoursUsed * rent.pricePerHour) + payL;

        swal('Success!', `סכום לתשלום: ₪${totalPayment}`, 'success').then(() => {
            if (paymentMethod === 'savedCard' && Object.keys(creditCards).length > 0) {
                navigate('/Succsess'); // ניווט לעמוד הצלחה אם התשלום נעשה בכרטיס שמור
            } else {
                navigate('/CreditCardForm'); // ניווט לטופס הזנת פרטי כרטיס אשראי
            }
        });
    };

    return (

        <div className="return-car-container">
            <video autoPlay muted loop className="background-video">
            <source src="/pictures/ex30-electric-one-feature-callout-video-16x9.mp4" type="video/mp4" />
            </video>
            <form onSubmit={handleSubmit} className="return-car-form">
                <div className="input-group">
                    <label>קוד השכרה:</label>
                    <input
                        type="text"
                        value={rentalCode}
                        onChange={(e) => setRentalCode(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>כמה Last נשאר:</label>
                    <input
                        type="number"
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>תאריך החזרה:</label>
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => {
                            const value = e.target.value;
                            const today = new Date().toISOString().split('T')[0];
                            if (value >= today) {
                                setReturnDate(value);
                            } else {
                                swal('Error!', 'תאריך החזרה לא יכול להיות קטן מהיום!', 'error');
                            }
                        }}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>שעת החזרה:</label>
                    <input
                        type="number"
                        value={returnHour}
                        onChange={(e) => setReturnHour(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>צורת תשלום:</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        {Object.keys(creditCards).length > 0 ? (
                            <>
                                <option value="savedCard">בכרטיס ששמור במערכת</option>
                                <option value="otherCard">בכרטיס אשראי אחר</option>
                            </>
                        ) : (
                            <option value="otherCard">הכנס פרטי כרטיס אשראי</option>
                        )}
                    </select>
                </div>
                <button type="submit" className="submit-button">החזר רכב</button>
            </form>
        </div>
    );
};



























