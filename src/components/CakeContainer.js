import React from 'react'
import { connect } from 'react-redux'
import  { buyCake } from '../redux/cakes/cakeActions'
import { useSelector } from 'react-redux';

const CakeContainer = props => {

    const numOfCakes = useSelector( state => state.numOfCakes)
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button onClick = { props.buyCake }> Buy Cake </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapDispatchToProps
)(CakeContainer);