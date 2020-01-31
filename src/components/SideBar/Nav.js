import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">

        {/* dashboard */}
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>

        {/* create project */}
        <li className={this.isPathActive('/create-project') ? 'active' : null}>
          <Link to="/create-project">
            <i className="pe-7s-plus"></i>
            <p>Create Project</p>
          </Link>
        </li>

        {/* projects */}
        <li className={this.isPathActive('/components') || this.state.projectMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ projectMenuOpen: !this.state.projectMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Projects
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.projectMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/project-dashboard') ? 'active' : null}>
                  <Link to="/project-dashboard">Arilim</Link>
                </li>
                <li className={this.isPathActive('/project-dashboard') ? 'active' : null}>
                  <Link to="/project-dashboard">Bwo</Link>
                </li>
                <li className={this.isPathActive('/project-dashboard') ? 'active' : null}>
                  <Link to="/project-dashboard">La P'tite Grenouille</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        {/* components template*/}
        <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Components
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/components/buttons">Buttons</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">Grid System</Link>
                </li>
                <li className={this.isPathActive('/components/icons') ? 'active' : null}>
                  <Link to="/components/icons">Icons</Link>
                </li>
                <li className={this.isPathActive('/components/notifications') ? 'active' : null}>
                  <Link to="/components/notifications">Notifications</Link>
                </li>
                <li className={this.isPathActive('/components/panels') ? 'active' : null}>
                  <Link to="/components/panels">Panels</Link>
                </li>
                <li className={this.isPathActive('/components/sweetalert') ? 'active' : null}>
                  <Link to="/components/sweetalert">Sweet Alert</Link>
                </li>
                <li className={this.isPathActive('/components/typography') ? 'active' : null}>
                  <Link to="/components/typography">Typography</Link>
                </li>
                <li className={this.isPathActive('/forms/regular-forms') ? 'active' : null}>
                  <Link to="/forms/regular-forms">Regular Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Extended Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/validation-forms') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Validation Forms</Link>
                </li>
                <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li>
                <li className={this.isPathActive('/tables/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Extended Tables</Link>
                </li>
                <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                </li>
                <li className={this.isPathActive('/maps/google-map') ? 'active' : null}>
                  <Link to="/maps/google-map">Google Map</Link>
                </li>
                <li className={this.isPathActive('/maps/vector-map') ? 'active' : null}>
                  <Link to="/maps/vector-map">Vector Map</Link>
                </li>
                <li className={this.isPathActive('/charts') ? 'active' : null}>
                  <Link to="/charts"><p>Charts</p></Link>
                </li>
                <li className={this.isPathActive('/calendar') ? 'active' : null}>
                  <Link to="/calendar"><p>Calendar</p></Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);