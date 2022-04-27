 import React from 'react';
 import './font.css';
 import logo from './Imagen/analisis-halo-infinite_cjdd.jpg';
 import logo2 from './Imagen/halo.webp';

const Home = () => {
  return (
    
    <>
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

    {/*<!--========================================================== -->
                        <!-- INTRODUCCION DE SERVICIOS-->
  <!--========================================================== -->*/}

<section class="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto" id="intro">
    <h1 class="p-3 fs-2 border-top border-3">Una agencia única para todas tus necesidades de <span class="text-primary">Marketing Digital</span></h1>
     <p class="p-3  fs-4">
         <span class="text-primary">ExpertD.</span> es la agencia donde te ayudamos establecer tu presencia online. SEO, paginas WEB, tiendas virtuales, redes sociales        
     </p>   
    </section>

    {/* <!--========================================================== -->
                        <!-- TIPOS DE SERVICIOS-->
    <!--========================================================== --> */}

<section class="w-100">
    <div class="row w-75 mx-auto" id="servicios-fila-1">       
        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
            <img src={require('./Imagen/desarrollo.png').default} alt="desarrollo"   width="180" height="160"/>

            <div>
                <h3 class="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
                <p class="px-4">Desarrollo de aplicaciones WEB, moviles y ecommerce</p>
            </div>

        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
            <img src={require('./Imagen/concepto.png').default} alt="concepto" width="180" height="160"/>

            <div>
                <h3 class="fs-5 mt-4 px-4 pb-1 icono-wrap">Branding</h3>
                <p class="px-4">Diseño, Conceptualización e Implementación de productos digitales</p>
            </div>
        </div>   
    </div>
    
    <div class="row w-75 mx-auto mb-5" id="servicios-fila-2">       
        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
            <img src={require('./Imagen/comunicaciones.png').default} alt="comunicaciones" width="180" height="160"/>

            <div>
                <h3 class="fs-5 mt-4 px-4 pb-1">Comunicaciones</h3>
                <p class="px-4">Desarrollo  del plan de comunicaciones para sus clientes.</p>
            </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
            <img src={require('./Imagen/seo.png').default} alt="seo" width="180" height="160" />

            <div>
                <h3 class="fs-5 mt-4 px-4 pb-1">SEO</h3>
                <p class="px-4">Analizamos la eficiencia y optimizamos los sitios WEB</p>
            </div>
        </div>   
    </div>
</section>

{/*<!--========================================================== -->
                        <!-- SECCION ACERCA DE NOSOTROS-->
<!--========================================================== -->*/}

<section>
    <div class="container w-50 m-auto text-center" id="equipo">
        <h1 class="mb-5 fs-2">Equipo pequeño con <span class="text-primary">resultados Grandes</span>.</h1>
        <p class="fs-4 ">Siempre buscamos las personas adecuadas para que trabajen con nosotros. Si te sientes listo para este reto, te esperamos para que te unas a nosotros.</p>
    </div>

    <div class="mt-5 text-center">
        <img id="img-equipo" src="./img/equipo.jpg" alt="equipo"/>
    </div>

   

</section>

{/*<!--========================================================== -->
                        <!-- SECCION CONTACTOS-->
<!--========================================================== -->*/}

<section id="seccion-contacto" class="border-bottom border-secondary border-2 mt-5">
  <div id="bg-contactos">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1b2a4e" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
  </div>
  
  {/*<!--========================================================== -->
                      <!-- CONTENEDOR DEL FORMULARIO -->
<!--========================================================== -->*/}

  <div class="container  border-top border-primary " style={{maxWidth: "500px"}} id="contenedor-formulario">
      <div class="text-center mb-4" id="titulo-formulario">
        <div><img src={require('./Imagen/contact.webp').default} alt="" class="img-fluid ps-5"/></div>
        <h2>Contactanos</h2>
        <p class="fs-5">Estamos aqui para hacer realidad de tus proyectos</p>
      </div>

     

      <form   method="POST" data-netlify="true" action="#">     
            <div class= "mb-3">           
              <input type="email" class="form-control" id="email" name="email" placeholder="nombre@ejemplo.com"/>
            </div>
 
          
            <div class="mb-3">            
              <input type="input" class="form-control" id="name" name="name" placeholder="John Doe"/>
            </div>
      

            <div class="mb-3">
              <input type="tel" class="form-control" name="phone" id="phone" placeholder="Teléfono"/>
            </div>

          <div class="mb-3">       
            <textarea class="form-control" name="message" id="message" rows="4"></textarea>
          </div>

          <div class="mb-3">
            <button type="submit" class=" btn btn-primary w-100 fs-5">Enviar Mensaje</button>
          </div>
      </form>
  
  </div>
</section>




<footer class="w-100  d-flex  align-items-center justify-content-center flex-wrap">
  <p class="fs-5 px-3  pt-3">ExpertD. &copy; Todos Los Derechos Reservados 2021</p>
  <div id="iconos" >
      <a href="#"><i class="bi bi-facebook"></i></a>
      <a href="#"><i class="bi bi-twitter"></i></a>
      <a href="#"><i class="bi bi-instagram"></i></a>  
  </div>
</footer>


  

    </>
  )

  
}


export default Home;