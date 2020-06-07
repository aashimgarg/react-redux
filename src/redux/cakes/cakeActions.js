import { BUY_CAKE } from './cakeTypes'

// an action is an object with type property

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}