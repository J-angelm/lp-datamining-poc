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
          <div className="col-12 col-md-6">
            <div className="row nested-horizontal">
              <div className="panel col-md-offset-6">
                <p style={{ color: 'yellow', fontSize: '11px' }}>
                  oferta <br />
                  inicial
                </p>
              </div>
              <div className="panel panel-margin">
                <div className="nested-horizontal">
                  <p style={{ color: 'yellow', fontSize: '10px' }}>MXN</p>
                  <h2 style={{ color: 'yellow', fontSize: '20px' }}> 5,940.00</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row nested-horizontal">
              <div className="panel panel-border col-md-offset-4">
                <div className="nested-horizontal">
                  <p>MXN</p>
                  <h2 style={{ fontSize: '50px' }}> 12,300.00</h2>
                </div>
              </div>
              <div className="panel panel-margin">
                <p style={{ fontSize: '22px' }}>
                  OFERTA <br />
                  ACTUAL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
