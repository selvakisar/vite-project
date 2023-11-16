import React, { useState } from 'react';
import {Container,Form,Button, NavLink} from "react-bootstrap";
import"../styles/SignUp.css";
import {Link,useNavigate} from "react-router-dom";



const Signup =()=>{
const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
})
// const navigate = useNavigate();
 
// const handleChange = () => {
//     const{name,value}=e.target
//     // setFormData({...formData, [name]:value })

// };

function handleChange(e){
    const {name,value}=e.target
    setFormData({...formData, [name]:value})
}

const handleSubmit =(e)=>{
e.preventDefault();
let data= console.log(formData)
}
    return (
        <Container>
            <h1>Registeration Form</h1>
            <Form onSubmit={handleSubmit}> 
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name'
                     value={formData.name}
                      onChange={handleChange} 
                      required/> 
                </Form.Group>
     
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
                    autoComplete='current-password'
                     name='password'
                      value={formData.password} 
                      onChange={handleChange} 
                      required/> 
                </Form.Group>
                <Button variant='primary' type='submit'>Register</Button>
                <p>Alredy have an account?<Link to="/login">Login</Link></p>
            </Form>
     
        </Container>

    )

}

export default Signup