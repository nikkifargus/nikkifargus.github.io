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
    <p>
      It is clear from both experience and research that leader style and skill impacts significantly on employee motivation, which then influences organisation performance and market value. Consequently we have worked with our clients to create an 8 module program aimed at boosting management/leadership effectiveness.
    </p>
    <div className="col-sm-12 col-md-10 offset-lg-1 ">
      <div className="row">
      <div className="col-12">
        <p style={{
          padding: '0.5rem',
          backgroundColor:`#c7e0e8`,
          textAlign: 'center',
          border: '2px solid #565347',
        }}>
          LEADING A TEAM
        </p>
      </div>

        <div className="col-md-2 col-sm-12" style={{marginTop: '1rem', marginBottom: '1rem'}}>
        <Link
          to="/changingWorld"
        >
          <div className="verticalLink">
          <div className="mobileHide"/>
            <p style={{ textAlign: 'center'}}>
            Changing world
            </p>
          </div>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12" >

          <LeadershipLink
            title="Anticipator"
            link="/anticipator"
          />
          <LeadershipLink
            title="Organiser"
            link="/organiser"
          />
          <LeadershipLink
            title="Coach"
            link="/developer"
          />
          <LeadershipLink
            title="Problem solver/ decider"
            link="/decider"
          />
          <LeadershipLink
            title="Communicator"
            link="/communicator"
          />
        </div>
        <div className="col-md-2 col-sm-12" style={{marginTop: '1rem', marginBottom: '1rem'}}>
        <Link
          to="/motivator"
        >

          <div className="verticalLink">
          <div className="mobileHide"/>
          <p style={{ textAlign: 'center'}}>
            Motivator
          </p>
        </div>
        </Link>

        </div>
        <div className="col-md-2 col-sm-12" style={{marginTop: '1rem', marginBottom: '1rem', justifyContent: 'center'}}>
        <Link
          to="/achiever"
        >
          <div className="verticalLink">
          <div className="mobileHide"/>
          <p style={{ textAlign: 'center'}}>
            Achiever
          </p>
        </div>
        </Link>

        </div>
        <div className="col-12">
          <p style={{
            padding: '0.5rem',
            backgroundColor:`#c7e0e8`,
            textAlign: 'center',
            marginTop: '1rem',
            border: '2px solid #565347',
          }}>
          PERSONAL JUDGMENT
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default Index;
