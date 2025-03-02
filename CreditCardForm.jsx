import React, { useState } from 'react';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCreditCardDetails } from './redux/Action';
import './CreditCardForm.css';

export const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const creditCards = useSelector((store) => store.creditCardDetails || {});

    const validateCardNumber = (number) => {
        let sum = 0;
        let shouldDouble = false;

        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number[i]);

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    };

    const validateExpiryDate = (date) => {
        const [month, year] = date.split('/');
        const expiry = new Date(`20${year}`, month - 1);
        const now = new Date();

        return expiry > now && month >= 1 && month <= 12;
    };

    const validateCvv = (cvv) => {
        return /^\d{3,4}$/.test(cvv);
    };

    // פונקציה לשמירת פרטי כרטיס
    const handleSaveCard = (e) => {
        e.preventDefault();

        if (!validateCardNumber(cardNumber)) {
            swal('Error', 'מספר כרטיס האשראי אינו תקין', 'error');
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            swal('Error', 'תאריך הפקיעה אינו תקין', 'error');
            return;
        }

        if (!validateCvv(cvv)) {
            swal('Error', 'מספר CVV אינו תקין', 'error');
            return;
        }

        // שמירת הכרטיס בלבד
        swal('Success!', 'הכרטיס נשמר במערכת', 'success');
        addCredit();
    };

    const addCredit = () => {
        dispatch(updateCreditCardDetails('cardNumber', cardNumber));
        dispatch(updateCreditCardDetails('expiryDate', expiryDate));
        dispatch(updateCreditCardDetails('cvv', cvv));
    };

    // פונקציה לשמירת כרטיס וביצוע תשלום
    const handlePay = (e) => {
        e.preventDefault();

        if (!validateCardNumber(cardNumber)) {
            swal('Error', 'מספר כרטיס האשראי אינו תקין', 'error');
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            swal('Error', 'תאריך הפקיעה אינו תקין', 'error');
            return;
        }

        if (!validateCvv(cvv)) {
            swal('Error', 'מספר CVV אינו תקין', 'error');
            return;
        }

        // שמירת הכרטיס וביצוע התשלום
        addCredit();
        navigate('/Succsess');
    };

    // פונקציה לביצוע תשלום ללא שמירת הכרטיס
    const handlePayWithoutSaving = (e) => {
        e.preventDefault();

        if (!validateCardNumber(cardNumber)) {
            swal('Error', 'מספר כרטיס האשראי אינו תקין', 'error');
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            swal('Error', 'תאריך הפקיעה אינו תקין', 'error');
            return;
        }

        if (!validateCvv(cvv)) {
            swal('Error', 'מספר CVV אינו תקין', 'error');
            return;
        }

        // ביצוע התשלום בלבד
        navigate('/Succsess');
    };

    return (
        <div className="credit-card-container">
            <div className="credit-card">
                <div className="card-chip"></div>
                <div className="card-number">{cardNumber || '0000 0000 0000 0000'}</div>
                <div className="card-expiry">
                    <span>Expiry Date</span> {expiryDate || '00/00'}
                </div>
                <div className="card-holder">Card Holder</div>
                <div className="card-logo">VISA</div>
            </div>
            <form className="credit-card-form">
                <div>
                    <label>מספר כרטיס:</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        maxLength="16"
                    />
                </div>
                <div>
                    <label>תאריך פקיעה (MM/YY):</label>
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                        placeholder="MM/YY"
                    />
                </div>
                <div>
                    <label>CVV:</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        maxLength="4"
                    />
                </div>

                <div className="button-group">
                    {/* כפתור לשמירת הכרטיס בלבד */}
                    <button onClick={handleSaveCard}>שמור כרטיס</button>
                    
                    {/* כפתור לשמירת הכרטיס וביצוע תשלום */}
                    <button onClick={handlePay}>שמור ותשלום</button>
                    
                    {/* כפתור לתשלום בלבד */}
                    <button onClick={handlePayWithoutSaving}>תשלום ללא שמירה</button>
                </div>
            </form>
        </div>
    );
};





