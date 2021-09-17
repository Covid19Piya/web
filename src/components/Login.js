import React,{ useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import auth from '../firebase';

const Login = ({ setSession }) => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message
      });
    }
  };
  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage
      });
    }
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };
    return (
        <div style={{width: '50%', position: 'absolute', left: '50%', top: '29%',
        transform: 'translate(-50%, -50%)'}}>
            <h2>Log In</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ที่อยู่อีเมล</Form.Label>
                    <Form.Control name="email" type="email" placeholder="name@example.com" onChange={handleUsername}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={handlePassword}/>
                </Form.Group>
                
                <Button variant="info" type="submit" onClick={handleLogin} style={{ width: '80%', position: 'relative', left: '50%', transform: 'translate(-50%)'}}>
                    Log in
                </Button>

                <Button variant="info" type="submit" onClick={handleRegister} style={{ width: '80%', position: 'relative', left: '50%', transform: 'translate(-50%)'}}>
                    Register
                </Button>
                <br/>
                <br/>
      
            </Form>
        </div>
    )
}

export default Login;