import React,{useRef} from 'react';
import {Button, Container, Form} from "react-bootstrap";


function Login(props) {
    const nameRef = useRef()

    return (
        <Container
            className='align-items-center justify-content-center d-flex flex-column'
            style={{
                height:'100vh',
            }}
        >
            <h1
            style={{
                color:'white',
            }}
            >
                LOGIN
            </h1>
            <Form
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}
            >
                <Form.Group
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                    }}
                >
                    <Form.Label
                        style={{
                            color:'white',
                        }}
                    >
                        Enter your Login Credintials
                    </Form.Label>
                    <Form.Control type='text' ref={nameRef} required placeholder='Name' style={{width:'200%'}}/>
                </Form.Group>
                <Form.Group
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        marginTop:10,
                    }}
                >
                    <Form.Control type='text' ref={nameRef} required placeholder='Password' style={{width:'200%'}}/>
                </Form.Group>
                <Button type='submit' variant='secondary' style={{marginTop:10, width:100}}> Login </Button>
                <Button variant='secondary' style={{marginTop:10, width:100}}> Register </Button>
            </Form>
        </Container>
    );
}

export default Login;
