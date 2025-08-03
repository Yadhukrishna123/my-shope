import React from 'react'
import "./OrderPlaced.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../ReduxStore/userSlice'

const OrderPlaced = () => {
    const dispatch = useDispatch()
    return (
        <div style={{height:"750px"}}  className="container">
            <div class="checkmark">✔️</div>
            <h1>Order Placed Successfully!</h1>
            <p>Thank you for shopping with us.</p>
            <p>Your order will be delivered soon.</p>
            <Link to="/">
                <button style={{ padding: "5pa 15pa", color: "blue", border: "none", backgroundColor: "transparent" }} onClick={() => dispatch(emptyCart())}>Continue shopping</button>

            </Link>
        </div>
    )
}

export default OrderPlaced