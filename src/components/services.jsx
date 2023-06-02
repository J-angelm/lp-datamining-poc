import React from "react";

export const Services = (props) => {
  return (
    <div class="container-fluid" id="services">
      <div>
        <div className="section-title text-center">
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
      <div>
        <div className="row">
          <div className="col-6 col-md-4 col-md-offset-1">
            <img src="img/graph_1.png" alt="Tendencia Historica Vol Ventas" className="img-responsive"/>
            <br />
            <img src="img/graph_2.png" alt="Tendencia Historica Ofertas Ganadoras" className="img-responsive"/>
            <br />
            <img src="img/graph_3.png" alt="Tendencia de Consumo" className="img-responsive"/>
          </div>
          <div className="col-12 col-md-7">
            <div className="row">
              <div className="col-md-1 col-md-offset-6">
                <p style={{ color: 'yellow', fontSize: '11px' }}>
                  oferta <br />
                  inicial
                </p>
              </div>
              <div className="col-md-2">
                <div className="col-md-2">
                  <p style={{ color: 'yellow', fontSize: '10px' }}>MXN</p>
                </div>
                <div className="col-md-3">
                  <h2 style={{ color: 'yellow', fontSize: '20px' }}> 5,940.00</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="panel panel-default col-md-5 col-md-offset-4">
                <div className="col-md-2">
                  <p>MXN</p>
                </div>
                <div className="col-md-4">
                  <h2 style={{ fontSize: '50px' }}> 12,300.00</h2>
                </div>
              </div>
              <div className="col-md-2 col-md-offset-1">
                <p style={{ fontSize: '18px' }}>
                  oferta <br />
                  actual
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
