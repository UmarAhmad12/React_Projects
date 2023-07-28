import { useState } from "react";
import '../components/Counter.css';

function Counter() {
    // State to store the counter value
    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            <div className="result">
                {counter}
            </div>
            <div className="btn-container">
                {/* Use the event handlers for increment and decrement counter */}
                <button onClick={()=> setCounter(counter + 1)}>Increment</button>
                <button onClick={()=> setCounter(counter - 1)}>Decrement</button>

            </div>
        </div>
    )
}

export default Counter;