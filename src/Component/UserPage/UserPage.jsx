import React from 'react'
import "./UserPage.css"
import { FaUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa6"
import { FaPowerOff } from "react-icons/fa6";
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import MyOrder from '../MyOrders/MyOrder';
import ProfileInfo from '../ProfileInformation/ProfileInfo';
import AddressManager from '../AddressManager/AddressManager';
import UserAddress from '../UserAddress/UserAddress';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../ReduxStore/userSlice';


const UserPage = () => {

    const user = useSelector((state)=>state.userAuth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoggout = () => {
        dispatch(userLogout())
        alert("Are you sure that you want to logged out")
        navigate("/login")
       
    }
    return (
        <div className='d-flex user-page-parent'>
            <div className='user-page row'>
                <div className='d-flex user-bio justify-content-center align-items-center mt-3 '>
                    <div className='d-flex '>
                        <FaUserCircle size={50} />
                    </div>
                    <div className='ms-5'>

                        <h4>{user.fullName}</h4>
                    </div>
                </div>

                <div>
                    <div className='d-flex orders justify-content-between align-items-center mt-3 '>
                        <div className='ms-5'>
                            <IoBagCheckOutline size={30} />
                        </div>
                        <div className='mt-2'>

                            <p className='fs-5 text-secondary'>My orders</p>
                        </div>
                        <div className='me-5'>
                            <Link to="/account/orders">
                                <FaArrowRight size={25} />
                            </Link>
                        </div>
                    </div>
                    <div className='profile-address'>
                        <div className='d-flex '>
                            <FaUserCircle size={30} color='blue' className='mt-1 iconss' />

                            <p className='ms-2 fs-5 text-secondary'>Account setting</p>
                        </div>
                        <div className='mt-2'>
                            <Link style={{ color: "black", textDecoration: "none" }} to="/account/profile">
                                <p className='ms-5'>Profile information</p>
                            </Link>
                            <Link style={{ color: "black", textDecoration: "none" }} to="/account/address_manager">
                                <p className='ms-5'>Manage address</p>
                            </Link>
                            <Link style={{ color: "black", textDecoration: "none" }} to="/account/create-address">
                                <p  className='ms-5'>Create addres</p>
                            </Link>

                        </div>
                    </div>

                    <div className='payment'>
                        <div className='d-flex '>
                            <MdOutlinePayment size={30} color='blue' className='mt-1 iconss' />

                            <p className='ms-2 fs-5 text-secondary'>payment</p>
                        </div>

                        <div >
                            <p className='ms-5'>Gift cart</p>
                            <p className='ms-5'>Saved upi</p>
                            <p className='ms-5'>Saved cards</p>
                        </div>

                    </div>

                    <div className='payment'>
                        <div className='d-flex '>
                            <FaHospitalUser size={30} color='blue' className='mt-1 iconss' />

                            <p className='ms-2 fs-5 text-secondary'>My stuff</p>
                        </div>

                        <div >
                            <p className='ms-5'>My coupons</p>
                            <p className='ms-5'>My Notifications</p>
                            <p className='ms-5'>My wish list</p>
                        </div>

                    </div>

                    <div className='payment'>
                        <div  className='d-flex '>
                            <FaPowerOff style={{cursor:"pointer"}} size={30} color='blue' className='mt-5 iconss' />

                            <p style={{cursor:"pointer"}} className='ms-2 fs-5  mt-5 ms-5 logout' onClick={handleLoggout}>Logout</p>
                        </div>



                    </div>
                </div>
            </div>
            <div className='address-page'>

                <Routes>
                    <Route path="orders" element={<MyOrder />} />
                    <Route path="profile" element={<ProfileInfo />} />
                    <Route path="address_manager" element={<AddressManager />} />
                    <Route path="create-address" element={<UserAddress />} />
                </Routes>

            </div>
        </div>
    )
}

export default UserPage