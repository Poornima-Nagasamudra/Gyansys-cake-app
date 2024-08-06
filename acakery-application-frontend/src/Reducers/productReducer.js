
const productInitialState = {
    isLoading: false,
    data: [],
    errors: null
}

const productReducer = (state = productInitialState, action) => {

    switch(action.type){
        case 'GET_PRODUCTS' : {
            return {...state, data: action.payload, }
        }
        case 'SET_LOADING' : {
            return {...state, isLoading: action.payload}
        }
        case 'UPDATE_PRODUCTS' : {
            return {...state, data:[...state.data, action.payload] }
        }
        default : {
            return state
        }
    }
}

export default productReducer