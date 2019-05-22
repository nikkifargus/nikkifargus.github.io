import React from 'react';
import Layout from './layout'
import image from '../../images/LAT/motivator.jpg'

const Index = () => (
  <Layout
    title="MOTIVATOR"
    image={image}
    list={[
      'All the personal roles impact on motivation.',
      'Motivators are actions that encourage people to achieve.',
      'Motivators include pride in belonging, understanding of role, establishing friendships; recognition and reward for good work and opportunities to learn.',
      'Satisfiers are actions which provide basic resources: they will not motivate, but a lack of them can de-motivate',
      'Satisfiers include good basic pay, good organisation, good personal safely, enough tools to do the job, decent food etc.',
      'If one of your people is under-achieving there is usually a good reason. Take time to find out why.There maybe work or personal problems.',
      'Consult your manager if you need to discipline one of your people. There may be significant legal implications.'
    ]}
    to='/leadership-skills/'
  />
);

export default Index;
