import { React, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function SignupVolunteer() {
    const [value, setValue] = useState()
    return (
        <div className="container" mt-5 style={{width: '50%', marginTop: '5rem'}}>
            <h2>Sign Up Volunteer</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                    <Form.Label>ชื่อ</Form.Label>
                    <Form.Control type="text" placeholder="ชื่อจริง" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="surname">
                    <Form.Label>นามสกุล</Form.Label>
                    <Form.Control type="text" placeholder="นามสกุลจริง" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ที่อยู่อีเมล</Form.Label>
                    <Form.Control name="email" type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                
                <Row className="mb-3">
                    <div className="col-md-4" as={Col}>
                        <Form.Group controlId="dob">
                            <Form.Label>วัน/เดือน/ปี เกิด</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3" as={Col} controlId="gender">
                    <Form.Label>เพศ</Form.Label>
                    <Form.Select>
                        <option>ชาย</option>
                        <option>หญิง</option>
                        <option>อื่น ๆ</option>
                    </Form.Select>
                    </Form.Group>
                </Row>
                    
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

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>อัพโหลดรูปถ่ายตัวเองขณะถือบัตรประจำตัวประชาชน</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Button variant="info" type="submit" style={{ width: '80%', position: 'relative', left: '50%', transform: 'translate(-50%)'}}>
                    Submit
                </Button>
                <br/>
                <br/>
      
            </Form>
        </div>
    )
}

export default SignupVolunteer
