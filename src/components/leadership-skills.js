import React from 'react';
import LeadershipLink from './leadershipLink'
import { Link } from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      We develop leadership and management skills
    </h4>
    <p>
      It is clear from both experience and research that leadership and management skills impact significantly on employee motivation, which then influences organisation performance and market value. Consequently we have worked with our clients to create an 8 module program called `Leading a Team`. The modules aim to boost management/leadership effectiveness.
    </p>
    <div className="col-sm-12 col-md-10 offset-lg-1 ">
      <div className="row">
      <div className="col-12">
        <p className="header">
          LEADING A TEAM - for typical content click on each heading
        </p>
      </div>

        <div className="col-md-2 col-sm-12 margin">
        <Link
          to="/changingWorld"
        >
          <div className="verticalLink">
          <div className="mobileHide"/>
            <p style={{ textAlign: 'center'}}>
              Anticipating change – Scouting
            </p>
          </div>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12" >

          <LeadershipLink
            title="Organising"
            link="/organiser"
          />
          <LeadershipLink
            title="Learning"
            link="/developer"
          />
          <LeadershipLink
            title="Problem solving"
            link="/decider"
          />
          <LeadershipLink
            title="Communicating"
            link="/communicator"
          />
          <LeadershipLink
            title="Anticipating"
            link="/anticipator"
          />
        </div>
        <div className="col-md-2 col-sm-12 margin">
        <Link
          to="/motivator"
        >

          <div className="verticalLink">
          <div className="mobileHide"/>
          <p style={{ textAlign: 'center'}}>
            Motivating
          </p>
        </div>
        </Link>

        </div>
        <div className="col-md-2 col-sm-12 margin" >
        <Link
          to="/achiever"
        >
          <div className="verticalLink">
          <div className="mobileHide"/>
          <p style={{ textAlign: 'center'}}>
            Achieving
          </p>
        </div>
        </Link>

        </div>
        <div className="col-12">
          <p className="header">
          PERSONAL JUDGMENT - required at all times
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default Index;
