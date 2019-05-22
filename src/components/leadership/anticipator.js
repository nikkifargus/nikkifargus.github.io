import React from 'react';
import Layout from './layout'
import image from '../../images/LAT/anticipator.jpg'

const Index = () => (
  <Layout
    title="ANTICIPATOR"
    image={image}
    list={[
      'Added value activities help meet customer requirements.',
      'Prevention activities include planning; training; establishing procedures; risk analysisetc. These anticipate and reduce failure activities.',
      'Inspection activities include audits; electronic monitoring etc.',
      'Failure activities include accidents, reworking, downtime etc.',
      'Many failure activities are caused by poor training, poor equipment, poor procedures or too much pressure.',
      'Continually seek opportunities for improvement. Sources of ideas include your people, your customers and internal audits.',
      'Manage change where necessary. Identify `forces` supporting and resisting the proposed change. Set SMART objectives to strengthen the `supporters` and weaken the `resistors`.',
    ]}
    to='/leadership-skills/'
  />
);

export default Index;
