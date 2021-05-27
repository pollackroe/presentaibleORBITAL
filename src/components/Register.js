import { useAuth } from '../contexts/AuthContext'
import { useRef, useState } from 'react'
import {Button, Form, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'




const Register = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
                return setError('Passwords do not match')
            }

            try{
                setError('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
                history.push('/loggedin')
            } catch {
                setError('Failed to create an account')
            }

     
    }

    return (
        
        <div className='containerForSignupLogin' style={{textAlign: 'center', maxWidth: 350}}>
            <h1 className='header'>Sign Up</h1>
            {error && <Alert variant='danger'>{error}</Alert>}
            <div style={{textAlign:'center', marginTop:50}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <div>Email </div>
                    <Form.Control type='email' ref={emailRef} required/>
                </Form.Group>
                <Form.Group id='password'>
                    <div>Password </div>
                    <Form.Control type='password' ref={passwordRef}/>
                </Form.Group>
                <Form.Group id='password-confirm'>
                    <div>Password Confirmation </div>
                    <Form.Control type='password' ref={passwordConfirmRef}/>
                </Form.Group>
                
                <Button disabled={loading} className='btn' type='submit'>Submit</Button>
            </Form>
            </div>
           
            </div>
       
    )
}

export default Register
