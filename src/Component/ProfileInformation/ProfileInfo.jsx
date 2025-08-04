import React from 'react'
import { Form } from 'react-bootstrap'
import "./Profileinfo.css"
import { useSelector } from 'react-redux'

const ProfileInfo = () => {

    const user = useSelector((state) => state.userAuth.user)
    console.log(user)

    return (
        <div className='m-auto'>
            <h2 style={{ textDecoration: "underLine" }} className='mt-5 text-center'>Personal Information</h2>

            <div className='mt-5 profile-info-parent' >
                <label className='fs-5'>Full name:</label>
                <input className='w-50 m-auto' type="text" placeholder={user.fullName} readOnly />


                <label className='fs-5 '>Email:</label>
                <input className='w-50 m-auto' type="text" placeholder={user.email} readOnly />

                <label className='fs-5 '>Phone:</label>
                <input className='w-50 m-auto' type="text" placeholder="" readOnly />

            </div>

            <p className='text-center mt-5' >Do you want edit your profile ? <a className='text-primary'>Edit</a></p>
        </div>
    )
}

export default ProfileInfo