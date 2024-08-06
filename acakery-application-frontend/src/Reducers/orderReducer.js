
const orderIntialState = {
    orders :  []
}

const orderReducer = (state = orderIntialState, action) => {
    switch(action.type){
        case 'SET_ORDERS' : {
            return {...state, orders: action.payload}
        }
        default : {
            return state
        }
    }
}

export default orderReducer