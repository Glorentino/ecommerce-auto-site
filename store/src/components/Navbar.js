import {Button, Container, Navbar, Modal, Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            
            <Navbar expand="sm" bg="dark" variant="dark">
                <Navbar.Brand href="/">Contuso</Navbar.Brand>
                <Navbar.Brand href="/" >Home</Navbar.Brand>
                <Navbar.Brand href="/market">Market</Navbar.Brand>
                <Navbar.Brand href="/about">About</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>
                <NavDropdown as="button" title="Account" id="basic-navbar-nav"variant="pills">
              <NavDropdown.ItemText>User</NavDropdown.ItemText>
              <NavDropdown.Item  href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
              <NavDropdown.Item as="button" > Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Navbar>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>
            

        </>
    )
}

export default NavbarComponent;