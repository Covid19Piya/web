import React from 'react'
//kapu
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import SignupVolunteer from './Volunteer/SignupVolunteer'
import SignupPatient from './Patient/SignupPatient'
import Login from './Login'
import Request from './Request'

const Home = () => (
  <div style={{marginTop: '5rem'}}>
    <h2>Home Kampoo</h2>
  </div>
)

const News = () => (
  <div style={{marginTop: '5rem'}}>
    <h2>News</h2>
  </div>
)

const Status = () => (
  <div style={{marginTop: '5rem'}}>
    <h2>พพ</h2>
  </div>
)


function NavbarMain() {
    return (
     <div>
      <Navbar  fixed='top' collapseOnSelect expand="lg" bg="light" variant="light" style={{boxShadow: "0px 1px 5px #9E9E9E"}}>
        <Container>
        <Navbar.Brand href="/">One For All</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="me-auto"></div>
          <Nav>
            
            <Nav.Link href="/request">ขอความช่วยเหลือ</Nav.Link>
            <Nav.Link href="/login">เข้าสู่ระบบ</Nav.Link>
            
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                ลงทะเบียนฟรี
              </Dropdown.Toggle>
              <Dropdown.Menu variant="info">
                <Dropdown.Item href="/signup-volunteer" variant="info">เพื่อเป็นอาสาสมัคร</Dropdown.Item>
                <Dropdown.Item href="/signup-patient" variant="info">เพื่อขอความช่วยเหลือ</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Switch>

        <Route exact path="/"><Home /></Route>
        <Route path="/news"><News /></Route>
        <Route path="/status"><Status /></Route>

        <Route path="/request"><Request/></Route>
        
        <Route path="/signup-patient"><SignupPatient /></Route>
        <Route path="/signup-volunteer"><SignupVolunteer /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/:id">
          <p>ERROR 404</p>
        </Route>
      </Switch>
     </div>
    );
}

export default NavbarMain;

