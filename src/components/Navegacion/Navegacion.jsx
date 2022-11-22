import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

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
                        alt=''
                    />
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Inicio</Nav.Link>
                    <Nav.Link href='/CrearPedido'>Crear Pedido</Nav.Link>
                    <Link to='/CrearPedido' className='text-reset'>Crear Pedido</Link>
                    <Nav.Link href='/ListarPedido'>Admin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navegacion;
