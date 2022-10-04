import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useDispatch } from 'react-redux'

import Error from '../components/alerts/error/Error'

import { FaFacebookF, FaGoogle, FaTwitter, FaRegEnvelope, FaLock } from 'react-icons/fa'

import '../pages/styles/login/login.css'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup, currentUser } = useAuth()

    const dispatch = useDispatch()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords are not the same')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create your account')
        }
        setLoading(false)
    }

    useEffect(() => {
        if (currentUser) {
            dispatch({ type: 'SIGNUP_CLOSE' })
        }
    }, [currentUser])

    const loginClicked = () => {
        dispatch({ type: 'SIGNUP_CLOSE' })
        dispatch({ type: 'LOGIN_OPEN' })

    }

    const closeSignup = () => {
        dispatch({ type: 'SIGNUP_CLOSE' })
    }

    return (
        <div className="loginBackground" onClick={closeSignup}>
            <div className='flex flex-col items-center justify-center min-h-screen py-2 text-center'>
                <div className="bg-white flex shadow-2xl rounded-2xl w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                    <div className=" w-full p-5 items-center">
                        <div className="py-10 ">

                            <h2 className='text-3xl font-bold'>Sign Up</h2>
                            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
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
                                <div className="bg-gray-100 w-96 p-2 flex items-center mb-3">
                                    <FaLock className='text-gray-400 m-2' />
                                    <input type="password" name='confirm-password' placeholder='Confirm Password' className='bg-gray-100 flex-1 outline-none' ref={confirmPasswordRef} />
                                </div>
                                <button className='btn text-white bg-green-500 border-none w-64 mt-3 mb-5' onClick={submitHandler} disabled={loading}>Sign Up</button>
                                <div className="flex w-64 mb-5">
                                    <p className='text-gray-400' >Alreday have an account? <span onClick={loginClicked} className='text-green-500 cursor-pointer'>Login</span> </p>
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

{/* <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Sign Up</h2>
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
                                <Form.Group className='mb-4' id='confirm-password'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type='password' ref={confirmPasswordRef} required />
                                </Form.Group>
                                <Button className='w-100' type='submit' disabled={loading}>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Already have an account? <Link to='/login'>Log In</Link>
                    </div>
                </div>
            </div> */}

export default Signup