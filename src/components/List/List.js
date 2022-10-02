import logo from '../../logo.svg'
const List = (props) => {
    let TotalTime = 0;
    for(const time of props.list){
        TotalTime = TotalTime + parseFloat(time.time);
    }
    const addBreakTime = (breakTime) =>{
        console.log(breakTime)
    }
    return (
        <div>
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
         <button onClick={() =>addBreakTime(10)} className='rounded-circle bg-white border-0 py-1'>10s</button>
         <button onClick={() =>addBreakTime(20)} className='rounded-circle bg-white border-0 py-1'>20s</button>
         <button onClick={() =>addBreakTime(30)} className='rounded-circle bg-white border-0 py-1'>30s</button>
         <button onClick={() =>addBreakTime(40)} className='rounded-circle bg-white border-0 py-1'>40s</button>
     </div>
     <div>
         <h4>Study details</h4>
     </div>
     <div className='study-time'>
         <h5>Study Time:{TotalTime}</h5>
     </div>
     <div className='break-time'>
     <h5>Break Time:{}</h5>
     </div>
 </div>
 <button className=' btn-primary px-3 py-2'>Activity Completed</button>
        </div>
    );
};

export default List;