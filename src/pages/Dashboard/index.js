import React from 'react';
import EmailChart from './EmailChart';
import Nasdaq from '../Charts/Nasdaq';
import BoxInfo from '../Components/BoxInfo';
import PerformanceChart from '../Charts/PerformanceChart';
import { Accordion, Panel } from 'react-bootstrap';


const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />

          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />


            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>




          </div>
        </div>


        <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />
          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />
            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>
          </div>
        </div>



        <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />
          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />
            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />

          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />


            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>




          </div>
        </div>

        <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />

          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />


            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>




          </div>
        </div>

        <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />

          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />


            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>




          </div>
        </div>

        <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />

          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />


            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>




          </div>
        </div>

        <div className="card col-md-4 container-project-dashboard">
          {/* gráfica ciruclar */}
          <div className="col-md-6">
            <EmailChart />

          </div>
          <div className="col-md-6">
            <BoxInfo
              title={'Ingresos'}
              quantity={3000}
            />
            <BoxInfo
              title={'Margen beneficio 20%'}
              quantity={3000}
              isBenefit={true}
            />
          </div>
          <div className="col-md-12">
            {/* Speed */}
            <PerformanceChart />


            <div>
              <Accordion>
                <Panel header={<span>Umbral de rentabilidad<b className="caret"></b></span>} eventKey="1">
                  {/* umbral de rentabilidad */}
                  <Nasdaq />
                </Panel>
              </Accordion>
            </div>




          </div>
        </div>



      <div className="row">

      </div>



    </div>
  </div>
);

export default Dashboard;