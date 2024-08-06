
const cartInitialState = {
    cartItems : [],
}

const cartReducer = (state = cartInitialState, action) => {
    switch(action.type) {
        
        case 'CART_ADD_ITEM' : {
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id)
            if(itemInCart){
                itemInCart.quantity++
            }else {
                state.cartItems.push({...action.payload, quantity: 1})
            }
        }

        case 'INCREMENT' : {
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }

        case 'DECREMENT' : {
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                ),
            };
        }

       
        
        case 'REMOVE_FROM_CART' : {
            return {...state, cartItems: state.cartItems.filter(ele => ele.product !== action.payload)}
        }

        default : {
            return state
        }
    }
}

export default cartReducer