import React, { useEffect, useState } from 'react';
import activity from '../activity/Activity';
import Activity from '../activity/Activity';
import List from '../List/List';
import './Study.css'

const Study = () => {
    let [study,setStudy] = useState([]);
    const [list,setList] = useState([]);
    useEffect(() =>{
        fetch("study.json")
        .then(res => res.json())
        .then( data => setStudy(data))
    },[])
    const handleAddToList = (activity) =>{
        const newList = [...list,activity];
        setList(newList);
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
        <List
        list={list}
        ></List>
    </div>
</div>
    );
};

export default Study;