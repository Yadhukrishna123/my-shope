import React, { useContext } from 'react'
import "./Popup.css"
import { Link } from 'react-router-dom'
import { AllProductContexts } from '../AllProductContext/AllProductContext'

const Popup = () => {
    const { handleClosePopup } = useContext(AllProductContexts)
    return (
        <div className="popup">

            <div className="popup-content">


                <h3>Haven't you Logged in yet? <br />Do it now.</h3>
                <Link to="/login">
                    <button className='pop-btn'>Login</button>

                </Link>

                <button onClick={() => handleClosePopup(true)} className='pop-btn mt-2'>Close</button>

            </div>

        </div>
    )
}

export default Popup