import React from 'react'
import "./MyOrder.css"
import { Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const MyOrder = () => {
  const userOrders = useSelector((state) => state.userAuth.myOrders)
  // console.log(userOrders)

  return (
    <div >
      {userOrders && userOrders.length > 0 ? (
        userOrders.map((orderGroup, indexOne) =>
          orderGroup.map((ord, indexTwo) => (
            <div className="checkout-parent mt-4" key={`${indexOne}-${indexTwo}`}>
              <div className="order-img ">
                <img src={ord.thumbnail} alt={ord.title} />
              </div>
              <div className="order-title">
                <h2 className="fs-5">{ord.title}</h2>
              </div>
              <div className="checkout-price">
                <p className='me-5'>₹{ord.price}</p>
              </div>
            </div>
          ))
        )
      ) : (
        <p className="text-center mt-5 text-secondary">No orders</p>
      )}
    </div>

  )
}

export default MyOrder