import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./UserAddress.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { usersAddress } from '../ReduxStore/userSlice'

const UserAddress = () => {

   

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState({
        fullname: "",
        phone: "",
        pin: "",
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
                pincode: input.pin,
                address: input.address,
                city_district_town: input.city,
                state: input.state,
                landMark: input.landmark
            },{withCredentials:true})

            if (res.data.success) {

                if(res.data.success === true){
                    dispatch(usersAddress({address:res.data}))
                }
                alert(res.data.message)

                await new Promise((resolve) => setTimeout(resolve, 2000));
                navigate("/account/address_manager");
            }

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div style={{ height: "auto" }} className='mt-5'>
            <h2 className='text-center'>Create Addres</h2>


            <Form className='mt-5' onSubmit={handleSubmit}>
                <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>First name:</Form.Label>
                        <Form.Control className='rounded shadow border-dark' type="text" placeholder="First name" onChange={handleInput} name="fullname" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control className='rounded shadow border-dark' type="text" placeholder="10 digit phone" onChange={handleInput} name="phone" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Pin:</Form.Label>
                        <Form.Control className='rounded shadow border-dark' type="text" placeholder="State" onChange={handleInput} name="pin" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>City/District/town:</Form.Label>
                        <Form.Control className='rounded shadow border-dark' type="text" placeholder="City/District/town" onChange={handleInput} name="city" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3 d-flex justify-content-center align-items-center">


                    <Form.Group as={Col} md="6" >
                        <Form.Label>Address :</Form.Label>
                        <Form.Control className="p-4 border rounded shadow border-dark w-100" as="textarea" placeholder='Address' onChange={handleInput} name="address" />
                        <Form.Control.Feedback type="valid">Looking good </Form.Control.Feedback>

                    </Form.Group>
                </Row>
                <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>State:</Form.Label>
                        <Form.Control className='rounded shadow border-dark' type="text" placeholder="State" onChange={handleInput} name="state" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Land mark:</Form.Label>
                        <Form.Control className='rounded shadow border-dark' type="text" placeholder="Land mark" onChange={handleInput} name="landmark" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <div className='text-center mt-5'>
                    <Button type="submit" size="lg">Submit</Button>
                </div>
            </Form>

        </div>
    )
}

export default UserAddress