import React from 'react'
import{Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container class="p-3 mb-2 bg-warning text-dark" >
            <Row >
                <Col className='text-center py-1'>
                    Copyright &copy; Finix Insight Ltd
                </Col>
                <Col className='text-center py-1'>
                <p>Privacy Policy</p>
                </Col>
                <Col className='text-center py-1'>
               <p> Cancellation Policy</p>
                </Col>
                <Col className='text-center py-1'>
                <p>T's and C's</p>
                </Col>
                <Col className='text-center py-1'>
                  <p>Contact Us</p>
                </Col>
                
            </Row>
        </Container>
    </footer>
  )
}

export default Footer