import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <Navbar fixedTop expand="lg" bg="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Orders
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}
