import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../requests'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut();
        });
    };

    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/welcome'>Auction</Navbar.Brand>
                
                <Nav.Link href='/auctions'>Auction Index</Nav.Link>|
                

                {currentUser ? (
                    <>
                        <Nav.Link href='/new_auction'>Auction New</Nav.Link>|
                        <span>Welcome, {currentUser.first_name}</span>|
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <Nav.Link href='/sign_in'>Sign In</Nav.Link>|
                        <Nav.Link href='/sign_up'>Sign Up</Nav.Link>
                    </>
                )}
            </Container>
        </Navbar>
    );
};

export default NavBar;
