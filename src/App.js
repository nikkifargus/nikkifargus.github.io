import React from "react";
import {
  Route,
  Link,
} from "react-router-dom";
import './App.scss';
import { HashRouter } from 'react-router-dom'

import index from './components/index';
import aboutUs from './components/about-us';
import whatWeDo from './components/what-we-do';
import clientList from './components/client-list';
import leadershipSkills from './components/leadership-skills';
import ourPeople from './components/our-people';
import employeeSurveys from './components/employee-surveys';

import achiever from './components/leadership/achiever';
import anticipator from './components/leadership/anticipator';
import communicator from './components/leadership/communicator';
import decider from './components/leadership/decider';
import developer from './components/leadership/developer';
import motivator from './components/leadership/motivator';
import organiser from './components/leadership/organiser';
import changingWorld from './components/leadership/changingWorld';

import logo from './images/FCPLogoGrey.jpeg'

function AppRouter() {
  return (
    <HashRouter>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><img alt=""src={logo} style={{ maxWidth: 100}}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us/">About Us</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
              What We Do
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/leadership-skills/">Leadership Skills</Link>
              <Link className="dropdown-item" to="/employee-surveys/">Employee Surveys</Link>
              <Link className="dropdown-item" to="/our-people/">Assess the Quality of Human Capital</Link>
            </div>
          </li>
            <li className="nav-item">
              <Link className="nav-link" to="/client-list/">Client List <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>

        <div
          className="p-4"
        >
          <Route path="/" exact component={index} />
          <Route path="/client-list/" component={clientList} />
          <Route path="/what-we-do/" component={whatWeDo} />
          <Route path="/about-us/" component={aboutUs} />
          <Route path="/leadership-skills/" component={leadershipSkills} />
          <Route path="/our-people/" component={ourPeople} />
          <Route path="/employee-surveys/" component={employeeSurveys} />
          <Route path="/achiever" component={achiever} />
          <Route path="/anticipator" component={anticipator} />
          <Route path="/communicator" component={communicator} />
          <Route path="/decider" component={decider} />
          <Route path="/developer" component={developer} />
          <Route path="/motivator" component={motivator} />
          <Route path="/organiser" component={organiser} />
          <Route path="/changingWorld" component={changingWorld} />
        </div>
        <footer style={{bottom:0, padding: 2}}>
          <hr />
          <div style={{marginBottom: 0, textAlign: 'center', color: `#565347`}}> Our standards are based on those specified by the <a href="https://www.cipd.co.uk/">Chartered Institute of Personnel & Development</a>, the <a href="http://www.bps.org.uk/">British Psychological Society</a>, and the <a href="http://www.ibconsulting.org.uk/">Institute of Business Consulting</a>.</div>
          <div style={{textAlign: 'center', color: `#565347`}}>peter@fargus.co.uk | 01423 566035 | dee@fargus.co.uk</div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default AppRouter;
