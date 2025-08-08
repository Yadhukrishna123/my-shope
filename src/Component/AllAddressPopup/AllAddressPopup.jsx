import React, { useContext } from 'react'
import "./AllAddressPopup.css"
import { useSelector } from 'react-redux'
import { AllProductContexts } from '../AllProductContext/AllProductContext'

const AllAddressPopup = ({ setPopup, setCurrentAddress }) => {
    const { setCurrentAddresss } = useContext(AllProductContexts)
    const address = useSelector((state) => state.userAuth.user)

    console.log(address.addresses);

    const handleChangedAddress = (a, add) => {

        setCurrentAddress(a)
        setCurrentAddresss(add)

        setPopup(false)
    }

    return (
        <div className="address-popup">

            <div className="address-popup-content">

                <div className='address-content'>


                    {address.addresses.map((a, index) => {
                        return (
                            <div className='q'>

                                <div key={index} style={{ cursor: "pointer" }} onClick={() => handleChangedAddress(index, a)} className='ms-3 '>

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