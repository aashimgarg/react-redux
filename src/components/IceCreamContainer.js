import React from 'react'
import  { buyIceCream } from '../redux/iceCreams/iceCreamActions'
import { useSelector,useDispatch } from 'react-redux';

const IceCreamContainer = () => {

    const numOfIceCreams = useSelector( state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of IceCreams - {numOfIceCreams} </h2>
            <button onClick = { () => dispatch(buyIceCream()) }> Buy Ice Cream </button>
        </div>
    )
}

export default IceCreamContainer;