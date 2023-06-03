import React from "react";

import CountdownTimer from "./functional/CountdownTimer";
import MapaChihuahua from "./functional/MapaChihuahua";

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
          <div className="col-12">
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
                </div>
              </div>
            </div>
            <div className="row nested-horizontal">
              <div className="panel panel-border col-md-offset-3">
                <div className="nested-horizontal">
                  <p>MXN</p>
                  <h2 style={{ fontSize: '50px' }}> 12,300.00</h2>
                </div>
              </div>
              <div className="panel panel-margin">
                <p style={{ fontSize: '22px', color: '#fff', marginLeft: '25px', marginTop: '10px' }}>
                  OFERTA <br />
                  ACTUAL
                </p>
              </div>
            </div>
            <br />
            <div className="row nested-horizontal">
              <div className="panel col-md-offset-2">
                <div className="nested-horizontal">
                  <form class="form-inline">
                    <div class="form-group">
                      {/* <label class="sr-only" for="exampleInputAmount">12,460 (in dollars)</label> */}
                      <div class="input-group">
                        {/* <div class="input-group-addon">MXN</div> */}
                        <input type="number" class="form-control" id="exampleInputAmount" placeholder="MXN 12,460.00" min="12460" step="1.00" />
                        {/* <div class="input-group-addon">.00</div> */}
                      </div>
                    </div>
                    <button type="submit" class="btn btn-custom-two btn-lg">
                      Añadir Oferta
                    </button>
                  </form>
                  <div className="panel nested-horizontal">
                    <p style={{ marginLeft:'30px'}}>
                      tiempo <br /> restante
                    </p>
                    <CountdownTimer/>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <MapaChihuahua />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
