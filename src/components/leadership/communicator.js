import React from 'react';
import Layout from './layout'
import image from '../../images/LAT/communicator.png'

const Index = () => (
  <Layout
    title="COMMUNICATOR OPTIONS"
    image={image}
    list={[
      'Communications can be distorted anywhere along the stages: encode -transmit - receive - decode – feedback.',
      'Distortion of meaning can occur through filters such as selective attention, categorisation, context and expectation.',
      'Be aware of your natural inclination towards: Assertiveness - Receptiveness. Strong Relationships-Self Containment.',
      'You will mainly use two or three of these styles: Co-Ordinator; Completer; Diplomat; Evaluator; Ideas Generator; Implementer. Influencer; Networker.',
      'Communicate regularly with your people, Team briefs should be organised systematically and regularly. Also useone-to-ones.',
      'Develop situation specific communications skills - interviewing; presenting; writing documents; negotiating, networking, managing (or participating in) meetings.',
    ]}
    to='/leadership-skills/'
  />
);

export default Index;
