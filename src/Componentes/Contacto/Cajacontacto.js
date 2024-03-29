import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Cajacontacto = ({ id, infocontacto, icono, alt }) => {
  return (
    <>
      <Col lg={4} md={4} sm={12}>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Card className='p-4 mt-3 d-flex text-center caja-contacto' key={id}>
            <div className='icono'>
              {icono}
            </div>
            <Card.Body>
              <Card.Title className='text-center titulo-h3 informacion-contacto'>{infocontacto}</Card.Title>
            </Card.Body>
          </Card>
        </AnimationOnScroll>
      </Col>
    </>
  )
}
