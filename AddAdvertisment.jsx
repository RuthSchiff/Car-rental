import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisment } from './redux/Action';
import { useNavigate } from 'react-router-dom';

export const AddAdvertisment = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [advertisment, setAdvertisment] = useState({
        id: '',
        title: '',
        video: null
    });
    const [selectedFile, setSelectedFile] = useState(null); // שמירה על הקובץ שנבחר
    const [videoPreview, setVideoPreview] = useState(null); // תצוגה מקדימה של הווידאו

    const OnUpdateAdvertisment = () => {
      
        const updatedAdvertisment = {
            ...advertisment,
            video: selectedFile ? URL.createObjectURL(selectedFile) : advertisment.video
        };

        dispatch(addAdvertisment(updatedAdvertisment));
        navigate(-1); // חזרה לדף הקודם
    };

    return (
        <div>
            <h1>Update the advertisment</h1>

            <input 
                type="number"
                placeholder="id"
                onChange={(e) => setAdvertisment({ ...advertisment, id: e.target.value })}
            />

            <input 
                type="file"
                name="video"
                accept="video/*" // מאפשר רק העלאת קבצי וידאו
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        setSelectedFile(file);
                        setVideoPreview(URL.createObjectURL(file)); // יצירת תצוגה מקדימה
                    }
                }}
            />

            {/* הצגת תצוגה מקדימה של הווידאו, אם יש כזה */}
            {videoPreview && (
                <video width="300" controls>
                    <source src={videoPreview} type="video/mp4" />
                </video>
            )}

            <input 
                type="text"
                name="title"
                placeholder="title"
                onChange={(e) => setAdvertisment({ ...advertisment, title: e.target.value })}
            />

            <button onClick={OnUpdateAdvertisment}>Update</button>
        </div>
    );
};

