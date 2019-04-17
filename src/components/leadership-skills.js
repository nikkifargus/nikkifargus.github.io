import React from 'react';
import PrimaryButton from './primaryButton'

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
        <div className="col-1" style={{ backgroundColor: 'red' }}>
          <button>
            test
          </button>
        </div>
        <div className="col-11" style={{ backgroundColor: 'blue' }}>
          <PrimaryButton
            title="motivator"
          />
          <PrimaryButton
            title="acheiver"
          />
          <PrimaryButton
            title="anticipator"
          />
          <PrimaryButton
            title="organiser"
          />
          <PrimaryButton
            title="developer"
          />
          <PrimaryButton
            title="problem solver/ decider"
          />
          <PrimaryButton
            title="communicator"
          />
        </div>
        <div>
      </div>
      </div>
    </div>
  </div>
);

export default Index;
