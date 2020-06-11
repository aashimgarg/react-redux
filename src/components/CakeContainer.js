import React, { useState } from 'react'
import  { buyCake } from '../redux/cakes/cakeActions'
import { useSelector,useDispatch } from 'react-redux';

const CakeContainer = () => {
    
    const [ number , setNumber ] = useState(1)
    const numOfCakes = useSelector( state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <input type = 'text' value = {number} onChange ={ e =>setNumber(e.target.value)} />
            <button onClick = { () => dispatch(buyCake(number)) }> Buy {number} Cake </button> 
            <br /><br />
        </div>
    )
}

export default CakeContainer;