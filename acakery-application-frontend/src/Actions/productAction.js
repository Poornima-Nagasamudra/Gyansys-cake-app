import axios from 'axios'

export const startGetProducts = () => {
    return(dispatch) =>{
        axios.get('http://localhost:3555/api/products')
        .then((response) => {
          const result = response.data
          dispatch(getProduct(result))
          dispatch(setIsLoading(false))
        })
        .catch((err) => {
          console.log(err)
          dispatch(setIsLoading(false))
        })
    }
  
}

const getProduct = (data) => {
    return {
        type:'GET_PRODUCTS', 
        payload: data
    }
}
const setIsLoading = (status) => {
    return {
        type: 'SET_LOADING',
        payload: status
    }
}

export const startUpdateProduct = (id) =>{
    return(dispatch) => {
        axios.put(`http://localhost:3555/api/products/${id}`)
        .then((response) => {
            const result = response.data
            dispatch(updateProduct(result))
          })
          .catch((err) => {
            console.log(err)
          })
    }
}

const updateProduct = (data) => {
    return {
        type:'UPDATE_PRODUCTS', 
        payload: data
    }
}