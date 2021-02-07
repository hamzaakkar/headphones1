import React from 'react'
import { Navbar,Nav,Form} from 'react-bootstrap';
import styles from "./Header.module.css"
import Logo from "./logo (1).svg"
import Vector from "./Vector.svg"
import Group from "./Group.svg"
import karoussa from "./karoussa.svg"
import union from "./Union.svg"
import khtouta from "./khtouta.svg"
import Bitmap from "./Bitmap.svg"

function Header() {
  return (
    <div>
      <Navbar.Brand href="#union" className={styles.union}><img src={union} alt=""/></Navbar.Brand>
      
      <Navbar className={styles.nav} bg="" variant="dark">
    <Navbar.Brand href="#home"><img src={Logo} alt=""/></Navbar.Brand>
    
    <Nav className={styles.menu}variant="dark">

      <Nav.Link href="#headphones" className={styles.headphones}>Headphones</Nav.Link>
      <Nav.Link href="#speakers" className={styles.speakers}>Speakers</Nav.Link>
      <Nav.Link href="#audio"className={styles.audio}>Audio Sunglasses</Nav.Link>
      <Nav.Link href="#support"className={styles.support}>Support</Nav.Link>
      

      
    </Nav>

    <Navbar.Brand href="#search" className={styles.Vector}><img src={Vector} alt=""/></Navbar.Brand>
    <Navbar.Brand href="#Group" className={styles.Group}><img src={Group} alt=""/></Navbar.Brand>
    <Navbar.Brand href="#karoussa" className={styles.karoussa}><img src={karoussa} alt=""/></Navbar.Brand>
    <Navbar.Brand href="#khtouta" className={styles.khtouta}><img src={khtouta} alt=""/></Navbar.Brand>
    <Navbar.Brand href="#Bitmap" className={styles.Bitmap}><img src={Bitmap} alt=""/></Navbar.Brand>

    



    
    <Form inline>
   
    </Form>
  </Navbar>
  


    </div>
  )
}

export default Header
