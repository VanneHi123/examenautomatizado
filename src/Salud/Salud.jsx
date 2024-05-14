import React from "react";
import { Link } from "react-router-dom";

export function Salud() {
  return (
    <>
      <div className="banner1 text-black">
        <h3>Health On The Go</h3>
        <h5>Solución de movilidad y salud</h5>
      </div>

      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="texto-llamativo">COMPONENTE SALUD</p>
            <br />
            <b>Health On The Go</b>

            <p>
              Automatizar las citas médicas es esencial para priorizar las atenciones urgentes. Esta automatización permite gestionar eficientemente las citas, reduciendo el tiempo de espera y asegurando que los casos urgentes reciban atención rápida. Además, minimiza errores humanos en la asignación de horarios y recursos médicos, mejorando la experiencia del paciente. Al agilizar el proceso de programación, se optimiza el uso de recursos y se maximiza la capacidad de atención de la institución médica. Esto conduce a una atención más oportuna, mayor satisfacción del paciente y mejor reputación institucional. En resumen, la automatización de citas médicas mejora la calidad de atención al tiempo que prioriza casos urgentes, esencial para una atención médica eficiente y efectiva.</p>
          </div>
          <br />
          <br />
        </div>
      </section>

      <section className="container my-2">
        <div className="row text-center">
          <div className="col-md-3 my-3">
            <div className="card text-bg-dark h-100 p-4" style={{ height: "300px" }}>
              <p>Urgente</p>
              <p>Las situaciones de atención urgente son aquellas en las que se requiere atención médica inmediata debido a la gravedad de la condición médica...</p>
            </div>
          </div>

          <div className="col-md-3 my-3">
            <div className="card text-bg-dark h-100 p-4" style={{ height: "300px" }}>
              <p>Alta</p>
              <p>Las situaciones de alta prioridad son aquellas que, aunque no son inmediatamente amenazantes para la vida, aún requieren atención médica rápida debido a la gravedad de la enfermedad o lesión...</p>
            </div>
          </div>

          <div className="col-md-3 my-3">
            <div className="card text-bg-dark h-100 p-4" style={{ height: "300px" }}>
              <p>Media</p>
              <p>Las situaciones de media prioridad son aquellas que requieren atención médica en un plazo de tiempo más prolongado, pero que aún así necesitan ser tratadas...</p>
            </div>
          </div>

          <div className="col-md-3 my-3">
            <div className="card text-bg-dark h-100 p-4" style={{ height: "300px" }}>
              <p>Baja</p>
              <p>Las situaciones de baja prioridad son aquellas que pueden esperar un período de tiempo más largo para recibir atención médica...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="texto-llamativo">REGISTRA TU SOLICITUD</p>
            <br />
            <iframe
              title="Registro de Solicitud"
              width="640"
              height="480"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=_tQLPBERE02ODHwzuet1gWqMiTRVSg5IrkqFJjGfY0VUQ0xRVlFWUUxCNlA2VFRXMklRTzdLUzlFMy4u&embed=true"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
              allowFullScreen
              webkitAllowFullScreen
              mozAllowFullScreen
              msAllowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
