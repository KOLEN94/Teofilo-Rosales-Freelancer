import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from '../../imagenes/Teofilo.png'
import './Sobre-mi-estilos.css'

function Sobremi() {
  const Item = [{
    id: 1,
    contenido01: "Diseñador web con 3 años de experiencia, fanático del diseño web y experto en WordPress+Woocommerce con Elementor y Gutenberg además de autodidacta. Conozco esta herramienta perfectamente y soy capaz de conseguir con ella lo que sea, siempre uniendo diseño moderno, tecnología y estrategia, para crear webs profesionales, intuitivas, responsive y de estética cuidada.",
    contenido02: "Diseño y desarrollo webs a medida, deacuerdo con los intereses y necesidades concretas de cada cliente, y el resultado es una página con atractiva, de carga rápida y que cumple los objetivos propuestos.",
  }];
  return (
    <>
      <Container id='sobre-mi' className='bloque-sobre-mi'>
        <Row className='modo-escritorio'>
          <Col className='d-flex justify-content-center align-items-center'>
            <img src={imagen} alt='teofilo' className='center-block imagen-teo fadeInLeftfoto'></img>
          </Col>
          <Col className='align-items-center'>
            <h2 className='titulo-h2 text-center fadeInDownteo-sobremi' >Sobre Mi</h2>
            {Item.map((item) => (
              <div key={item.id}>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido01}</p>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido02}</p>
              </div>
            ))}
          </Col>
        </Row>
        <Row className='modo-mobil'>
          <Col className='align-items-center'>
            <h2 className='titulo-h2 text-center fadeInDownteo-sobremi' >Sobre Mi</h2>
            {Item.map((item) => (
              <div key={item.id}>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido01}</p>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido02}</p>
              </div>
            ))}
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <img src={imagen} alt='teofilo' className='center-block fadeInUpimagen'></img>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default Sobremi