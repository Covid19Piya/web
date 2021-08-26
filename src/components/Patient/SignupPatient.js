import { React, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function SignupPatient() {
    const [value, setValue] = useState()
    return (
        <div className="container" mt-5 style={{width: '50%', marginTop: '5rem'}}>
            <h2>Sign Up Patient</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group className="mb-3" as={Col} controlId="name">
                        <Form.Label>ชื่อ</Form.Label>
                        <Form.Control type="text" placeholder="ชื่อจริง" />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} controlId="surname">
                        <Form.Label>นามสกุล</Form.Label>
                        <Form.Control type="text" placeholder="นามสกุลจริง" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                    <PhoneInput
                    style={{width: 200}}
                    placeholder="Enter phone number"
                    defaultCountry="TH"
                    value={value}
                    onChange={setValue}
                    />
                </Form.Group>

                <Button variant="info" type="submit" style={{ width: '80%', position: 'relative', left: '50%', transform: 'translate(-50%)'}}>
                    Submit
                </Button>
              
      
            </Form>
            
        </div>
    )
}

export default SignupPatient
