import { BUY_CAKE } from './cakeTypes'

// an action is an object with type property

const buycake = () => {
    return {
        type: BUY_CAKE
    }
}

export default buycake;