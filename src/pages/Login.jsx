import React, { useState } from 'react';
import {Container,Form,Button, NavLink} from "react-bootstrap";
import"../styles/SignUp.css";
import {Link,useNavigate} from "react-router-dom";

const Login =()=>{
const [formData,setFormData]=useState({
    email:"",
    password:"", 
})

function handleChange(e){
    const {name,value}=e.target
    setFormData({...formData, [name]:value})
}

const handleSubmit =(e)=>{
e.preventDefault();
console.log(formData)
}

 const navigate =useNavigate()


    return (
        <Container>
            <h1>Login Form</h1>
            <Form onSubmit={handleSubmit}>
             
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email'
                    autoComplete='username'
                     value={formData.email} 
                     onChange={handleChange} 
                     required/> 
                </Form.Group>
       
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control type='password'
                     name='password'
                     autoComplete='current-password'
                      value={formData.password} 
                      onChange={handleChange} 
                      required/> 
                </Form.Group>
                <Button variant='primary' type='submit'>Login</Button>
                <p> Dont have an account?<Link to="/">Sign Up</Link></p>
            </Form>

        </Container>
    )

}

export default Login