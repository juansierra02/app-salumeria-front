import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navegacion = () => {
    return (
        <Navbar
            bg='dark'
            variant='dark'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src='./logo192.png'
                        width='50'
                        alt='Logo'
                    />
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Link to='/' className='nav-link'>Inicio</Link>
                    <Link to='/CrearPedido' className='nav-link'>Crear Pedido</Link>
                    <Link to='/ListarPedido' className='nav-link'>Admin</Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navegacion;
