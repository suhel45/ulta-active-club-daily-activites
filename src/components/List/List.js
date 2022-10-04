import { useEffect, useState } from 'react';
import logo from '../../suhel.jpg'
import './List.css'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const List = (props) => {
    const [tim,setTim] = useState(0);
    let TotalTime = 0;
    for(const time of props.list){
        TotalTime = TotalTime + parseFloat(time.time);
    }
    const [breakTime,setBreakTime] = useState(0);
    const addBreakTime = (storeTime) =>{
         let cart = {time:storeTime};
           localStorage.setItem("cart",JSON.stringify(cart));
       setBreakTime(storeTime);
    }
    useEffect(() =>{
        const a = JSON.parse(localStorage.getItem("cart"));
         setTim(a);
    },[breakTime])
    const completeBtn = () =>{
        toast.success("Successfully Completed",{
            position:"top-center"
        });
    }
    return (
        <div className="list-container">
        <div className="person-info">
     <img className='rounded-circle' src={logo} alt="" />
     <p className='name'>md suhel</p>
 </div>
 <div className='person-details'>
     <p>50kg weight</p>
     <p>5.2 height</p>
     <p>23years</p>
 </div>
 <div>
     <h3>Add Break</h3>
     <div className='btn'>
         <button onClick={() =>addBreakTime(10)} className='rounded-circle bg-white border-0 py-1'>10s</button>
         <button onClick={() =>addBreakTime(20)} className='rounded-circle bg-white border-0 py-1'>20s</button>
         <button onClick={() =>addBreakTime(30)} className='rounded-circle bg-white border-0 py-1'>30s</button>
         <button onClick={() =>addBreakTime(40)} className='rounded-circle bg-white border-0 py-1'>40s</button>
     </div>
     <div>
         <h4>Study details</h4>
     </div>
     <div className='study-time'>
         <h5>Study Time:{TotalTime}hr</h5>
     </div>
     <div className='break-time'>
     <h5>Break Time:{tim?tim.time:0}s</h5>
     </div>
 </div>
 <button onClick={() =>completeBtn()} className=' btn-primary px-3 py-2'>Activity Completed</button>
       <ToastContainer/>
        </div>
    );
    
};

export default List;