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
import WishList from '../MyWishList/WishList';


const UserPage = () => {

    const user = useSelector((state) => state.userAuth.user)
    // console.log(user.addresses)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoggout = () => {
        dispatch(userLogout())
        alert("Successfully loged out")
        setTimeout(() => {
            navigate("/login")
            // location.reload();
        }, 2000)

    }
    return (
        <div className='user-page-parent'>
            <div className='user-page row'>
                <div className='d-flex user-bio justify-content-center align-items-center mt-3 '>
                    <div className='d-flex '>
                        <FaUserCircle size={50} />
                    </div>
                    <div className='ms-3 mt-2'>

                        <h4>{user.fullName}</h4>
                    </div>
                </div>

                <div>
                    <div className='my-order'>
                        <div className='my-order-sub'>
                            <IoBagCheckOutline size={30} />
                        </div>
                        <div className='my-order-sub'>

                            <p className='fs-5 text-secondary mt-1'>My orders</p>
                        </div>
                        <div className='my-order-sub'>
                            <Link to={`/account/${user._id}/orders`}>
                                <FaArrowRight size={25} />
                            </Link>
                        </div>
                    </div>
                    <div className='profile-content-parent'>
                        <div className='profile-content'>
                            <div className='profile-content-sub'>
                                <div className='mt-2'>
                                    <FaUserCircle size={30} color='blue' className='mt-2 iconss' />
                                </div>

                                <div>
                                    <p className='ms-3 mt-3 fs-5 text-secondary'>Account setting</p>
                                </div>
                            </div>
                            <div className='profile-content-sub-1'>
                                <Link style={{ color: "black", textDecoration: "none" }} to={`/account/${user._id}/profile`}>
                                    <p className='ms-5'>Profile information</p>
                                </Link>
                                <Link style={{ color: "black", textDecoration: "none" }} to={`/account/${user._id}/address_manager`}>
                                    <p className='ms-5'>Manage address</p>
                                </Link>


                                <Link style={{ color: "black", textDecoration: "none" }} to={`/account/${user._id}/create-address`}>
                                    <p className='ms-5'>Create Address</p>
                                </Link>




                            </div>
                        </div>


                        <div className='profile-content'>
                            <div className='profile-content-sub '>
                                <MdOutlinePayment size={30} color='blue' className='mt-3 iconss' />

                                <p className='ms-2 fs-5 text-secondary'>payment</p>
                            </div>

                            <div className='profile-content-sub-1'>
                                <p className='ms-5'>Gift cart</p>
                                <p className='ms-5'>Saved upi</p>
                                <p className='ms-5'>Saved cards</p>
                            </div>

                        </div>

                        <div className='profile-content'>
                            <div className='profile-content-sub'>
                                <FaHospitalUser size={30} color='blue' className='mt-2 iconss' />

                                <p className='ms-2 fs-5 text-secondary'>My stuff</p>
                            </div>

                            <div className="profile-content-sub-1">
                                <p className='ms-5'>My coupons</p>
                                <p className='ms-5'>My Notifications</p>
                                <Link style={{ color: "black", textDecoration: "none" }} to={`/account/${user._id}/wish_list`}>
                                    <p className='ms-5'>My wish list</p>
                                </Link>

                            </div>

                        </div>


                    </div>
                     <div style={{flexDirection:"row"}} className='profile-content-logout'>
                        <div className='profile-content-sub'>
                            <FaPowerOff style={{ cursor: "pointer" }} size={30} color='red' />

                        </div>

                        <div className='profile-content-sub-1'>
                            <p style={{ cursor: "pointer", color:"red" }} onClick={handleLoggout}>Logout</p>

                        </div>

                    </div>
                </div>
            </div>
            <div className='addressd-page'>

                <Routes>
                    <Route path="orders" element={<MyOrder />} />
                    <Route path="profile" element={<ProfileInfo />} />
                    <Route path="address_manager" element={<AddressManager />} />
                    <Route path="create-address" element={<UserAddress />} />
                    <Route path="wish_list" element={<WishList />} />
                </Routes>

            </div>
        </div>
    )
}

export default UserPage