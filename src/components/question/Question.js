import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className='text-center'>How does react works?</h1>
            <p className='container'><h3>Answer:</h3>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            <h1 className='text-center'>Difference between state and props</h1>
            <p className='container'><h3>Answer:</h3>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            <h1 className='text-center'>How does useEffect works without  data load </h1>
            <p className='container'><h3>Answer:</h3>useEffect() is for side-effects
              A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don’t target the output value, then these calculations are named side-effects.
              A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don’t target the output value, then these calculations are named side-effects.
              A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don’t target the output value, then these calculations are named side-effects.
              
              Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.</p>
           </div>
    );
};

export default Question;