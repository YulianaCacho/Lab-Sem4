import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
   
    <Carousel className='text-center'>
      <Carousel.Item>
      <br></br>
      <img
                src="https://static.vecteezy.com/system/resources/thumbnails/035/095/662/small_2x/ai-generated-copy-space-tropical-beach-landscape-ai-generative-photo.jpg" 
                style={{ width: '650px', height: '650px' }}
                alt="Playa"
            />

        
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br></br>
      <img
               src="https://i.pinimg.com/474x/17/f0/13/17f013312dfa35c8e242602bb7835ecc.jpg" 
                style={{ width: '650px', height: '650px' }}
                alt="Beach"
            />

        <Carousel.Caption>
          <h3></h3>
          <p></p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br></br>
      <img
                src="https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg" 
                style={{ width: '650px', height: '650px' }}
                alt="Relax"
            />

        <Carousel.Caption>
          <h3></h3>
          
          <p></p>
     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;