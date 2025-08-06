import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./UserAddress.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { usersAddress } from '../ReduxStore/userSlice'

const UserAddress = () => {



    const dispatch = useDispatch()
    const user = useSelector((state) => state.userAuth.user)

    const navigate = useNavigate()
    const [input, setInput] = useState({
        fullname: "",
        phone: "",
        pincode: "",
        city: "",
        address: "",
        state: "",
        landmark: ""
    })

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let res = await axios.post("http://localhost:8080/api/v1/address_create", {
                fullName: input.fullname,
                phone: input.phone,
                pincode: input.pincode,
                address: input.address,
                city_district_town: input.city,
                state: input.state,
                landMark: input.landmark
            }, { withCredentials: true })

            if (res.data.success) {

                if (res.data.success === true) {
                    dispatch(usersAddress({
                        address: input

                    }))
                    alert(res.data.message)

                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    navigate(`account/${user._id}`);
                }

            }

            console.log(res);


        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div style={{ height: "auto" }} className='mt-5'>
            <h2 className='text-center'>Create Addres</h2>

            <div className='text-center mt-5'>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" className='w-75 p-2' placeholder='Full Name' onChange={handleInput} name="fullname" />
                    <input type="text" className='w-75 p-2 mt-3' placeholder='Phone' onChange={handleInput} name="phone" />

                    <input type="text" className='w-75 p-2 mt-3' placeholder='Pincode' onChange={handleInput} name="pincode" />
                    <input type="text" className='w-75 p-2 mt-3' placeholder='City/District/town' onChange={handleInput} name="city" />

                    <input type="text" className='w-75 p-4 mt-3' placeholder='Address' onChange={handleInput} name="address" />

                    <input type="text" className='w-75 p-2 mt-3' placeholder='State' onChange={handleInput} name="state" />
                    <input type="text" className='w-75 p-2 mt-3' placeholder='Land mark' onChange={handleInput} name="landmark" />

                    <button style={{ border: "none" }} className='w-50 p-2 mt-3 bg-primary'>Submit</button>

                </form>
            </div>

        </div>
    )
}

export default UserAddress