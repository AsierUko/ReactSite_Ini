import Carousel from 'react-bootstrap/Carousel';
import Accion from "../components/Accion";

function CarouseHome() {

  return(
    <div>
      <div className="portfolio__encont bis">
        <span><strong>2323 </strong>Darwins encontrados</span>
      </div>
      <Carousel className="portfolio__carouselDes">
          <Carousel.Item interval={999999}>
            <Accion />
          </Carousel.Item>

          <Carousel.Item interval={999999}>
            <Accion />
          </Carousel.Item>

          <Carousel.Item interval={999999}>
            <Accion />
          </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouseHome;