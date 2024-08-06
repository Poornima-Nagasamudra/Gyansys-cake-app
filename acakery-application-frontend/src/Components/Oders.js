import React , {useState, useEffect} from 'react'
import axios from 'axios'

const OrderPage = () => {
    const[orders, setOrders] = useState([])
    const userId = 'user-id'

    useEffect(() => {
        axios.get(`http://localhost:3555/api/orders/${userId}`)
        .then(response => setOrders(response.data))
        .catch(error => console.log(error))
    },[userId])

    return (
        <div>
            <h1> Your Orders </h1>

            <ul>
                {orders.map(order => (
                    <li key={order._id}> 
                        <h2> {order.product.name} </h2>
                        <p> Quantity: {order.quantity} </p>
                        <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}  </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OrderPage