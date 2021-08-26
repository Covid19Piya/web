import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <div style={{width: '50%', position: 'absolute', left: '50%', top: '29%',
        transform: 'translate(-50%, -50%)'}}>
            <h2>Log In</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ที่อยู่อีเมล</Form.Label>
                    <Form.Control name="email" type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="info" type="submit" style={{ width: '80%', position: 'relative', left: '50%', transform: 'translate(-50%)'}}>
                    log In
                </Button>
                <br/>
                <br/>
      
            </Form>
            
        </div>
    )
}

export default Login;