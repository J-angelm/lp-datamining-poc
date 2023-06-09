import React from "react";
import MapaChihuahua from "./functional/MapaChihuahua";

export const Gallery = (props) => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title text-center">
          <h2>Alkene</h2>
          <p>
          Sistema de Análisis Predictivo del Consumo de Gas Estacionario
          </p>
          {/* <h2>SGACPAS</h2>
          <p>
          Stationary Gas Consumption Predictive Analisis System<br />
          </p> */}
        </div>
      </div>
      <div id="alkene-sys" className="row nav-default">
        <div className="col-md-2">
          <ul className="nav nav-tabs nav-stacked">
            <br />
            <br />
            <br />
            <li role="presentation" className="active"><button>Volumen de Consumo Esperado</button></li>
            <li role="presentation"><button>Probabilidad de Consumo</button></li>
            <li role="presentation"><button>Volumen de Consumo Disponible</button></li>
            <li role="presentation"><button>Tiempo Restante para Vaciado</button></li>
            <li role="presentation"><button>Capacidad Total</button></li>
          </ul>
        </div>
        <div className="col-md-9" >
          <ul className="nav nav-tabs">
            <li role="presentation" className="active"><button>Mapas</button></li>
            <li role="presentation"><button>Planeador de Rutas</button></li>
            <li role="presentation"><button>Tablas</button></li>
            <li role="presentation"><button>Tendencias</button></li>
          </ul>
          <div className="row">
            <MapaChihuahua width="100%"/>
          </div>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
};
