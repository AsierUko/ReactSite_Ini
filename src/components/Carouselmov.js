import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Bwe from '../resources/BWE.png'

function Carouselmov() {
    return (
      <div className="portfolio__carouselMov">
        <div className="portfolio__encont">
        <span><strong>2323 </strong>Darwins encontrados</span>
        </div>
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

      </div>
    );
  }
  
export default Carouselmov;