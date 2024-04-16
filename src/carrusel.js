const Carrusel = ( ) => {
    return <carrusel>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/035/095/662/small_2x/ai-generated-copy-space-tropical-beach-landscape-ai-generative-photo.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/474x/17/f0/13/17f013312dfa35c8e242602bb7835ecc.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<center><p> Ven a disfrutar del paraíso tropical en las playas de Cancún, México, con su suave arena blanca y aguas turquesas 
            cristalinas. Cancún es el destino perfecto para relajarse y disfrutar del sol. Sumérgete en emocionantes actividades 
            acuáticas como snorkel, buceo y navegación en catamarán o simplemente recuéstate en una cómoda hamaca y deja que el
             mundo pase a tu alrededor con una vibrante vida nocturna, deliciosa gastronomía.</p></center>
           </carrusel>;
}
export default Carrusel;