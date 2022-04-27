 import React from 'react';
 import './font.css';
 import logo from './Imagen/analisis-halo-infinite_cjdd.jpg';
 import logo2 from './Imagen/halo.webp';

const Home = () => {
  return (
    
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
     <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    
  </ol>
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img class="d-block w-100" src={logo} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>HERNAN</h5>
    <p>FERNAN</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={logo2} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



  )

  
}


export default Home;