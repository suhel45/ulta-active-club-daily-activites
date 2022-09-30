import React from 'react';
import './Activity.css'
const activity = ({activity, handleAddToList}) => {
    const {name,time,img} = activity;
    return (
        <div>
             <div className="card ">
             <img className='card-img-top img-fluid' src={img} alt="" />
             <h3>{name}</h3>
             <p>Time Required: {time}</p>
             <button onClick={() => handleAddToList(activity)} className=' btn-primary'>Add lists</button>
            </div>
        </div>
    );
};

export default activity;