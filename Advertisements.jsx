import React from "react";
import { useSelector } from "react-redux";
import './Advertisements.css'; 




export const Advertisements = () => {
    const videos = useSelector((store) => store.videos);




    return (
        <div className="advertisements-container">
            <h1 className="advertisements-title">Advertisements</h1>
            
            <div className="video-grid">
                {videos.map((video, index) => (
                    <div key={video.id} className={`video-item ${index === 0 ? 'video-main' : ''}`}>
                        <h1 className={`video-title ${video.onSale ? 'on-sale' : ''}`}>{video.title}</h1>
                        <video width="80%" autoPlay loop muted>
                            <source src={video.video} type="video/mp4" />  
                        </video>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};
