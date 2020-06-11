import { BUY_CAKE } from './cakeTypes'

// an action is an object with type property

export const buyCake = ( number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}