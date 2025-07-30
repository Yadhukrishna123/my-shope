import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import "./SignUp.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    let [showPassword, setShowPassword] = useState(false)
    let [input, setInput] = useState({
        fullname: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()



    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let res = await axios.post("http://localhost:8080/api/v1/signup", {
                fullName: input.fullname,
                email: input.email,
                password: input.password
            })
            if (res.data.success === true) {

                alert(res.data.message)

                await new Promise((back) => setTimeout(back, 2000))
                navigate("/login")
            } else if (res.data.success === true) {


                alert(res.data.message)


            }
            console.log(res);

        } catch (error) {


            alert(res.data.message)


        }
    }

    return (

        <div className='mt-5'>


            <h2 className='text-center fw-bold '>Sign up</h2>


            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Form className='form-parent' onSubmit={handleSubmit} >

                    <Form.Group className="mb-3 ">
                        <Form.Label className='fs-5'>Full name:</Form.Label>
                        <Form.Control className='border-secondary rounded-0 form-controll' onChange={handleInput} name="fullname"
                            size="lg" type="text" placeholder="Enter Full name" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className='fs-5'>Email:</Form.Label>
                        <Form.Control className='border-secondary rounded-0' onChange={handleInput} name="email"
                            size="lg" type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3 password-session" controlId="formBasicEmail">
                        <Form.Label className='fs-5'>Password:</Form.Label>
                        <Form.Control className='border-secondary rounded-0' onChange={handleInput} name="password"
                            size="lg" type={showPassword === true ? " text" : "password"} placeholder="Enter Passsword" />
                        {showPassword === true ? <IoEyeOff className='eye-icon' onClick={handleShowPassword} /> : <IoEye className='eye-icon' onClick={handleShowPassword} />}

                    </Form.Group>

                    <div className='text-center'>
                        <Button className='fw-bold' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>


            </div>
            <p className='text-center mt-5' >If you are already registerd ? <a className='text-primary' href="/login">Login</a></p>

        </div>
    )
}

export default SignUp