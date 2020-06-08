import React from 'react'
import  { buyCake } from '../redux/cakes/cakeActions'
import { useSelector,useDispatch } from 'react-redux';

const CakeContainer = () => {

    const numOfCakes = useSelector( state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button onClick = { () => dispatch(buyCake()) }> Buy Cake </button>
        </div>
    )
}

export default CakeContainer;