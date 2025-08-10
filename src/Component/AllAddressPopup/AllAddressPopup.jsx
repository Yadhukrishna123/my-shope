import React, { useContext } from 'react'
import "./AllAddressPopup.css"
import { useSelector } from 'react-redux'
import { AllProductContexts } from '../AllProductContext/AllProductContext'
import { Link } from 'react-router-dom'

const AllAddressPopup = ({ setPopup, setCurrentAddress }) => {
    const { setCurrentAddresss } = useContext(AllProductContexts)
    const address = useSelector((state) => state.userAuth.user)
    const userAdddress = useSelector((state) => state.userAuth.usersAddress)

    const addressList = (userAdddress && userAdddress.length > 0 ? userAdddress : (address.addresses) || [])

    console.log(address.addresses);

    const handleChangedAddress = (a, add) => {

        setCurrentAddress(a)
        setCurrentAddresss(add)

        setPopup(false)
    }

    return (
        <div className="address-popup">

            <div className="address-popup-content">
                <Link to={`/account/${address._id}/create-address`} className='ms-auto'>
                    <button style={{ backgroundColor: "transparent", border: "none", color: "blue" }} >Add new address</button>

                </Link>
                <div className='address-content'>



                    {addressList.map((a, index) => {
                        return (
                            <div className='q'>

                                <div key={index} style={{ cursor: "pointer", }} onClick={() => handleChangedAddress(index, a)} className='ms-3 '>

                                    <p>Deliver to <span className='fw-bold'>{a.fullName}</span></p>
                                    <p>{`${a.address},${a.city_district_town},${a.state}, ${a.landMark}`}</p>
                                    <p>{a.phone}</p>

                                </div>
                            </div>
                        )
                    })}



                </div>


            </div>

        </div>

    )
}

export default AllAddressPopup