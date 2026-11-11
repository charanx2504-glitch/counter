import { useState } from "react";
const Counter = () => {
    const [count, setcount] = useState(0)
    const [color,setcolor] = useState(true)

    let resetHandler = () => {
            setcount(0)
    }
    let Increment = () => {
        if(count<10){
            setcolor(false)
             setcount(count + 1)
        }
       
    }
    let Decrement = () => {
        if (count > 0) {
            setcount(count - 1)
        }

    }
    return (
        <div class="container">
            <h1>Counder Application</h1>
            <h1 style={{color:color?"grey":"black"}}>{count}</h1>
            <div>
            <button class="btn"onClick={Increment}>INC</button>
            <button class="btn" onClick={Decrement}>DEC</button><br/>
            </div>
            <button class="reset-btn" onClick={resetHandler}>Reset</button>
        </div>
    )
}
export default Counter