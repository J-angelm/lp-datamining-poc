import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Subasta de Datos</h2>
          <p>
            Cada día se realiza una subasta de los datos minados y predictivos del día siguiente.
          </p>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
      <div className="container-fluid">
        <div class="row">
          <div class="col-6 col-md-4">
          {" "}
            <img src="img/graph_1.png" alt="Tendencia Historica Vol Ventas" className="img-responsive"/>
            <br />
            <img src="img/graph_2.png" alt="Tendencia Historica Ofertas Ganadoras" className="img-responsive"/>
            <br />
            <img src="img/graph_3.png" alt="Tendencia de Consumo" className="img-responsive"/>
          {" "}
          </div>
          <div class="col-12 col-md-8">
            <div class="row">
              <div class="col-md-2">
              </div>
              <div class="col-md-8">
                <div class="col-md-1">
                  <p>MXN</p>
                </div>
                <div class="col-md-4">
                  <h2> 12,300</h2>
                </div>
              </div>
              <div class="col-md-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
