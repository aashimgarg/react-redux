import { BUY_ICECREAM } from './iceCreamTypes'

// an action is an object with type property

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}