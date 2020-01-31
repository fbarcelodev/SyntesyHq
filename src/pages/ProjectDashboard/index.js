import React from 'react';
import EmailChart from '../Dashboard/EmailChart';
import Nasdaq from '../Charts/Nasdaq';
import BoxInfo from '../Components/BoxInfo';
import PerformanceChart from '../Charts/PerformanceChart';


const ProjectDashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          {/* gráfica ciruclar */}
          <EmailChart />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="header">
              <h4>Financial</h4>
              <p className="category">Economia financiera BWO</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <BoxInfo
                  title={'Ingresos'}
                  quantity={3000}
                />
              </div>
              <div className="col-md-6">
                <BoxInfo
                  title={'Margen beneficio 20%'}
                  quantity={3000}
                  isBenefit={true}
                />
              </div>
              <div className="col-md-6">
                {/* Speed */}
                <PerformanceChart />
              </div>
              <div className="col-md-6">
                {/* umbral de rentabilidad */}
                <Nasdaq />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="row">

      </div>
    </div>
  </div>
);

export default ProjectDashboard;