import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
/* import { AnimationOnScroll } from 'react-animation-on-scroll'; */

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {
        items.map((menuItem) => {
          const { id, titulo, img, desc, link } = menuItem;

          return (
            
              <Card key={id} className="menu-item">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title className='titulo-h5'>{titulo}</Card.Title>
                  <Card.Text className='texto-testimonio'>
                    {desc}
                  </Card.Text>
                  <Button className='link-pagina' variant="outline-dark" href={link} target="_blank">Ver pagina</Button>
                </Card.Body>
              </Card>
            
          )

        })
      };
    </div>
  )
}

export default Menu;