import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from '../context/AuthContext'


import Error from '../components/alerts/error/Error'

import { FaFacebookF, FaGoogle, FaTwitter, FaRegEnvelope, FaLock } from 'react-icons/fa'

import '../pages/styles/login/login.css'
import { useEffect } from 'react'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Unable to log in.')
        }
        setLoading(false)
    }

    useEffect(() => {
        if (currentUser) {
            dispatch({ type: 'LOGIN_CLOSE' })
        }
    }, [currentUser])

    const signupClicked = () => {
        dispatch({ type: 'LOGIN_CLOSE' })
        dispatch({ type: 'SIGNUP_OPEN' })
    }

    const closeLogin = () => {
        dispatch({ type: 'LOGIN_CLOSE' })
    }

    return (

        <div className="loginBackground flex items-center w-full" onClick={closeLogin}>
            <div className='flex flex-col items-center justify-center min-h-screen py-2 text-center'>
                <div className="bg-white flex shadow-2xl rounded-2xl w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                    <div className=" w-full p-5 items-center">
                        <div className="py-10 ">

                            <h2 className='text-3xl font-bold'>Log In</h2>
                            <div className="w-96 mx-auto mb-5 mt-5">
                                {error && <Error error={error} className='' />}
                            </div>


                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 p-2 flex items-center mb-3 w-96">
                                    <FaRegEnvelope className='text-gray-400 m-2' />
                                    <input type="email" name='email' placeholder='Email' className='bg-gray-100 flex-1 text-sm outline-none' ref={emailRef} />
                                </div>
                                <div className="bg-gray-100 w-96 p-2 flex items-center mb-3">
                                    <FaLock className='text-gray-400 m-2' />
                                    <input type="password" name='password' placeholder='Password' className='bg-gray-100 flex-1 outline-none' ref={passwordRef} />
                                </div>

                                <button className='btn text-white bg-green-500 border-none w-64 mt-3 mb-5' onClick={submitHandler} disabled={loading}>Login</button>
                                <div className="flex w-64 mb-5">
                                    <p className='text-gray-400'>Need an account? <span to='/signup' className='text-green-500 cursor-pointer' onClick={signupClicked}>Sign Up</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex items-center justify-start'>
                    <h2 className='text-3xl font-bold'>Or</h2>
                </div>
                <div className=' h-full w-2/5'>
                    <h2 className='text-3xl font-bold'>Sign Up with:</h2>
                    <div className="flex justify-center my-2">
                        <a href="#" className='border-2 border-gray rounded-full p-3 mx-1'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='border-2 border-gray rounded-full p-3 mx-1'>
                            <FaGoogle />
                        </a>
                        <a href="#" className='border-2 border-gray rounded-full p-3 mx-1'>
                            <FaTwitter />
                        </a>
                    </div>
                </div> */}
                </div>
            </div>
        </div>

    )
}

export default Login

{/* <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Login</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit={submitHandler}>
                                <Form.Group className='mb-4' id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' ref={emailRef} required />
                                </Form.Group>
                                <Form.Group className='mb-4' id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' ref={passwordRef} required />
                                </Form.Group>
                                <Button className='w-100' type='submit' disabled={loading}>Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Need an account? <Link to='/signup'>Sign Up</Link>
                    </div>
                </div>
            </Container> */}