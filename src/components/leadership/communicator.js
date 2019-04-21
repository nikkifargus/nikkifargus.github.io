import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
    Communicator Options
    </h4>
    <div>
      <ul>
        <li>Communications can be distorted anywhere along the stages: encode -transmit - receive - decode – feedback.</li>
        <li>Distortion of meaning can occur through filters such as selective attention, categorisation, context and expectation.</li>
        <li>Be aware of your natural inclination towards: Assertiveness - Receptiveness
        Strong Relationships-Self Containment</li>
        <li>You will mainly use two or three of these styles: Co-Ordinator; Completer; Diplomat; Evaluator; Ideas Generator; Implementer. Influencer; Networker.
        </li>
        <li>Communicate regularly with your people, Team briefs should be organised systematically and regularly. Also useone-to-ones.</li>
        <li>Develop situation specific communications skills - interviewing; presenting; writing documents; negotiating, networking, managing (or participating in) meetings.</li>
      </ul>
    </div>
    <Link style={{ justifyContent: 'flex-end'}} to="/leadership-skills/">
    <h5 style={{
      color: `#565347`,
    }}>
        back
    </h5></Link>

  </div>
);

export default Index;
