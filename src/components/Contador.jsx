import { useState } from 'react'

const Contador = () => {
    const [count, setCount] = useState(0)

    const decrementa =() => {
        setCount(count -1)
    }

    const incrementa = () =>{
        setCount (count +1)
    }
     return(
        <>
        <button onClick={decrementa}>-</button>
        <h1>{count}</h1>
        <button onClick={incrementa}>+</button>
        </>
    )
}

export default Contador