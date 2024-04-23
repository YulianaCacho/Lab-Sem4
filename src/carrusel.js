import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://concepto.de/wp-content/uploads/2018/09/paginahttps://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg-web1-e1537371844166.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/035/095/662/small_2x/ai-generated-copy-space-tropical-beach-landscape-ai-generative-photo.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/474x/17/f0/13/17f013312dfa35c8e242602bb7835ecc.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;