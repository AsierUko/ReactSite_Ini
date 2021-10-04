import React, { useEffect, useState } from "react";
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Bwe from '../resources/BWE.png'
import NTI from '../resources/NTI.png'
import BWEORANGE from '../resources/BWE-ORANGE.png'

function getWindowPantalla() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowPantalla() {
  const [windowPantalla, setWindowPantalla] = useState(
    getWindowPantalla()
  );

  useEffect(() => {
    function handleResize() {
      setWindowPantalla(getWindowPantalla());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowPantalla;
}



const Accion = () => {
  const { width } = useWindowPantalla();

  if (width > 1440) {
    return(
      <div className="portfolio__ItemBlock">
      <Card style={{ width: '18rem' }}>
        <Card.Header>
            <div className="portfolio__carouselMov__header">
              <div>
                  <p className="empresa mora">BWE</p>
              </div>
              <div>
                  <span className="text">1818.0</span>
                  <span className="btnTrade">Trade</span>
              </div>
            </div>
        </Card.Header>
        <Card.Img variant="top" src={Bwe} />
        <Card.Body>
          <Card.Title>
            <span className="folder"></span>
            <span className="num">4</span>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span>CAPITAL INVERTIDO</span>
            <span>$ 1999.000</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>RETORNO</span>
            <span className="clororExito">3.0 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>DRAWDOWN</span>
            <span className="clororAlert">37 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>SCORE</span>
            <span>78.2</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>
            <div className="portfolio__carouselMov__header">
              <div>
                  <p className="empresa nti">NTI</p>
              </div>
              <div>
                  <span className="text">1818.0</span>
                  <span className="btnTrade">Trade</span>
              </div>
            </div>
        </Card.Header>
        <Card.Img variant="top" src={NTI} />
        <Card.Body>
          <Card.Title>
            <span className="folder"></span>
            <span className="num">4</span>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span>CAPITAL INVERTIDO</span>
            <span>$ 1999.000</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>RETORNO</span>
            <span className="clororExito">3.0 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>DRAWDOWN</span>
            <span className="clororAlert">37 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>SCORE</span>
            <span>78.2</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>
            <div className="portfolio__carouselMov__header">
              <div>
                  <p className="empresa orange">BWE</p>
              </div>
              <div>
                  <span className="text">1818.0</span>
                  <span className="btnTrade">Trade</span>
              </div>
            </div>
        </Card.Header>
        <Card.Img variant="top" src={BWEORANGE} />
        <Card.Body>
          <Card.Title>
            <span className="folder"></span>
            <span className="num">4</span>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span>CAPITAL INVERTIDO</span>
            <span>$ 1999.000</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>RETORNO</span>
            <span className="clororExito">3.0 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>DRAWDOWN</span>
            <span className="clororAlert">37 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>SCORE</span>
            <span>78.2</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>
            <div className="portfolio__carouselMov__header">
              <div>
                  <p className="empresa">BWE</p>
              </div>
              <div>
                  <span className="text">1818.0</span>
                  <span className="btnTrade">Trade</span>
              </div>
            </div>
        </Card.Header>
        <Card.Img variant="top" src={Bwe}>
        </Card.Img>
          <Spinner animation="border" variant="primary" />
        <Card.Body>
          <Card.Title>
            <span className="folder"></span>
            <span className="num">4</span>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={4} /></span>
              <span><Placeholder xs={9} /></span>
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={6} /></span>
              <span><Placeholder xs={12} /></span>
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={2} /></span>
              <span><Placeholder xs={12} /></span>
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={8} /></span>
              <span><Placeholder xs={12} /></span>
            </Placeholder>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      </div>
    );
  } else if (width > 1024) {
    return(
      <div className="portfolio__ItemBlock">
        <Card style={{ width: '18rem' }}>
          <Card.Header>
              <div className="portfolio__carouselMov__header">
                <div>
                    <p className="empresa">BWE</p>
                </div>
                <div>
                    <span className="text">1818.0</span>
                    <span className="btnTrade">Trade</span>
                </div>
              </div>
          </Card.Header>
          <Card.Img variant="top" src={Bwe} />
          <Card.Body>
            <Card.Title>
              <span className="folder"></span>
              <span className="num">4</span>
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <span>CAPITAL INVERTIDO</span>
              <span>$ 1999.000</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>RETORNO</span>
              <span className="clororExito">3.0 %</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>DRAWDOWN</span>
              <span className="clororAlert">37 %</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>SCORE</span>
              <span>78.2</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Header>
              <div className="portfolio__carouselMov__header">
                <div>
                    <p className="empresa nti">NTI</p>
                </div>
                <div>
                    <span className="text">1818.0</span>
                    <span className="btnTrade">Trade</span>
                </div>
              </div>
          </Card.Header>
          <Card.Img variant="top" src={NTI} />
          <Card.Body>
            <Card.Title>
              <span className="folder"></span>
              <span className="num">4</span>
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <span>CAPITAL INVERTIDO</span>
              <span>$ 1999.000</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>RETORNO</span>
              <span className="clororExito">3.0 %</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>DRAWDOWN</span>
              <span className="clororAlert">37 %</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>SCORE</span>
              <span>78.2</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Header>
              <div className="portfolio__carouselMov__header">
                <div>
                    <p className="empresa">BWE</p>
                </div>
                <div>
                    <span className="text">1818.0</span>
                    <span className="btnTrade">Trade</span>
                </div>
              </div>
          </Card.Header>
          <Card.Img variant="top" src={Bwe}>
          </Card.Img>
            <Spinner animation="border" variant="primary" />
          <Card.Body>
            <Card.Title>
              <span className="folder"></span>
              <span className="num">4</span>
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Placeholder as={Card.Text} animation="glow">
                <span><Placeholder xs={4} /></span>
                <span><Placeholder xs={9} /></span>
              </Placeholder>
            </ListGroup.Item>
            <ListGroup.Item>
              <Placeholder as={Card.Text} animation="glow">
                <span><Placeholder xs={6} /></span>
                <span><Placeholder xs={12} /></span>
              </Placeholder>
            </ListGroup.Item>
            <ListGroup.Item>
              <Placeholder as={Card.Text} animation="glow">
                <span><Placeholder xs={2} /></span>
                <span><Placeholder xs={12} /></span>
              </Placeholder>
            </ListGroup.Item>
            <ListGroup.Item>
              <Placeholder as={Card.Text} animation="glow">
                <span><Placeholder xs={8} /></span>
                <span><Placeholder xs={12} /></span>
              </Placeholder>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
  return (
    <div className="portfolio__ItemBlock">
      <Card style={{ width: '18rem' }}>
        <Card.Header>
            <div className="portfolio__carouselMov__header">
              <div>
                  <p className="empresa nti">NTI</p>
              </div>
              <div>
                  <span className="text">1818.0</span>
                  <span className="btnTrade">Trade</span>
              </div>
            </div>
        </Card.Header>
        <Card.Img variant="top" src={NTI} />
        <Card.Body>
          <Card.Title>
            <span className="folder"></span>
            <span className="num">4</span>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span>CAPITAL INVERTIDO</span>
            <span>$ 1999.000</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>RETORNO</span>
            <span className="clororExito">3.0 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>DRAWDOWN</span>
            <span className="clororAlert">37 %</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>SCORE</span>
            <span>78.2</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>
            <div className="portfolio__carouselMov__header">
              <div>
                  <p className="empresa">BWE</p>
              </div>
              <div>
                  <span className="text">1818.0</span>
                  <span className="btnTrade">Trade</span>
              </div>
            </div>
        </Card.Header>
        <Card.Img variant="top" src={Bwe}>
        </Card.Img>
          <Spinner animation="border" variant="primary" />
        <Card.Body>
          <Card.Title>
            <span className="folder"></span>
            <span className="num">4</span>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={4} /></span>
              <span><Placeholder xs={9} /></span>
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={6} /></span>
              <span><Placeholder xs={12} /></span>
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={2} /></span>
              <span><Placeholder xs={12} /></span>
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder as={Card.Text} animation="glow">
              <span><Placeholder xs={8} /></span>
              <span><Placeholder xs={12} /></span>
            </Placeholder>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );

};

export default Accion

