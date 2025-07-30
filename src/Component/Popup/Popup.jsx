import React from 'react'
import "./Popup.css"
import { Link } from 'react-router-dom'

const Popup = () => {
    return (
        <div className="popup">
            <div className="popup-content">
               
                <h3>Haven't you Logged in yet? <br />Do it now.</h3>
               <Link to="/login">
                <button className='pop-btn'>Login</button>
               </Link>
            </div>
            
        </div>
    )
}

export default Popup