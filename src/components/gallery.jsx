import React from "react";
import MapaChihuahua from "./functional/MapaChihuahua";

export const Gallery = (props) => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title text-center">
          <h2>Alkene</h2>
          <p>
          Sistema de Análisis Predictivo del Consumo de Gas Estacionario<br />
          </p>
          {/* <h2>SGACPAS</h2>
          <p>
          Stationary Gas Consumption Predictive Analisis System<br />
          </p> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 col-md-offset-1">
          <ul className="nav nav-tabs nav-stacked">
            <br />
            <br />
            <br />
            <li role="presentation" className="active"><a href="#page-top">Volumen de Consumo Esperado</a></li>
            <li role="presentation"><a href="#page-top">Probabilidad de Consumo</a></li>
            <li role="presentation"><a href="#page-top">Volumen de Consumo Disponible</a></li>
            <li role="presentation"><a href="#page-top">Tiempo Restante para Vaciado</a></li>
            <li role="presentation"><a href="#page-top">Capacidad Total</a></li>
          </ul>
        </div>
        <div className="col-md-8" >
          <ul className="nav nav-tabs">
            <li role="presentation" className="active"><a href="#page-top">Mapas</a></li>
            <li role="presentation"><a href="#page-top">Planeador de Rutas</a></li>
            <li role="presentation"><a href="#page-top">Tablas</a></li>
            <li role="presentation"><a href="#page-top">Tendencias</a></li>
          </ul>
          <div className="row">
            <MapaChihuahua width="100%"/>
          </div>
        </div>
      </div>
    </div>
  );
};
