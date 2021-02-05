import React from 'react'
import { Navbar,Nav,Form,FormControl,Button, } from 'react-bootstrap';
import styles from "./Header.module.css"
import Logo from "./logo (1).svg"
function Header() {
  return (
    <div>
      <Navbar className={styles.nav} bg="" variant="dark">
    <Navbar.Brand href="#home"><img src={Logo} alt=""/></Navbar.Brand>
    <Nav className={styles.menu}variant="dark">

      <Nav.Link href="#headphones" style={{ color: 'black' }}>Headphones</Nav.Link>
      <Nav.Link href="#speakers"style={{ color: 'black' }}>Speakers</Nav.Link>
      <Nav.Link href="#audio"style={{ color: 'black' }}>Audio Sunglasses</Nav.Link>
      <Nav.Link href="#support"style={{ color: 'black' }}>Support</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

    </div>
  )
}

export default Header
