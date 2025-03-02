import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_advertisment } from "./redux/Action";
import { useNavigate } from "react-router";

export const ManagerAdvertisment = () => {

    const videos = useSelector((store) => store.videos)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const delAdvertisment = (index) => {
        dispatch(delete_advertisment(index));  
    };
    const navigateAddAdvertisment = () => navigate('/AddAdvertisment');

    const navigateToUpdateAdvertisment = (video, index) => {
        navigate(`/UpdateAdvertisment`, { state: { video, index } });
    };

    return (

        <div>
        {videos.map((video,index ) => (

            <div className="video-card" key={video.id}>

                <h2> {video.title}</h2>

                <video width="50%" controls>
                    <source src={video.video}></source>
                </video>
                <button onClick={() => navigateToUpdateAdvertisment(video, index)}>UpdateAdvertisment</button>
            
                <button onClick={() => delAdvertisment(index)}>Delete Advertisment </button>

                <button onClick={navigateAddAdvertisment}>Add a new advertisment</button>
           
             </div>))}
       
    </div> );
};