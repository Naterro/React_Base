import React, {useState} from 'react';

const Counter = () => {
    const [counter,setState] = useState(0)
    function plus(){
        setState (counter+1)
    }
    function minus(){
        setState(counter-1)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </div>
    );
};

export default Counter;