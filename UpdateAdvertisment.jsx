import React, { useEffect } from "react";              
import { useState } from "react";
import {updateAdvertisment} from "./redux/Action"
import { useSelector,useDispatch, } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";


export const UpdateAdvertisment = () =>{

    const location =  useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

const [advertisment, setAdvertisment] = useState ({id:'', title:" ", video:''});
const [advertismentIndex,setAdvertismentIndex]= useState('')
const [errors,setErrors] = useState({});
const [selectedFile,setSelectedFile] = useState(null);


useEffect (()=>{
if(location.state){
const {video,index} = location.state;
setAdvertismentIndex(index);
setAdvertisment
({
    id: video.id || '',
    title : video.title || '',
    video : video.video|| ''
});
}
},
[location.state] 
);

const OnUpdateAdvertisment = (e)=> 
{
    const updateV = {
    ...advertisment,
    video:selectedFile? URL.createObjectURL(selectedFile) : advertisment.video};
dispatch(updateAdvertisment(advertismentIndex,updateV));
navigate(-1);
};

// const validate

return(<>


 

<div>
 <h1>update the advertisment</h1>

<input type="number"
// name="id"
value={advertisment.id}
placeholder="id"
onChange={(e)=> setAdvertisment({...advertisment,id:e.target.value})}
></input>

<input type="file"
name="video"
onChange={(e)=>{const file = e.target.files[0]
    if(file)
        setSelectedFile(file);
}}

></input>

<input type="text"
name="title"

value={advertisment.title}
placeholder="title"
onChange={(e)=> setAdvertisment({...advertisment,title:e.target.value})}
></input>

<button onClick={OnUpdateAdvertisment}>update</button>

</div>
</>)
};
















