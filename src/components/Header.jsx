import React from 'react';
import { NavbarBrand,Navbar, NavItem, Nav ,Collapse,NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
function Header() {
    return(
        <div>
              <Navbar color="light"container="md" light expand="md">
                    <div className="d-flex container">
                        <NavbarToggler />
                        <NavbarBrand className="mr-auto"><img src="assets/gallery.png" height="30" width="30" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='/gallery'><span className="fa fa-list fa-lg"></span> Photo Gallery</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        </div>
    );
}
export default Header;