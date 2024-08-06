import axios from 'axios'

export const addToCart = (id, ) => {
    return(dispatch, getState) => {
        axios.put(`http://localhost:3555/api/products/${id}`)
        .then((response) => {
            const result = response.data
            console.log('result',result)
            dispatch(updateProduct(result))
      
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    })
    .catch((err) => {
        console.log(err)
    })
    
    }
}

const updateProduct = (data) => {
    return {
        type:'CART_ADD_ITEM', 
        payload: data
    }
}

export const removeFromCart =(id) => (dispatch, getState) =>{
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id
    })
    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const incrementItem = (id) => {
    return {
        type: 'INCREMENT',
        payload: id
    };
};

export const decrementItem = (id) => {
    return {
        type: 'DECREMENT',
        payload: id
    };
};