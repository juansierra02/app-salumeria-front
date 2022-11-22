import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

function Footer() {
    return (
        <Container
            fluid
            className='footer-component bg-var-footer glass-effect pt-1 pb-2 '>
            <Container>
                <Row className='py-1 my-4'>
                    <Col
                        md='3'
                        className='footer-logo text-white'>
                        <p>
                            <img
                                src='./logo192.png'
                                width='50'
                                alt=''
                            />
                            Salumeria Cumaná © 2022
                        </p>
                    </Col>
                    <Col
                        md='3'
                        className='text-white'>
                        Lunes a Sábados de 10 a 20 hs.
                        Domingos de 10 a 16 hs.

                        Entregas a domicilio en el día.
                        Se incluyen pedidos de hasta una hora antes del cierre.
                    </Col>
                    <Col
                        md='3'
                        className='footer-social'>
                        <p>
                            <a
                                className='text-white text-decoration-none'
                                href='/'>
                                <span className='bi-instagram'></span>
                            </a>
                            <a
                                className='text-white text-decoration-none me-3 ms-3'
                                href='/'>
                                <span className='bi-facebook'></span>
                            </a>
                            <a
                                className='text-white text-decoration-none'
                                href='/'>
                                <span className='bi-twitter'></span>
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
