import axios from 'axios'

export const getOrders = () => {
    axios.get('http://localhost:3555/api/orders')
      .then((response) => {
        const result = response.data
        dispatch(getOrders(result))
      })
      .catch((err) => {
        console.log(err)
      })
}

const getOrders = (data) => {
   return{
    type:'SET_ORDERS', 
    payload: data
   }
}