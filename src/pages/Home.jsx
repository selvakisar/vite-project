import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/home.css";
const Home=()=>{
    return (
     <Container>
<h1>Welcome to our Website</h1>
<p>we are here to serve you as your need </p>

<Button variant='primary' type='submit'>Get started</Button>
     </Container>
     )
}

export default Home;