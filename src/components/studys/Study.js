import React, { useEffect, useState } from 'react';
import Activity from '../activity/Activity';
import './Study.css'
import logo from '../../logo.svg'

const Study = () => {
    let [study,setStudy] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() =>{
        fetch("study.json")
        .then(res => res.json())
        .then( data => setStudy(data))
    },[study])
    const handleAddToList = (activity) =>{
        const newCart = [...study, activity];
        setList(newCart);
        // console.log(list[0].time)
        // let sum =0;
        // for(const i of list){
            // sum = sum+ list.time;
        // }
        // console.log(time);
        // 
    }
    return (
        <div className='shop-container'>
    <div className="products-container">
        {
            study.map(activity => <Activity
                 activity={activity} 
                 key={activity.id}
                 handleAddToList={handleAddToList}
                 ></Activity>)
        }
    </div>
    <div className="cart-container">
        <div className="person-info">
            <img src={logo} alt="" />
            <p>md suhel</p>
        </div>
        <div className='person-details'>
            <p>50kg weight</p>
            <p>5.2 height</p>
            <p>23years</p>
        </div>
        <div>
            <h3>Add Break</h3>
            <div className='btn'>
                <button className='rounded-circle bg-white border-0 py-1'>10s</button>
                <button className='rounded-circle bg-white border-0 py-1'>20s</button>
                <button className='rounded-circle bg-white border-0 py-1'>30s</button>
                <button className='rounded-circle bg-white border-0 py-1'>40s</button>
            </div>
            <div>
                <h4>Study details</h4>
            </div>

            <div className='study-time'>
                <h5>Study Time:{list.length}</h5>
            </div>
            <div className='break-time'>
            <h5>Break Time:{}</h5>
            </div>
        </div>
        <button className=' btn-primary px-3 py-2'>Activity Completed</button>
    </div>
</div>
    );
};

export default Study;