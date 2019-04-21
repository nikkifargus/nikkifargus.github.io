import React from 'react';
import LeadershipLink from './leadershipLink'
import { Link } from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      We develop management and leadership skills
    </h4>
    <p style={{ color: `#565347` }}>
      It is clear from both experience and research that leader style and skill impacts significantly on employee motivation, which then influences organisation performance and market value. Consequently we have worked with our clients to create an 8 module program aimed at boosting management/leadership effectiveness.
    </p>
    <div className="col-sm-12 col-lg-10 offset-lg-1 ">
      <div className="row">
      <div className="col-12" style={{ backgroundColor: 'red' }}> Leading a Team </div>

        <div className="col-1" style={{ backgroundColor: 'red' }}>
          <Link
            to="/motivator"
          >
          <div>
          motivator
          </div>
          </Link>
        </div>
        <div className="col-11" style={{ backgroundColor: '' }}>

          <LeadershipLink
            title="acheiver"
            link="/achiever"
          />
          <LeadershipLink
            title="anticipator"
            link="/anticipator"
          />
          <LeadershipLink
            title="organiser"
            link="/organiser"
          />
          <LeadershipLink
            title="developer"
            link="/developer"
          />
          <LeadershipLink
            title="problem solver/ decider"
            link="/decider"
          />
          <LeadershipLink
            title="communicator"
            link="/communicator"
          />
        </div>
        <div>
      </div>
      </div>
    </div>
  </div>
);

export default Index;
