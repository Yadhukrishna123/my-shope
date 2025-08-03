import React, { useContext, useState } from 'react'
import "../SignUp/Signup.css"
import { Button, Form } from 'react-bootstrap'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { AllProductContexts } from '../AllProductContext/AllProductContext'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { userAuthSuccess } from '../ReduxStore/userSlice'


const Login = () => {
    const navigate = useNavigate()
    const { setLoggedIn } = useContext(AllProductContexts)
    const dispatch = useDispatch()

    let [showPassword, setShowPassword] = useState(false)
    let [input, setinput] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let res = await axios.post("http://localhost:8080/api/v1/login", {
                email: input.email,
                password: input.password
            }, { withCredentials: true })
            if (res.data.success === true) {

                if (res.data.isAuthenTication === true) {

                    dispatch(userAuthSuccess({
                        user: res.data.user,
                        isAuthentication: res.data.isAuthenTication,
                        userAddress: res.data.user.addresses[0]


                    }))
                    alert(res.data.message)

                    await new Promise((back) => setTimeout(back, 2000))

                    setLoggedIn(true)

                    navigate("/")
                }
                console.log(res)
            } else if (res.data.success === true) {
                alert(res.data.message)

            }
        } catch (error) {
            alert(error.message)
        }

    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    return (
        <div className='mt-5'>
            <h2 className='text-center fw-bold '>Login</h2>


            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Form className='form-parent' onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className='fs-5'>Email:</Form.Label>
                        <Form.Control className='border-secondary rounded-0' size="lg" type="email" placeholder="Enter email" onChange={handleInput} name="email" />

                    </Form.Group>
                    <Form.Group className="mb-3 password-session" controlId="formBasicEmail">
                        <Form.Label className='fs-5'>Password:</Form.Label>
                        <Form.Control className='border-secondary rounded-0' onChange={handleInput} name="password"
                            size="lg" type={showPassword === true ? " text" : "password"} placeholder="Enter Passsword" />
                        {showPassword === true ? <IoEyeOff className='eye-icon' onClick={handleShowPassword} /> : <IoEye className='eye-icon' onClick={handleShowPassword} />}

                    </Form.Group>

                    <div className='text-center'>
                        <Button className='fw-bold' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
            <p className='text-center mt-5' >If you are not sign up ?

                <Link to="/signup">
                    <span className='text-primary' >Sign up</span>
                </Link>
            </p>

        </div>
    )
}

export default Login