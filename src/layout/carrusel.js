import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);
const carrusel = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate("/detalle/" + slug);
  }

  return <carrusel>
      <Carousel>
          {
              playas.map(it => {
                  return (<Carousel.Item onClick={(e) => {
                      e.preventDefault(); handleClick(it.slug)
                  }}>
                      <img className='w-100 dark-image' src={it.picture}></img>
                      <Carousel.Caption>
                          <h2>{it.name}</h2>
                          <p>{it.description}</p>
                          <button className="btn btn-primary btn-sm" >Ver detalle</button>
                      </Carousel.Caption>
                  </Carousel.Item>);
              })
          }
      </Carousel>
  </carrusel >;
}

export default carrusel;

const playas = [
  {
      name: "Playa Las Delicias",
      slug: 'playa-1',
      description: "Una playa muy linda y relajante para poder pasar unas vacaciones increibles",
      picture: 'https://static.vecteezy.com/system/resources/thumbnails/035/095/662/small_2x/ai-generated-copy-space-tropical-beach-landscape-ai-generative-photo.jpg'
  },
  {
      name: "Playa El Olvido",
      slug: 'playa-2',
      description: "Una playa donde hay hoteles que puedes quedarte y pasar todas unas vaciones muy linda y relajante en familia o con las perosans que deseas",
      picture: 'https://i.pinimg.com/474x/17/f0/13/17f013312dfa35c8e242602bb7835ecc.jpg'
  },
  {
      name: "Playa El Caribe",
      slug: 'playa-3',
      description: "Una playa muy linda y relajante para poder pasar unas vacaciones increibles y poder recolectar piedra muy bonitas e ibncluso poder encontrar conchas de diferente tipo",
      picture: 'https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg'
  },
];


