import "./Home.css";

import { Link } from "react-router-dom";

export function Home() {
  

  return (
    <>
      <div className="banner text-white">
        <h3>Health On The Go</h3>
        <h5>Solución de movilidad y salud</h5>
      </div>

      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="../../src/assets/barbershop-logo.png"
              alt="img"
              className="w-50"
            />
            <hr />
          </div>
        </div>
      </section>

      <section className="container my-2">
        <div className="row text-center">
          <div className="col-6 my-3">
            <div
              className="card text-bg-dark h-100 p-4"
              style={{ height: "300px" }}
            >
              <img
                src="../../src/assets/salud.jpg"
                alt="img"
                className="card-img-top"
                style={{ objectFit: "cover", height: "100%" }}
              />
              
              <Link to="/salud" className="btn btn-primary p-2">
                Ingresar
              </Link>
            </div>
          </div>

          <div className="col-6 my-3">
            <div
              className="card text-bg-dark h-100 p-4"
              style={{ height: "300px" }}
            >
              <img
                src="../../src/assets/movi.png"
                alt="img"
                className="card-img-top"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <button className="btn btn-primary p-2">Ingresar</button>
            </div>
          </div>
        </div>
      </section>

    <section class="container-fluid bg-dark fuentes4">
    <br />
<br />
    <div class="row text-white">
    <div class="col-3 text-center mx-5"> 
      <p>Realizado por</p>
      <a href="https://github.com/VanneHi123?tab=repositories" target="_blank">
        <i class="bi bi-github fs-1 text-white me-2"></i>
      </a>
      <a href="https://wa.me/qr/X74GZEWXKNGOK1" target="_blank">
        <i class="bi bi-whatsapp fs-1 text-white me-2"></i>
      </a>
      <a href="https://www.instagram.com/"  target="_blank">
        <i class="bi bi-instagram fs-1 text-white me-2"></i>
      </a>
    </div>
    
    <div class="col-8">  
      <h5>Juliet Vannesa Higuita</h5>
      <p>Soy aficionada a los procesos creativos y esto ha sido un elemento central en mi formación académica y profesional, descubir los diferentes bemoles de todos los procesos y acciones que genero hasta lograr materializar las diferentes ideas o prototipos.</p>
    </div>
  </div>
  <br />
<br />
</section>

<footer class="container-fluid bg-dark p-2 text-white text-center">
  <div class="row">
    <div class="col-12">
      <p>&copy;2024 Todos los derechos reservados.</p>
    </div>
  </div>
</footer>




    </>
  );
}
