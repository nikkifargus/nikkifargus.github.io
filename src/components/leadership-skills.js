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
    <div className="col-sm-12 col-lg-10 offset-lg-1 ">
      <div className="row">
      <div className="col-12">
        <p style={{
          padding: '0.5rem',
          backgroundColor:'purple',
          color: 'white',
          textAlign: 'center'
        }}>
          LEADING A TEAM
        </p>
      </div>

        <div className="col-2" style={{marginTop: '1rem', marginBottom: '1rem'}}>
          <div style={{ backgroundColor: 'orange', height: '100%', alignItems: 'center' }}>
            <Link
              to="/changingWorld"
            >
            <p style={{ textAlign: 'center'}}>
            Changing world
            </p>
            </Link>
          </div>
        </div>
        <div className="col-6" style={{ backgroundColor: '' }}>

          <LeadershipLink
            title="Anticipator"
            link="/anticipator"
          />
          <LeadershipLink
            title="Organiser"
            link="/organiser"
          />
          <LeadershipLink
            title="Developer"
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
        <div className="col-2" style={{marginTop: '1rem', marginBottom: '1rem'}}>
          <div style={{ backgroundColor: 'orange', height: '100%', alignItems: 'center' }}>
          <Link
            to="/motivator"
          >
          <p style={{ textAlign: 'center'}}>
            Motivator
          </p>
          </Link>
        </div>
        </div>
        <div className="col-2" style={{marginTop: '1rem', marginBottom: '1rem'}}>
          <div style={{ backgroundColor: 'orange', height: '100%', alignItems: 'center' }}>
          <Link
            to="/acheiver"
          >
          <p style={{ textAlign: 'center'}}>
            Achiever
          </p>
          </Link>
        </div>
        </div>
        <div className="col-12">
          <p style={{
            padding: '0.5rem',
            backgroundColor:'purple',
            color: 'white',
            textAlign: 'center',
            marginTop: '1rem',
          }}>
          PERSONAL JUDGMENT
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default Index;
